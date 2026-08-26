import type { ShopifyProduct } from "@/lib/shopify";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { BundleConfig } from "@/lib/bundleTypes";

// The Trio ("The Full Collection") is a SEPARATE Shopify product bundling one
// bottle of each single variety (Coratina / Picual / Nocellara). It is
// currently a DRAFT and NOT published to the Storefront sales channel, so
// `fetchProducts` does not return it. We hardcode its identifiers here so the
// bundle PDP can render and add the correct variant to the cart — exactly the
// pattern used for the 3L box (see coratina3L.ts). The moment the product is
// published to the Storefront channel, checkout for this line starts working
// with no further code change (cartCreate resolves the variant GID).
//
// BEFORE PUBLISHING: set fixed price-list overrides on the trio product for the
// Denmark (470 DKK) and Sweden (720 SEK) markets so the checkout price matches
// the hardcoded per-locale prices in i18n/config.ts. Without them, Shopify FX
// converts €60 and the cart/checkout prices drift apart (same gotcha as the
// SE/DK singles).
// Native Shopify bundle (components: Coratina + Picual + Nocellara). Inventory
// is derived from the scarcest component, and buying it decrements each single.
export const TRIO_PRODUCT_ID = "gid://shopify/Product/15859719274879";
export const TRIO_VARIANT_ID = "gid://shopify/ProductVariant/58273035092351";
export const TRIO_HANDLE = "attimo-the-full-collection-trio";

// Placeholder trio visual — composed from the three bottle cut-outs (the same
// asset the /lab sandbox used). Swap for the real styled trio photograph when
// it's ready: drop it at public/trio-collection.png (keep the name) and it
// flows into the hero + cart line automatically.
export const TRIO_IMAGE = "/trio-collection.png";

// What's in the box, in the order the bottles read left-to-right in the hero.
// Colours are the per-oil accent dots used across the comparison + in-the-box
// list. Flavour strings mirror the single PDPs / _BundleSection.
// Each oil's real colour PROFILE from its product page (ProductOriginStory tile
// background + accent pair) — not just buttonColor. All three are distinct:
//   Coratina  → dark green tile,  light-green accent
//   Nocellara → dark green tile,  amber accent
//   Picual    → light-green tile, dark-green accent
// `accentText` = legible text colour on a chip filled with `accent`.
// `desc` = each oil's flavour description, verbatim from its product page
// (productContent flavour feature) — the brand's own tasting-note language.
export const TRIO_CONTENTS = [
  { handle: "coratina", name: "Coratina d'Italia", origin: "Puglia, Italy", flavour: "Bold & Punchy", polyphenols: "847 mg/kg", volume: "500 ml",
    desc: "Fresh herbs, artichoke and black pepper. Ultra high in polyphenols: intense kick and dry finish.",
    bg: "#10221B", accent: "#B3E58C", accentText: "#10221B" },
  { handle: "picual", name: "Picual de España", origin: "Jaén, Spain", flavour: "Green & Grassy", polyphenols: "675 mg/kg", volume: "500 ml",
    desc: "Fresh tomato leaf and cut grass aromas with a clean, assertive finish.",
    bg: "#B3E58C", accent: "#1B4229", accentText: "#FFFAEA" },
  { handle: "nocellara", name: "Nocellara d'Italia", origin: "Sicily, Italy", flavour: "Gentle & Fruity", polyphenols: "400 mg/kg", volume: "500 ml",
    desc: "Fresh almond and green banana with a velvety texture and round finish. Perfect for all-round use.",
    bg: "#1B4229", accent: "#ECA948", accentText: "#1B4229" },
] as const;

// Sum of the three single-bottle prices in the given locale — used for the
// strikethrough "was" and the saving. Reads the same locale.prices the rest of
// the site uses, so it stays correct per market with no extra config.
export function trioSinglesTotal(locale: Locale = DEFAULT_LOCALE): number {
  return locale.prices.coratina + locale.prices.nocellara + locale.prices.picual;
}

/**
 * Build a minimal ShopifyProduct for the trio so it flows through the existing
 * cart line-item shape (CartDrawer reads title / image / handle / productType
 * off `item.product.node`). The cart price is carried on the CartItem itself
 * (locale.prices.trio); because this handle is not a known oil slug, CartDrawer
 * falls back to that stored line price — so the trio renders its correct
 * per-locale price without any CartDrawer changes. Mirrors buildCoratina3LProduct.
 */
export function buildTrioProduct(
  locale: Locale = DEFAULT_LOCALE,
  title = "ATTIMO The Full Collection — Trio",
  imageUrl: string = TRIO_IMAGE,
): ShopifyProduct {
  const price = {
    amount: String(locale.prices.trio ?? 60),
    currencyCode: locale.currency.code,
  };
  return {
    node: {
      id: TRIO_PRODUCT_ID,
      title,
      description: "",
      handle: TRIO_HANDLE,
      // Not a known oil slug → CartDrawer renders the stored line price and the
      // bundle counts as one unit, so volume-discount tiers never trigger.
      productType: "Bundle",
      tags: ["trio", "bundle", "The Full Collection"],
      priceRange: { minVariantPrice: price },
      images: { edges: [{ node: { url: imageUrl, altText: title } }] },
      variants: {
        edges: [
          {
            node: {
              id: TRIO_VARIANT_ID,
              title: "Trio",
              price,
              availableForSale: true,
              selectedOptions: [],
              image: null,
            },
          },
        ],
      },
      options: [{ name: "Title", values: ["Trio"] }],
    },
  };
}

// Config consumed by the shared BundleProductPage.
export const TRIO_CONFIG: BundleConfig = {
  contents: TRIO_CONTENTS,
  image: TRIO_IMAGE,
  imageAlt: "The three ATTIMO single-variety olive oils: Coratina, Picual and Nocellara",
  variantId: TRIO_VARIANT_ID,
  variantTitle: "Trio",
  buildProduct: buildTrioProduct,
  singlesTotal: trioSinglesTotal,
  priceKey: "trio",
  badge: "3 × 500 ml",
  title: "Early Harvest '25 Full Collection",
  cardTitleLines: ["Early Harvest '25", "Full Collection"],
  subtitle: "\"I'll have all three, please\"",
  description:
    "The full selection of our '25 harvest season. Three single varieties packed with flavour and personality: bold, grassy and gentle.",
  originHeadline:
    "Three single varieties from one early harvest, pressed cold, lab-tested and never blended. The same standard in every bottle.",
  singleVarietyText:
    "Three cultivars, three bottles, never a blend. Each oil is 100% one variety, pressed on its own.",
  whatsInside:
    "Three 500ml bottles: one each of Coratina d'Italia, Picual de España and Nocellara d'Italia. A litre and a half of oil in all, every drop from the same early harvest.",
  bestUses:
    "Coratina for finishing and the morning spoon, Picual for everyday cooking, Nocellara for the table. Between the three you're covered from the pan to the plate.",
  ogName: "The Full Collection (Trio)",
  contentId: "trio",
  ymalHandle: "trio",
  polyphenolDisplay: "400–847 mg/kg",
  toastName: "Added The Full Collection to your cart",
};
