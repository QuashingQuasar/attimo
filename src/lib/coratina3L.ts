import type { ShopifyProduct } from "@/lib/shopify";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

// The 3L Coratina bag-in-box is a SEPARATE Shopify product surfaced as a
// purchase option on the Coratina PDP. It is currently a DRAFT and is NOT
// published to the Storefront sales channel, so `fetchProducts` does not
// return it. We therefore hardcode its identifiers here so the PDP can render
// the option and add the correct variant to the cart. The moment the product
// is published to the Storefront channel, checkout for this line starts
// working with no further code change (cartCreate resolves the variant GID).
export const CORATINA_3L_PRODUCT_ID = "gid://shopify/Product/15764877017471";
export const CORATINA_3L_VARIANT_ID =
  "gid://shopify/ProductVariant/57895101727103";
export const CORATINA_3L_HANDLE =
  "attimo-extra-virgin-olive-oil-coratina-3l";

// PLACEHOLDER image. The approved 3L box render was not available as a file at
// build time. Drop the final render at `public/box-coratina-3l.png` (or update
// this path) and it flows into the option card + cart line automatically.
// NOTE: extension is uppercase .JPG to match the files in public/ exactly —
// Vercel/Linux is case-sensitive, so "/box-coratina-3l.jpg" would 404.
export const CORATINA_3L_IMAGE = "/box-coratina-3l.JPG";

// Full gallery for the box: packshot first, lifestyle/table shot second. Used
// for the main PDP image + thumbnails when the box format is selected. Mirror
// order to the Shopify product media.
export const CORATINA_3L_IMAGES = [
  "/box-coratina-3l.JPG",
  "/box-coratina-3l-table.JPG",
];

// Volume of the box in 500ml-bottle equivalents (3L ÷ 500ml). Kept here so
// copy/value framing can reference it without magic numbers.
export const CORATINA_3L_BOTTLE_EQUIVALENT = 6;

/**
 * Build a minimal ShopifyProduct for the 3L box so it flows through the
 * existing cart line-item shape (CartDrawer reads title / image / handle /
 * productType off `item.product.node`). The cart's price is carried on the
 * CartItem itself (locale.prices.coratina3L), and because this handle is not a
 * known oil slug, CartDrawer falls back to that stored line price — so the box
 * renders its correct per-locale price without any CartDrawer changes.
 */
export function buildCoratina3LProduct(
  locale: Locale = DEFAULT_LOCALE,
  title = "ATTIMO Coratina 3L Bag-in-Box",
  imageUrl: string = CORATINA_3L_IMAGE,
): ShopifyProduct {
  const price = {
    amount: String(locale.prices.coratina3L ?? 89),
    currencyCode: locale.currency.code,
  };
  return {
    node: {
      id: CORATINA_3L_PRODUCT_ID,
      title,
      description: "",
      handle: CORATINA_3L_HANDLE,
      // Matches the bottle so it counts as an oil in the cart. Volume-discount
      // tiers never trigger because the box quantity is locked to 1.
      productType: "Olive Oil",
      tags: ["3L", "bag-in-box", "Coratina"],
      priceRange: { minVariantPrice: price },
      images: { edges: [{ node: { url: imageUrl, altText: title } }] },
      variants: {
        edges: [
          {
            node: {
              id: CORATINA_3L_VARIANT_ID,
              title: "3L",
              price,
              availableForSale: true,
              selectedOptions: [],
              image: null,
            },
          },
        ],
      },
      options: [{ name: "Title", values: ["3L"] }],
    },
  };
}
