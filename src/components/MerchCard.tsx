import { useRef, useState } from "react";
import { Link } from "@/lib/router-stub";
import { DEFAULT_LOCALE, formatPrice } from "@/lib/i18n/config";
import { frontImageForColor, otherSideImage } from "@/lib/merchImages";
import type { ShopifyProduct } from "@/lib/shopify";

// Flat swatch colours for the apparel colour options. Keyed by the lowercased
// Shopify/Printful colour name; unknown names fall back to a neutral so the
// swatch is still visible.
export const COLOR_SWATCH: Record<string, string> = {
  "dark chocolate": "#3a2b25",
  "forest green": "#264430",
  forest: "#264430",
  "pine green": "#22433a",
  maroon: "#5c2230",
  black: "#1b1b1b",
  "vintage black": "#2e2c2a",
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
  khaki: "#c2b487",
  spruce: "#3a4742",
  natural: "#e4dcc7",
  olive: "#5b5a36",
  "military green": "#4b4f3a",
};
export const swatchHex = (name: string) =>
  COLOR_SWATCH[name.trim().toLowerCase()] ?? "#c9c2b0";

// A single merch card, shared by the /merch collection grid and the PDP "More
// merch" section so they look identical. Stateful: hovering a colour swatch
// swaps the image to that colour's front mockup, while hovering the image
// itself reveals the garment's other side (back). Both get a very slight zoom.
export function MerchCard({ product }: { product: ShopifyProduct }) {
  const node = product.node;
  const variants = node.variants.edges.map((e) => e.node);
  const images = node.images?.edges?.map((e) => e.node) ?? [];
  const price = node.priceRange?.minVariantPrice;
  const soldOut = !variants.some((v) => v.availableForSale);
  const colors = node.options?.find((o) => /colou?r/i.test(o.name))?.values ?? [];

  const colorOf = (v: (typeof variants)[number]) =>
    v.selectedOptions?.find((o) => /colou?r/i.test(o.name))?.value;

  // Front mockup per colour, resolved from the gallery filenames (robust to
  // scrambled per-variant image assignments) with the variant image as fallback.
  const imageUrls = images.map((im) => im.url);
  const frontByColor: Record<string, string> = {};
  for (const color of colors) {
    const variantFront =
      variants.find((v) => colorOf(v) === color && v.image?.url)?.image?.url ?? null;
    const img = frontImageForColor(color, imageUrls, variantFront);
    if (img) frontByColor[color] = img;
  }

  const defaultImg = images[0] ?? variants[0]?.image;
  const variantFronts = new Set(variants.map((v) => v.image?.url).filter(Boolean) as string[]);
  // Hover reveal = the SAME colour's other side (front↔back). Falls back to the
  // first gallery image that isn't a colour front when no opposite side exists.
  const backImg =
    otherSideImage(defaultImg?.url ?? "", imageUrls, colors) ??
    images.find((im) => im.url !== defaultImg?.url && !variantFronts.has(im.url))?.url ??
    null;

  const [imageHovered, setImageHovered] = useState(false);
  const [swatchColor, setSwatchColor] = useState<string | null>(null);
  const [overSwatches, setOverSwatches] = useState(false);

  // Overlay (top layer) image: a hovered swatch wins (that colour's front);
  // otherwise hovering the image shows the back — but NOT while the cursor is
  // over the swatch cluster, so moving between swatches never flashes the back.
  const overlaySrc = swatchColor
    ? frontByColor[swatchColor] ?? defaultImg?.url ?? null
    : imageHovered && !overSwatches
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
          blend into the page. The back-reveal is scoped to this element only. */}
      <div
        className="relative aspect-square overflow-hidden mb-4"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        {defaultImg && (
          <img
            src={defaultImg.url}
            alt={defaultImg.altText ?? node.title}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-out"
            style={{ opacity: showOverlay ? 0 : 1, transform: zoom ? "scale(1.03)" : "scale(1)" }}
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

        {/* Colour swatches overlaid in the top-right corner. Hovering one
            previews that colour; while over the cluster the back-reveal is
            suppressed so moving between swatches doesn't flash the back. */}
        {colors.length > 0 && (
          <div
            className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5"
            onMouseEnter={() => setOverSwatches(true)}
            onMouseLeave={() => setOverSwatches(false)}
          >
            {colors.slice(0, 6).map((c) => (
              <span
                key={c}
                title={c}
                aria-label={c}
                onMouseEnter={() => setSwatchColor(c)}
                onMouseLeave={() => setSwatchColor(null)}
                className="inline-block rounded-[3px] transition-transform duration-150"
                style={{
                  width: 20,
                  height: 11,
                  backgroundColor: swatchHex(c),
                  border:
                    swatchColor === c ? "1px solid #1B4229" : "1px solid rgba(27,66,41,0.25)",
                  boxShadow: "0 1px 3px rgba(27,66,41,0.18)",
                  transform: swatchColor === c ? "scale(1.15)" : "scale(1)",
                }}
              />
            ))}
            {colors.length > 6 && (
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: "#1B4229",
                  opacity: 0.7,
                  fontSize: "0.8rem",
                }}
              >
                +{colors.length - 6}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Title; price below. Colour swatches overlay the image corner. */}
      <h3
        style={{
          fontFamily: "UDC Working Man Sans, sans-serif",
          color: "#1B4229",
          fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          lineHeight: 1.1,
        }}
      >
        {node.title}
      </h3>

      {price && (
        <p
          className="mt-1.5"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
            opacity: 0.7,
            fontSize: "clamp(1.05rem, 1.2vw, 1.2rem)",
          }}
        >
          {formatPrice(parseFloat(price.amount), DEFAULT_LOCALE, 2)}
        </p>
      )}
      {soldOut && (
        <p
          className="mt-1.5"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
            opacity: 0.6,
            fontSize: "0.95rem",
          }}
        >
          Sold out
        </p>
      )}
    </Link>
  );
}
