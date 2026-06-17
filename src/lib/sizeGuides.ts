// Per-product size guides, keyed by Shopify product handle. Measurements are
// flat garment dimensions in centimetres. Add a tee guide here once finalised.
export type SizeRow = { size: string; length: string; width: string };

export const SIZE_GUIDES: Record<string, SizeRow[]> = {
  "attimo-vintage-hoodie": [
    { size: "S", length: "68.6", width: "50.8" },
    { size: "M", length: "71.1", width: "55.9" },
    { size: "L", length: "73.7", width: "61" },
    { size: "XL", length: "76.2", width: "66" },
    { size: "2XL", length: "78.7", width: "71.1" },
    { size: "3XL", length: "81.3", width: "76.2" },
  ],
};
