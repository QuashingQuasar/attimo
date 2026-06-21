import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";

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
