import { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Link } from "@/lib/router-stub";
import { DEFAULT_LOCALE, formatPrice } from "@/lib/i18n/config";
import type { ShopifyProduct } from "@/lib/shopify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

// Flat swatch colours for the apparel colour options. Keyed by the lowercased
// Shopify/Printful colour name; unknown names fall back to a neutral so the
// swatch is still visible.
const COLOR_SWATCH: Record<string, string> = {
  "dark chocolate": "#3a2b25",
  "forest green": "#264430",
  maroon: "#5c2230",
  black: "#1b1b1b",
  white: "#f4f1e8",
  navy: "#1f2a44",
  "navy blue": "#1f2a44",
  "sport grey": "#b6b6b6",
  "heather grey": "#b6b6b6",
  red: "#a52a2a",
  royal: "#2f4aa0",
  "royal blue": "#2f4aa0",
  "light blue": "#86bbe3",
  sand: "#d8c9a8",
  natural: "#e4dcc7",
  olive: "#5b5a36",
  "military green": "#4b4f3a",
};
const swatchHex = (name: string) => COLOR_SWATCH[name.trim().toLowerCase()] ?? "#c9c2b0";

// A single collection card. Stateful so hovering a colour swatch swaps the card
// image to that colour's front mockup, while hovering the image itself reveals
// the garment's other side (back). Both get a very slight zoom.
function MerchCard({ product }: { product: ShopifyProduct }) {
  const node = product.node;
  const variants = node.variants.edges.map((e) => e.node);
  const images = node.images?.edges?.map((e) => e.node) ?? [];
  const price = node.priceRange?.minVariantPrice;
  const soldOut = !variants.some((v) => v.availableForSale);
  const colors = node.options?.find((o) => /colou?r/i.test(o.name))?.values ?? [];

  const colorOf = (v: (typeof variants)[number]) =>
    v.selectedOptions?.find((o) => /colou?r/i.test(o.name))?.value;

  // Front mockup per colour (first variant of that colour that carries an image).
  const frontByColor: Record<string, string> = {};
  for (const v of variants) {
    const c = colorOf(v);
    if (c && v.image?.url && !(c in frontByColor)) frontByColor[c] = v.image.url;
  }

  const defaultImg = images[0] ?? variants[0]?.image;
  const variantFronts = new Set(variants.map((v) => v.image?.url).filter(Boolean) as string[]);
  // Back / alternate-angle image of the default item (not any colour's front).
  const backImg =
    images.find((im) => im.url !== defaultImg?.url && !variantFronts.has(im.url))?.url ?? null;

  const [imageHovered, setImageHovered] = useState(false);
  const [swatchColor, setSwatchColor] = useState<string | null>(null);

  // Overlay (top layer) image: a hovered swatch wins (that colour's front);
  // otherwise hovering the IMAGE (not the swatch row) shows the back. Scoping
  // the back-reveal to the image means moving between swatches never flashes
  // the back view.
  const overlaySrc = swatchColor
    ? frontByColor[swatchColor] ?? defaultImg?.url ?? null
    : imageHovered
      ? backImg
      : null;
  const showOverlay = overlaySrc != null;
  const zoom = imageHovered || swatchColor != null;
  // Keep the last overlay src mounted during fade-out so it cross-fades cleanly.
  const lastOverlay = useRef<string | null>(null);
  if (overlaySrc) lastOverlay.current = overlaySrc;
  const overlayDisplay = overlaySrc ?? lastOverlay.current;

  return (
    <Link
      to={`/merch/${node.handle}`}
      className="flex flex-col"
      onMouseLeave={() => {
        setImageHovered(false);
        setSwatchColor(null);
      }}
    >
      {/* Image — large, contained, transparent background so cream mockups
          blend into the page (matches the PDP). The back-reveal is scoped to
          this element only. */}
      <div
        className="relative aspect-square overflow-hidden mb-4"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        {defaultImg && (
          <img
            src={defaultImg.url}
            alt={defaultImg.altText ?? node.title}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-out"
            style={{ transform: zoom ? "scale(1.03)" : "scale(1)" }}
          />
        )}
        {overlayDisplay && (
          <img
            src={overlayDisplay}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-out"
            style={{ opacity: showOverlay ? 1 : 0, transform: zoom ? "scale(1.03)" : "scale(1)" }}
          />
        )}
      </div>

      {/* Title (left) and price (right) on one row. */}
      <div className="flex items-baseline justify-between gap-3">
        <h3
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
            fontSize: "1.05rem",
            fontWeight: 500,
          }}
        >
          {node.title}
        </h3>
        {price && (
          <p
            className="flex-shrink-0"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              opacity: 0.5,
              fontSize: "0.95rem",
            }}
          >
            {formatPrice(parseFloat(price.amount), DEFAULT_LOCALE, 2)}
          </p>
        )}
      </div>

      {/* Available colours under the title. Hovering one previews that colour
          in the image above. */}
      {colors.length > 0 && (
        <div className="flex items-center gap-1.5 mt-2">
          {colors.slice(0, 6).map((c) => (
            <span
              key={c}
              title={c}
              aria-label={c}
              onMouseEnter={() => setSwatchColor(c)}
              onMouseLeave={() => setSwatchColor(null)}
              className="inline-block rounded-[3px] transition-transform duration-150"
              style={{
                width: 22,
                height: 12,
                backgroundColor: swatchHex(c),
                border:
                  swatchColor === c ? "1px solid #1B4229" : "1px solid rgba(27,66,41,0.15)",
                transform: swatchColor === c ? "scale(1.12)" : "scale(1)",
              }}
            />
          ))}
          {colors.length > 6 && (
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#1B4229",
                opacity: 0.5,
                fontSize: "0.8rem",
              }}
            >
              +{colors.length - 6}
            </span>
          )}
        </div>
      )}
      {soldOut && (
        <p
          className="mt-1.5"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
            opacity: 0.5,
            fontSize: "0.85rem",
          }}
        >
          Sold out
        </p>
      )}
    </Link>
  );
}

// /merch collection listing. English-only (default locale). Mirrors the oil
// product-card visual from OilProductWidgets but is fed from the Shopify
// "Merch" collection (build-time fetch). Merch is EUR with cents, so prices
// render with 2 decimals.
function MerchGrid({ products }: { products: ShopifyProduct[] }) {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header forceScrolled locale={DEFAULT_LOCALE} />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-8">
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Store header — left-aligned, like the reference. */}
          <div className="mb-12 md:mb-16">
            <h1
              className="mb-3"
              style={{
                fontFamily: "Beverly Drive, serif",
                color: "#1B4229",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.04em",
              }}
            >
              Merch
            </h1>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#1B4229",
                opacity: 0.55,
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                maxWidth: "520px",
                lineHeight: 1.6,
              }}
            >
              Goods for people who take their olive oil seriously.
            </p>
          </div>

          {products.length === 0 ? (
            <p style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6 }}>
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {products.map((p) => (
                <MerchCard key={p.node.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer locale={DEFAULT_LOCALE} />
      <Sonner />
    </div>
  );
}

export default function MerchCollectionPage({ products }: { products: ShopifyProduct[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MerchGrid products={products} />
    </QueryClientProvider>
  );
}
