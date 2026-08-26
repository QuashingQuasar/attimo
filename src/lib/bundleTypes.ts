import type { ShopifyProduct } from "@/lib/shopify";
import type { Locale } from "@/lib/i18n/config";

// One oil row in a bundle's "in the box" lineup + comparison.
export interface BundleOil {
  handle: string;
  name: string;
  flavour: string;
  desc: string;
  volume: string;
  origin: string;
  polyphenols: string;
  bg: string;
  accent: string;
}

// Everything the shared BundleProductPage needs to render a specific bundle
// (trio, duo, …). Keeps the page component generic; each bundle lib exports its
// own config built from this shape.
export interface BundleConfig {
  contents: ReadonlyArray<BundleOil>;
  image: string;
  imageAlt: string;
  variantId: string;
  variantTitle: string;
  buildProduct: (locale: Locale) => ShopifyProduct;
  singlesTotal: (locale: Locale) => number;
  priceKey: "trio" | "duo";
  badge: string;
  title: string;
  // Beverly-script caption under the hero title (dashed underline).
  subtitle: string;
  // Explicit two-line split for the homepage card title (so the break lands
  // where we want, not where the width happens to wrap). Falls back to `title`.
  cardTitleLines?: [string, string];
  description: string;
  originHeadline: string;
  singleVarietyText: string;
  whatsInside: string;
  bestUses: string;
  ogName: string;
  contentId: string;
  ymalHandle: string;
  polyphenolDisplay: string;
  toastName: string;
}
