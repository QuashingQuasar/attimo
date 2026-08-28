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

export type Lang = "en" | "da" | "de" | "fr" | "nl" | "sv";

// The bundle-specific framing copy (the only genuinely-new translation — the
// rest of the page reuses getProductContent + the `bundle` dict namespace).
// Held per-locale on the config; the page picks `framing[locale.lang]` and
// falls back to `framing.en`.
export interface BundleFraming {
  title: string;
  // Explicit two-line split for the hero + homepage card title.
  cardTitleLines: [string, string];
  // Beverly-script caption under the hero title (dashed underline).
  subtitle: string;
  description: string;
  originHeadline: string;
  singleVarietyText: string;
  whatsInside: string;
  bestUses: string;
  toastName: string;
  imageAlt: string;
}

// Everything the shared BundleProductPage needs to render a specific bundle
// (trio, duo, …). Keeps the page component generic; each bundle lib exports its
// own config built from this shape.
export interface BundleConfig {
  contents: ReadonlyArray<BundleOil>;
  image: string;
  variantId: string;
  variantTitle: string;
  buildProduct: (locale: Locale) => ShopifyProduct;
  singlesTotal: (locale: Locale) => number;
  priceKey: "trio" | "duo";
  badge: string;
  ogName: string;
  contentId: string;
  ymalHandle: string;
  polyphenolDisplay: string;
  // Per-locale framing. `en` is required (the fallback); other locales are
  // filled in as they're translated + native-reviewed.
  framing: { en: BundleFraming } & Partial<Record<Lang, BundleFraming>>;
}
