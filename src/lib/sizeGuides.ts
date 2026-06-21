// Per-product size guides, keyed by Shopify product handle. Each guide defines
// its own measurement columns (so tees and hoodies can differ) and flat
// garment measurements. `unit` is appended to every measurement column header.
export type SizeGuideRow = { size: string; values: string[] };
export type SizeGuide = {
  unit: string; // e.g. "cm" — appended to each column header
  columns: string[]; // measurement columns, aligned with each row's `values`
  rows: SizeGuideRow[];
};

const HOODIE_GUIDE: SizeGuide = {
  unit: "cm",
  columns: ["Length", "Width"],
  rows: [
    { size: "S", values: ["68.6", "50.8"] },
    { size: "M", values: ["71.1", "55.9"] },
    { size: "L", values: ["73.7", "61"] },
    { size: "XL", values: ["76.2", "66"] },
    { size: "2XL", values: ["78.7", "71.1"] },
    { size: "3XL", values: ["81.3", "76.2"] },
  ],
};

const TEE_GUIDE: SizeGuide = {
  unit: "cm",
  columns: ["Length", "Chest", "Sleeve length"],
  rows: [
    { size: "S", values: ["70.5", "99", "23"] },
    { size: "M", values: ["74", "109.2", "24"] },
    { size: "L", values: ["77.5", "119.4", "24"] },
    { size: "XL", values: ["81", "129.5", "26"] },
    { size: "2XL", values: ["84.5", "139.7", "27"] },
    { size: "3XL", values: ["86.5", "149.9", "28"] },
  ],
};

const RELAX_HOODIE_GUIDE: SizeGuide = {
  unit: "cm",
  columns: ["Length", "Width", "Sleeve length"],
  rows: [
    { size: "S", values: ["70.5", "96.5-104.1", "57.2"] },
    { size: "M", values: ["73", "106.7-114.3", "57.2"] },
    { size: "L", values: ["75.6", "116.8-124.5", "61.6"] },
    { size: "XL", values: ["78.1", "127-134.6", "61.6"] },
    { size: "2XL", values: ["80.7", "137.2-144.8", "64.8"] },
    { size: "3XL", values: ["83.2", "147.3-157.5", "68.6"] },
  ],
};

export const SIZE_GUIDES: Record<string, SizeGuide> = {
  "attimo-vintage-hoodie": HOODIE_GUIDE,
  "unisex-oversized-hoodie": RELAX_HOODIE_GUIDE, // ATTIMO Relax Hoodie
  // All current tees share the same blank-product measurements.
  "oversized-faded-t-shirt": TEE_GUIDE, // ATTIMO Olive Tee
  "attimo-oversized-bone-tee": TEE_GUIDE,
  "oversized-faded-t-shirt-1": TEE_GUIDE, // ATTIMO Faded Black Tee
  "oversized-faded-t-shirt-2": TEE_GUIDE, // ATTIMO Sand Tee
};
