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

// Garment categories for the collection filter, driven by product TAGS in
// Shopify (tag a product `hoodie`, `tee`, or `cap`). `match` is lenient so
// common variants (t-shirt, beanie…) still bucket correctly. A category's
// filter button only appears when at least one product carries its tag.
const GARMENT_CATEGORIES: Array<{ key: string; label: string; match: (t: string) => boolean }> = [
  { key: "tee", label: "Tees", match: (t) => /\btee\b|t-?shirt/i.test(t) },
  { key: "hoodie", label: "Hoodies", match: (t) => /hoodie|sweatshirt|crewneck/i.test(t) },
  { key: "cap", label: "Caps", match: (t) => /\bcap\b|\bhat\b|beanie/i.test(t) },
];
// The category keys a product belongs to, based on its tags.
const categoriesOf = (p: ShopifyProduct) => {
  const tags = p.node.tags ?? [];
  return GARMENT_CATEGORIES.filter((c) => tags.some((t) => c.match(t))).map((c) => c.key);
};

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
  const [activeCat, setActiveCat] = useState<string | null>(null);

  // Only surface filter buttons for categories that actually have products
  // (so "Caps" appears the moment a cap is tagged). Hide the bar entirely
  // unless there are at least two categories to choose between.
  const presentCats = GARMENT_CATEGORIES.filter((c) =>
    products.some((p) => categoriesOf(p).includes(c.key)),
  );
  const showFilters = presentCats.length >= 2;
  const visibleProducts =
    showFilters && activeCat
      ? products.filter((p) => categoriesOf(p).includes(activeCat))
      : products;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header forceScrolled locale={DEFAULT_LOCALE} />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-8">
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Store header — title + inline category filters on one baseline. */}
          <div className="flex flex-wrap items-baseline gap-x-7 gap-y-3 mb-10 md:mb-14">
            <h1
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                color: "#1B4229",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Extra Virgin Merch
            </h1>
            {showFilters && (
              <div className="flex items-baseline gap-4 md:gap-5">
                {[{ key: null as string | null, label: "All" }, ...presentCats].map((cat) => {
                  const active = activeCat === cat.key;
                  return (
                    <button
                      key={cat.key ?? "all"}
                      type="button"
                      onClick={() => setActiveCat(cat.key)}
                      className={`transition-opacity ${
                        active ? "opacity-100" : "opacity-50 hover:opacity-80"
                      }`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#1B4229",
                        fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                        fontWeight: active ? 600 : 400,
                        borderBottom: active ? "2px solid #1B4229" : "2px solid transparent",
                        paddingBottom: 2,
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {products.length === 0 ? (
            <p style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6 }}>
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {visibleProducts.map((p) => (
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
