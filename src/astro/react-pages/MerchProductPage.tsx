import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { VariantSelector } from "@/components/VariantSelector";
import { Link } from "@/lib/router-stub";
import { MerchCard } from "@/components/MerchCard";
import { Collapsible } from "@/components/Collapsible";
import { SizeGuide } from "@/components/SizeGuide";
import { SIZE_GUIDES } from "@/lib/sizeGuides";
import {
  MERCH_DEFAULT_COLOR,
  MERCH_DESCRIPTIONS,
  formatMerchPrice,
  parseMerchDescription,
} from "@/lib/merchContent";
import { frontImageForColor } from "@/lib/merchImages";
import { useCartStore } from "@/stores/cartStore";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import type { ShopifyProduct } from "@/lib/shopify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

// Apparel PDP. Mirrors the oil product page's skeleton (Header, gallery,
// details column, Footer) but apparel-specific: a size variant selector +
// multi-image gallery, and NO oil-only sections (lab tiles, origin, subscribe,
// volume discount). The SELECTED variant + its raw Shopify price are what get
// added to the cart, which flows through CartDrawer's non-oil price path.
function MerchProductInner({
  product,
  related = [],
}: {
  product: ShopifyProduct;
  related?: ShopifyProduct[];
}) {
  const node = product.node;
  const variants = node.variants.edges.map((e) => e.node);
  const images = node.images?.edges?.map((e) => e.node) ?? [];
  // Pre-select the per-product default colour (e.g. Vintage Black / Maroon) when
  // defined; otherwise the first available variant.
  const defaultColorName = MERCH_DEFAULT_COLOR[node.handle];
  const firstAvailable =
    (defaultColorName
      ? variants.find(
          (v) =>
            v.availableForSale &&
            v.selectedOptions.some((o) => /colou?r/i.test(o.name) && o.value === defaultColorName),
        )
      : null) ??
    variants.find((v) => v.availableForSale) ??
    variants[0];

  // Drop Shopify's synthetic "Title / Default Title" option (products with no
  // real variants) so single-variant merch shows no picker.
  const realOptions = node.options.filter(
    (o) => !(o.values.length === 1 && o.values[0] === "Default Title"),
  );

  // Selected option values, e.g. { Color: "Maroon", Size: "L" }. Initialized
  // from the first available variant.
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() =>
    Object.fromEntries((firstAvailable?.selectedOptions ?? []).map((o) => [o.name, o.value])),
  );
  const [quantity, setQuantity] = useState(1);
  // A thumbnail the user explicitly clicked; overrides the variant image until
  // the variant changes.
  const [manualImageUrl, setManualImageUrl] = useState<string | null>(null);
  const addItem = useCartStore((s) => s.addItem);

  // The variant whose options exactly match the current selection.
  const selected =
    variants.find(
      (v) =>
        v.selectedOptions.length === Object.keys(selectedOptions).length &&
        v.selectedOptions.every((o) => selectedOptions[o.name] === o.value),
    ) ?? null;

  // The currently selected colour (if the product has a colour option).
  const selectedColor = Object.entries(selectedOptions).find(([k]) =>
    /colou?r/i.test(k),
  )?.[1];

  // Reset a manual thumbnail pick only when the COLOUR changes, so the newly
  // chosen colour's image takes over. Changing only the SIZE keeps whatever
  // image the shopper has selected.
  useEffect(() => {
    setManualImageUrl(null);
  }, [selectedColor]);

  // Front mockup for the selected colour, resolved from the gallery filenames
  // (robust to scrambled per-variant image assignments).
  const colorFront = selectedColor
    ? frontImageForColor(selectedColor, images.map((im) => im.url), selected?.image?.url)
    : null;

  // Main gallery image, DERIVED each render (not via an effect, so a colour
  // change updates it immediately): a manual thumbnail pick wins; else the
  // selected colour's front mockup; else the variant image; else the first.
  const mainImageUrl =
    manualImageUrl ?? colorFront ?? selected?.image?.url ?? images[0]?.url ?? "";

  const unitPrice = selected
    ? parseFloat(selected.price.amount)
    : parseFloat(node.priceRange.minVariantPrice.amount);
  const canAdd = !!selected && selected.availableForSale;

  const handleAdd = () => {
    if (!selected) return;
    addItem({
      product,
      variantId: selected.id,
      variantTitle: selected.title,
      // Store the Shopify variant price (merch isn't in the locale price table);
      // CartDrawer's `!slug` path reads this back.
      price: { amount: selected.price.amount, currencyCode: selected.price.currencyCode },
      quantity,
      selectedOptions: selected.selectedOptions || [],
      isSubscription: false,
    });
    if (typeof window !== "undefined") {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "add_to_cart_custom", item_name: node.title });
    }
    toast.success(`${node.title} added to cart`);
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header forceScrolled locale={DEFAULT_LOCALE} />

      {/* Back to the collection. */}
      <Link
        to="/merch"
        className="absolute z-40 top-24 md:top-36 left-5 md:left-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
        style={{
          fontFamily: "UDC Working Man Sans, sans-serif",
          color: "#1B4229",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontSize: "0.8rem",
        }}
      >
        <span aria-hidden style={{ fontSize: "1.15rem", lineHeight: 1 }}>←</span>
        Back
      </Link>

      {/* Hero: the ENTIRE viewport split into two equal halves. Each half is a
          full-height flex box that centres its content both vertically and
          horizontally — product image on the left, buy box on the right.
          Flexbox (not grid) so the centring actually takes: an earlier grid
          version used `items-center`, which only centres within a content-sized
          row and left the block pinned to the top. */}
      {/* md:pt-[92px] + each half's min-h of (100vh - 131px) centres the content
          in the viewport AREA BELOW the fixed announce-bar + header stack
          (131px tall), not the full viewport — otherwise the header eats the top
          and everything rides high. */}
      <section className="flex flex-col md:flex-row md:pt-[92px]">
        {/* LEFT half — product image dead-centre, with whitespace around it */}
        <div className="md:w-1/2 md:min-h-[calc(100vh-131px)] relative flex flex-col items-center justify-center px-6 pt-28 pb-10 md:py-10">
          {/* Product image — centred and large. Background is transparent (the
              cream section shows through) so cream-background mockups blend
              seamlessly into the page, like the reference. */}
          <div
            className="w-full aspect-square flex items-center justify-center"
            style={{ maxWidth: "750px" }}
          >
            {mainImageUrl && (
              <img
                src={mainImageUrl}
                alt={node.title}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          {/* Thumbnails — tucked into the bottom-left of the section on desktop
              (out of flow, so they don't pull the image off-centre); stacked
              below the image on mobile. */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 mt-5 max-w-full md:mt-0 md:absolute md:bottom-10 md:left-6 md:max-w-[calc(100%-3rem)]">
              {images.map((im, i) => (
                <button
                  key={im.url}
                  type="button"
                  onClick={() => setManualImageUrl(im.url)}
                  aria-label={`View image ${i + 1}`}
                  className="rounded-lg overflow-hidden flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    border:
                      im.url === mainImageUrl
                        ? "2px solid #1B4229"
                        : "2px solid rgba(27, 66, 41, 0.15)",
                  }}
                >
                  <img src={im.url} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT half — buy box (incl. description), centred as a block. The
            content fills most of the half (wide buy box / add-to-cart button,
            like the reference) with symmetric side padding, capped so it never
            gets absurdly wide on ultra-wide screens. */}
        <div className="md:w-1/2 md:min-h-[calc(100vh-131px)] flex items-center justify-center px-6 pb-16 md:px-14 md:py-10">
          <div className="flex flex-col w-full" style={{ maxWidth: "880px" }}>
            <h1
              className="mb-2"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                color: "#1B4229",
                fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {node.title}
            </h1>
            <p
              className="mb-6"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                color: "#1B4229",
                fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)",
                letterSpacing: "0.03em",
              }}
            >
              {formatMerchPrice(unitPrice)}
            </p>

            <div className="mb-6" style={{ borderTop: "1px solid rgba(27, 66, 41, 0.15)" }} />

            {realOptions.length > 0 && (
              <div className="mb-6">
                <VariantSelector
                  options={realOptions}
                  variants={variants}
                  selected={selectedOptions}
                  onChange={setSelectedOptions}
                />
              </div>
            )}

            <div className="mb-6">
              <p
                className="uppercase mb-2"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: "#1B4229",
                  letterSpacing: "0.1em",
                  fontSize: "0.85rem",
                  opacity: 0.7,
                }}
              >
                Quantity
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 rounded-lg border transition-all duration-200"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.05em",
                    fontSize: "0.95rem",
                    borderColor: "#1B4229",
                    backgroundColor: "transparent",
                    color: "#1B4229",
                    cursor: "pointer",
                  }}
                >
                  −
                </button>
                <span
                  className="text-center"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    color: "#1B4229",
                    letterSpacing: "0.05em",
                    fontSize: "0.95rem",
                    minWidth: "2rem",
                  }}
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 rounded-lg border transition-all duration-200"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.05em",
                    fontSize: "0.95rem",
                    borderColor: "#1B4229",
                    backgroundColor: "transparent",
                    color: "#1B4229",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              disabled={!canAdd}
              onClick={handleAdd}
              className="w-full h-14 rounded-lg font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{
                backgroundColor: "#CDDB2D",
                color: "#1B4229",
                fontFamily: "UDC Working Man Sans, sans-serif",
                letterSpacing: "0.05em",
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              }}
            >
              {canAdd
                ? `ADD TO CART · ${formatMerchPrice(unitPrice * quantity)}`
                : "SOLD OUT"}
            </button>

            <p
              className="mt-4 text-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6, fontSize: "0.9rem" }}
            >
              Printed on demand and shipped separately from olive oil orders.
            </p>

            {/* Description — branded override (MERCH_DESCRIPTIONS) when defined,
                else Shopify's copy. Rendered as a lead sentence + compact spec
                list so it reads like the reference's bullets. */}
            {(() => {
              const raw =
                MERCH_DESCRIPTIONS[node.handle] ?? node.descriptionHtml ?? node.description;
              if (!raw) return null;
              const { lead, specs } = parseMerchDescription(raw);
              return (
                <Collapsible label="Description" defaultOpen>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#1B4229",
                      opacity: 0.85,
                      lineHeight: 1.6,
                      fontSize: "1.25rem",
                    }}
                  >
                    {lead}
                  </p>
                  {specs.length > 0 && (
                    <ul className="flex flex-col gap-1">
                      {specs.map((s, i) => (
                        <li
                          key={i}
                          className="flex gap-2"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            color: "#1B4229",
                            opacity: 0.7,
                            lineHeight: 1.45,
                            fontSize: "1.05rem",
                          }}
                        >
                          <span aria-hidden style={{ opacity: 0.5 }}>·</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Collapsible>
              );
            })()}

            {/* Collapsible size guide (only products with a guide defined). */}
            {SIZE_GUIDES[node.handle] && <SizeGuide guide={SIZE_GUIDES[node.handle]} />}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-5 md:px-8 pb-16 md:pb-24">
          <div className="mx-auto" style={{ maxWidth: "1200px" }}>
            <h2
              className="text-center mb-10 md:mb-12"
              style={{ fontFamily: "Beverly Drive, serif", color: "#1B4229", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              More merch
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {related.map((p) => (
                <MerchCard key={p.node.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer locale={DEFAULT_LOCALE} />
      <Sonner />
    </div>
  );
}

export default function MerchProductPage({
  product,
  related,
}: {
  product: ShopifyProduct;
  related?: ShopifyProduct[];
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <MerchProductInner product={product} related={related} />
    </QueryClientProvider>
  );
}
