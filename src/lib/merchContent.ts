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

export const MERCH_DESCRIPTIONS: Record<string, string> = {
  "oversized-faded-t-shirt": TEE_DESCRIPTION, // ATTIMO Olive Tee
  "attimo-oversized-bone-tee": TEE_DESCRIPTION,
  "oversized-faded-t-shirt-1": TEE_DESCRIPTION, // ATTIMO Faded Black Tee
  "oversized-faded-t-shirt-2": TEE_DESCRIPTION, // ATTIMO Sand Tee
};

// Split a description into a lead paragraph + spec bullets. Handles three
// shapes: Shopify rich-text HTML (<p> lead + <ul><li> specs), our own
// newline-separated copy, and Printful's single " • "-delimited run.
export function parseMerchDescription(desc: string): { lead: string; specs: string[] } {
  // HTML (Shopify descriptionHtml): <li> items are the specs; everything
  // outside the list is the lead.
  if (/<\w+[^>]*>/.test(desc)) {
    const strip = (s: string) =>
      s
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/\s+/g, " ")
        .trim();
    const specs = [...desc.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
      .map((m) => strip(m[1]))
      .filter(Boolean);
    const lead = strip(desc.replace(/<ul[\s\S]*?<\/ul>/gi, "").replace(/<ol[\s\S]*?<\/ol>/gi, ""));
    return { lead, specs };
  }
  if (desc.includes(" • ")) {
    const [lead, ...rest] = desc.split(" • ");
    return { lead: lead.trim(), specs: rest.map((s) => s.trim()).filter(Boolean) };
  }
  const lines = desc.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const [lead = "", ...specs] = lines;
  return { lead, specs };
}
