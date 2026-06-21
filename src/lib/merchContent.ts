import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import type { ShopifyProduct } from "@/lib/shopify";

// Phrases to drop from merch product copy (description + descriptionHtml),
// applied to the fetched products so they're gone from the visible PDP
// description, meta, JSON-LD and serialized props alike.
const DROPPED_PHRASES: RegExp[] = [
  /\s*The\s+one\s+you\s+reach\s+for\s+without\s+thinking\.?/g, // Classic Hoodie copy
];
export function stripDroppedPhrases(products: ShopifyProduct[]): ShopifyProduct[] {
  for (const p of products) {
    for (const re of DROPPED_PHRASES) {
      if (p.node.description)
        p.node.description = p.node.description.replace(re, " ").replace(/\s{2,}/g, " ").trim();
      if (p.node.descriptionHtml) p.node.descriptionHtml = p.node.descriptionHtml.replace(re, " ");
    }
  }
  return products;
}
import { SIZE_GUIDES } from "@/lib/sizeGuides";

// Manual display order (by handle) applied WITHIN a category on the collection
// grid. Products not listed keep their Shopify order after the listed ones.
export const MERCH_DISPLAY_ORDER = [
  "attimo-vintage-hoodie", // ATTIMO Classic Hoodie — Scuro
  "unisex-hoodie-2", // ATTIMO Classic Hoodie — Chiaro
  "unisex-oversized-hoodie", // ATTIMO Relax Hoodie
  "oversized-heavyweight-hoodie", // ATTIMO Coratina Hoodie
  "attimo-dad-cap", // ATTIMO Dad Cap
  "dad-hat-2", // Coratina Dad Cap (before Nocellara)
  "dad-hat-1", // Nocellara Dad Cap
];

// Format a merch price: drop the decimals for whole amounts (€45.00 -> €45) but
// keep real cents (€38.50). Merch is the only EUR market with sub-euro prices.
export function formatMerchPrice(amount: number, locale: Locale = DEFAULT_LOCALE) {
  return formatPrice(amount, locale, Number.isInteger(amount) ? 0 : 2);
}

// Branded product copy that overrides the (Printful-default) Shopify
// description, keyed by product handle. Kept in code so Printful re-syncs can't
// overwrite it. The renderer treats the first line as the lead paragraph and
// the remaining non-empty lines as spec bullets.

const TEE_DESCRIPTION = `Essential and unhurried, like everything we make. A heavyweight, garment-dyed unisex tee, soft and faded from the first wear, cut boxy and easy.

100% carded cotton
Fabric weight: 7.1 oz./yd.² (240 g/m²)
Garment-dyed, pre-shrunk fabric
Boxy, oversized fit
Dropped shoulders
Wide neck ribbing
Tear-away label
Blank product sourced from China`;

// Default colour to show (by product handle) — overrides the gallery's first
// image. Value is the Shopify colour option value.
export const MERCH_DEFAULT_COLOR: Record<string, string> = {
  "oversized-heavyweight-hoodie": "Vintage Black", // ATTIMO Coratina Hoodie
  "attimo-vintage-hoodie": "Maroon", // ATTIMO Classic Hoodie — Scuro (shown as Burgundy)
};

// Frontend-only colour display renames (keyed by lowercased Shopify value). The
// underlying Shopify/Printful value is unchanged, so checkout + sync are safe.
const COLOR_LABELS: Record<string, string> = {
  maroon: "Burgundy",
};
export const colorLabel = (value: string) =>
  COLOR_LABELS[value.trim().toLowerCase()] ?? value;

export const MERCH_DESCRIPTIONS: Record<string, string> = {
  "oversized-faded-t-shirt": TEE_DESCRIPTION, // ATTIMO Olive Tee
  "attimo-oversized-bone-tee": TEE_DESCRIPTION,
  "oversized-faded-t-shirt-1": TEE_DESCRIPTION, // ATTIMO Faded Black Tee
  "oversized-faded-t-shirt-2": TEE_DESCRIPTION, // ATTIMO Sand Tee
};

// Split a description into a lead paragraph + spec bullets. Handles three
// shapes: Shopify rich-text HTML (<p> lead + <ul><li> specs), our own
// newline-separated copy, and Printful's single " • "-delimited run.
export function parseMerchDescription(input: string): { lead: string; specs: string[] } {
  let text = input;
  // HTML (Shopify descriptionHtml). If it has a <ul>/<ol>, the <li> items are
  // the specs and everything outside the list is the lead. Otherwise reduce it
  // to plain text and let the " • "/newline parsing below handle it.
  if (/<\w+[^>]*>/.test(text)) {
    const strip = (s: string) =>
      s
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/\s+/g, " ")
        .trim();
    const liItems = [...text.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
      .map((m) => strip(m[1]))
      .filter(Boolean);
    if (liItems.length) {
      const lead = strip(text.replace(/<ul[\s\S]*?<\/ul>/gi, "").replace(/<ol[\s\S]*?<\/ol>/gi, ""));
      return { lead, specs: liItems };
    }
    text = strip(text);
  }
  if (text.includes(" • ")) {
    const [lead, ...rest] = text.split(" • ");
    return { lead: lead.trim(), specs: rest.map((s) => s.trim()).filter(Boolean) };
  }
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const [lead = "", ...specs] = lines;
  return { lead, specs };
}

// Build-time sanity check: warn (in the build log) when any handle referenced
// by the merch config maps isn't present in the fetched products. Handles are
// Shopify-generated and change on rename, which would silently drop a size
// guide / default colour / description / ordering.
export function checkMerchHandles(productHandles: string[]): void {
  const known = new Set(productHandles);
  const groups: Record<string, string[]> = {
    SIZE_GUIDES: Object.keys(SIZE_GUIDES),
    MERCH_DEFAULT_COLOR: Object.keys(MERCH_DEFAULT_COLOR),
    MERCH_DESCRIPTIONS: Object.keys(MERCH_DESCRIPTIONS),
    MERCH_DISPLAY_ORDER,
  };
  for (const [name, handles] of Object.entries(groups)) {
    const missing = handles.filter((h) => !known.has(h));
    if (missing.length) {
      console.warn(`[merch] ${name} references unknown handle(s): ${missing.join(", ")}`);
    }
  }
}
