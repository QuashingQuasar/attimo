import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "sonner";
import { Minus, Plus } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { VariantSelector } from "@/components/VariantSelector";
import { Link } from "@/lib/router-stub";
import { useCartStore } from "@/stores/cartStore";
import { DEFAULT_LOCALE, formatPrice } from "@/lib/i18n/config";
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
  const firstAvailable = variants.find((v) => v.availableForSale) ?? variants[0];

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

  // Reset a manual thumbnail pick when the variant changes, so the newly
  // chosen colour's image takes over.
  useEffect(() => {
    setManualImageUrl(null);
  }, [selected?.id]);

  // Main gallery image, DERIVED each render (not via an effect, so a colour
  // change updates it immediately): a manual thumbnail pick wins; else the
  // selected variant's own image (per-colour mockup); else the first image.
  const mainImageUrl =
    manualImageUrl ?? selected?.image?.url ?? images[0]?.url ?? "";

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
        <div className="md:w-1/2 md:min-h-[calc(100vh-131px)] flex items-center justify-center px-6 pt-28 pb-10 md:py-10">
          <div className="flex flex-col items-center gap-5 w-full" style={{ maxWidth: "440px" }}>
            <div
              className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {mainImageUrl && (
                <img
                  src={mainImageUrl}
                  alt={node.title}
                  className="w-full h-full object-contain"
                  style={{ padding: "6%" }}
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
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
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <img src={im.url} alt="" className="w-full h-full object-contain" style={{ padding: "3px" }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT half — buy box (incl. description), centred as a block */}
        <div className="md:w-1/2 md:min-h-[calc(100vh-131px)] flex items-center justify-center px-6 pb-16 md:py-10">
          <div className="flex flex-col w-full" style={{ maxWidth: "440px" }}>
            <h1
              className="mb-2"
              style={{
                fontFamily: "Beverly Drive, serif",
                color: "#1B4229",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                letterSpacing: "0.03em",
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
              {formatPrice(unitPrice, DEFAULT_LOCALE, 2)}
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

            <div className="flex items-center gap-3 mb-6">
              <span
                className="uppercase"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: "#1B4229",
                  letterSpacing: "0.1em",
                  fontSize: "0.85rem",
                  opacity: 0.7,
                }}
              >
                Qty
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}>
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
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
                ? `ADD TO CART · ${formatPrice(unitPrice * quantity, DEFAULT_LOCALE, 2)}`
                : "SOLD OUT"}
            </button>

            <p
              className="mt-4 text-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6, fontSize: "0.9rem" }}
            >
              Printed on demand and shipped separately from oil orders.
            </p>

            {/* Description — part of the right-hand buy box. Printful's copy is
                one long " • "-delimited run; split it into a lead sentence + a
                compact spec list so it reads like the reference's bullets and
                stays short enough to keep the column centred. */}
            {node.description && (() => {
              const [lead, ...specs] = node.description.split(" • ");
              return (
                <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(27, 66, 41, 0.15)" }}>
                  <p
                    className="uppercase mb-3"
                    style={{
                      fontFamily: "UDC Working Man Sans, sans-serif",
                      color: "#1B4229",
                      letterSpacing: "0.1em",
                      fontSize: "0.75rem",
                      opacity: 0.7,
                    }}
                  >
                    Description
                  </p>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color: "#1B4229",
                      opacity: 0.85,
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
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
                            fontSize: "0.8rem",
                          }}
                        >
                          <span aria-hidden style={{ opacity: 0.5 }}>·</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="mx-auto" style={{ maxWidth: "1200px" }}>
            <h2
              className="text-center mb-8"
              style={{ fontFamily: "Beverly Drive, serif", color: "#1B4229", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              More merch
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => {
                const n = p.node;
                const im = n.images?.edges?.[0]?.node;
                const pr = n.priceRange?.minVariantPrice;
                return (
                  <Link key={n.id} to={`/merch/${n.handle}`} className="group flex flex-col">
                    <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4" style={{ backgroundColor: "#1B4229" }}>
                      {im && (
                        <img
                          src={im.url}
                          alt={im.altText ?? n.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3
                      className="text-center"
                      style={{ fontFamily: "Beverly Drive, serif", color: "#1B4229", fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
                    >
                      {n.title}
                    </h3>
                    {pr && (
                      <p
                        className="text-center"
                        style={{ fontFamily: "UDC Working Man Sans, sans-serif", color: "#1B4229", fontSize: "1rem" }}
                      >
                        {formatPrice(parseFloat(pr.amount), DEFAULT_LOCALE, 2)}
                      </p>
                    )}
                  </Link>
                );
              })}
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
