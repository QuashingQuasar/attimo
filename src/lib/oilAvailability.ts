// Stock status of the three 500ml oils for Product schema, read from Shopify
// at build time. Every page that marks an oil up as a Product takes its
// `availability` from here, so the schema says what the page shows.
// An oil Shopify cannot be asked about counts as in stock, the same default
// as the product pages: a failed request must not break the JSON-LD.
import { fetchProductAvailabilityByHandle } from "@/lib/shopify";
import { resolveShopifyHandle } from "@/lib/productContent";

export type OilHandle = "coratina" | "picual" | "nocellara";
export type OilAvailability = Record<OilHandle, string>;

const IN_STOCK = "https://schema.org/InStock";
const OUT_OF_STOCK = "https://schema.org/OutOfStock";
const HANDLES: OilHandle[] = ["coratina", "picual", "nocellara"];

export async function oilSchemaAvailability(): Promise<OilAvailability> {
  const flags = await Promise.all(
    HANDLES.map((h) => fetchProductAvailabilityByHandle(resolveShopifyHandle(h)).catch(() => null)),
  );
  return Object.fromEntries(
    HANDLES.map((h, i) => [h, flags[i] === false ? OUT_OF_STOCK : IN_STOCK]),
  ) as OilAvailability;
}

// The hub pages list the oils by product URL (…/product/coratina).
export function availabilityForUrl(map: OilAvailability, url: string): string {
  const handle = url.split("/").pop() as OilHandle;
  return map[handle] ?? IN_STOCK;
}
