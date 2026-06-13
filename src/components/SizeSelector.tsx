import type { ShopifyProduct } from "@/lib/shopify";

type Variant = ShopifyProduct["node"]["variants"]["edges"][number]["node"];

// Pick the human label for a variant: prefer its "Size" option value, fall
// back to the variant title.
function variantLabel(v: Variant): string {
  const size = v.selectedOptions?.find((o) => o.name.toLowerCase() === "size");
  return size?.value ?? v.title;
}

interface Props {
  variants: Variant[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  label?: string;
}

// Apparel size picker — one selectable pill per variant. Sold-out variants are
// shown but disabled (struck through). Controlled via selectedId/onSelect.
export function SizeSelector({ variants, selectedId, onSelect, label = "Size" }: Props) {
  return (
    <div>
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
        {label}
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {variants.map((v) => {
          const isSelected = v.id === selectedId;
          const soldOut = !v.availableForSale;
          return (
            <button
              key={v.id}
              type="button"
              disabled={soldOut}
              aria-pressed={isSelected}
              onClick={() => onSelect(v.id)}
              className="px-4 py-2 rounded-lg border transition-all duration-200"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                letterSpacing: "0.05em",
                fontSize: "0.95rem",
                cursor: soldOut ? "not-allowed" : "pointer",
                borderColor: "#1B4229",
                backgroundColor: isSelected ? "#1B4229" : "transparent",
                color: isSelected ? "#FFFAEA" : "#1B4229",
                opacity: soldOut ? 0.35 : 1,
                textDecoration: soldOut ? "line-through" : "none",
              }}
            >
              {variantLabel(v)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
