import type { ShopifyProduct } from "@/lib/shopify";

type Variant = ShopifyProduct["node"]["variants"]["edges"][number]["node"];
type Option = ShopifyProduct["node"]["options"][number];

// Is there an available variant matching every (optionName → value) pair in
// `assignment`? Used to grey out option values that aren't buyable given the
// other selected options (e.g. a colour sold out in the chosen size).
function hasAvailableVariant(variants: Variant[], assignment: Record<string, string>): boolean {
  return variants.some(
    (v) =>
      v.availableForSale &&
      Object.entries(assignment).every(([name, value]) =>
        v.selectedOptions.some((o) => o.name === name && o.value === value),
      ),
  );
}

// Canonical apparel size order so the picker reads S, M, L, XL, 2XL… even when
// Shopify returns the option values in a different order (e.g. S last).
const SIZE_ORDER = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"];
function sizeRank(value: string): number {
  // Normalise XXL→2XL, XXXL→3XL, … so both notations sort correctly.
  const s = value.trim().toUpperCase().replace(/^X(X+)L$/, (_, xs) => `${xs.length + 1}XL`);
  const i = SIZE_ORDER.indexOf(s);
  return i === -1 ? 999 : i;
}

interface Props {
  options: Option[];
  variants: Variant[];
  selected: Record<string, string>; // optionName -> chosen value
  onChange: (next: Record<string, string>) => void;
}

// Generic apparel variant picker: one pill group per product option (Size,
// Colour, …). Works for single-option (t-shirt: Size) and multi-option
// (hoodie: Colour × Size) products alike. Values with no available variant —
// given the other current selections — are disabled.
export function VariantSelector({ options, variants, selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {options.map((opt) => {
        const values = /size/i.test(opt.name)
          ? [...opt.values].sort((a, b) => sizeRank(a) - sizeRank(b))
          : opt.values;
        return (
        <div key={opt.name}>
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              color: "#1B4229",
              letterSpacing: "0.1em",
              fontSize: "0.85rem",
              opacity: 0.7,
            }}
          >
            {opt.name}
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label={opt.name}>
            {values.map((value) => {
              const isSelected = selected[opt.name] === value;
              // Availability of this value, holding the other options at their
              // current selection.
              const available = hasAvailableVariant(variants, { ...selected, [opt.name]: value });
              return (
                <button
                  key={value}
                  type="button"
                  disabled={!available}
                  aria-pressed={isSelected}
                  onClick={() => onChange({ ...selected, [opt.name]: value })}
                  className="px-4 py-2 rounded-lg border transition-all duration-200"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.05em",
                    fontSize: "0.95rem",
                    cursor: available ? "pointer" : "not-allowed",
                    borderColor: "#1B4229",
                    backgroundColor: isSelected ? "#1B4229" : "transparent",
                    color: isSelected ? "#FFFAEA" : "#1B4229",
                    opacity: available ? 1 : 0.35,
                    textDecoration: available ? "none" : "line-through",
                  }}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
        );
      })}
    </div>
  );
}
