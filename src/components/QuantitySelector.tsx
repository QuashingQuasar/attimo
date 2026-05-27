import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchVariantQuantityAvailable } from "@/lib/shopify";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  pricePerUnit: number;
  onAddToCart: () => void;
  buttonId?: string;
  buttonColor?: string;
  freeShippingThreshold?: number;
  /**
   * Shopify variant GID. When provided, the component fetches live
   * `quantityAvailable` on mount and disables preset buttons whose qty
   * exceeds the available stock. Omit to keep all presets enabled.
   */
  variantId?: string;
}

// Display-only volume discount tiers. The actual discount is configured as
// a Shopify automatic discount; these labels just inform the customer.
// Keep in sync with the Shopify discount setup before launch.
const VOLUME_DISCOUNTS: Record<number, string> = {
  3: "5% Off",
  4: "8% Off",
  6: "12% Off",
  8: "15% Off",
};

const BASE_PRESETS = [
  { qty: 1, label: "1 Bottle" },
  { qty: 2, label: "2 Bottles" },
  { qty: 3, label: "3 Bottles" },
  { qty: 4, label: "4 Bottles" },
  { qty: 6, label: "6 Bottles" },
  { qty: 8, label: "8 Bottles" },
];

function buildPresets(threshold: number) {
  return BASE_PRESETS.map((p) => ({
    ...p,
    // Free shipping label is market-driven (per getFreeShippingThreshold).
    freeShipping: p.qty >= threshold,
    // Volume discount label is global, independent of market.
    discount: VOLUME_DISCOUNTS[p.qty],
  }));
}

export const QuantitySelector = ({
  quantity,
  onQuantityChange,
  pricePerUnit,
  onAddToCart,
  buttonId,
  freeShippingThreshold = 2,
  variantId,
}: QuantitySelectorProps) => {
  const totalPrice = quantity * pricePerUnit;
  const threshold = freeShippingThreshold ?? 2;
  const presets = buildPresets(threshold);

  // Live stock from Shopify; null = unknown (keep every preset enabled).
  const [available, setAvailable] = useState<number | null>(null);

  useEffect(() => {
    if (!variantId) {
      setAvailable(null);
      return;
    }
    let cancelled = false;
    fetchVariantQuantityAvailable(variantId).then((qty) => {
      if (!cancelled) setAvailable(qty);
    });
    return () => {
      cancelled = true;
    };
  }, [variantId]);

  return (
    <div className="space-y-3">
      {/* Preset buttons */}
      <div className="grid grid-cols-6 gap-2">
        {presets.map((p) => {
          const disabled = available !== null && p.qty > available;
          const subClass = `block leading-tight mt-0.5 ${
            disabled
              ? "text-olive-medium/30"
              : quantity === p.qty
              ? "text-cream/70"
              : "text-olive-medium/70"
          }`;
          const subStyle = {
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.55rem, 0.65vw, 0.7rem)",
          };
          return (
            <button
              key={p.qty}
              type="button"
              disabled={disabled}
              onClick={() => onQuantityChange(p.qty)}
              aria-label={
                disabled ? `${p.label} — only ${available} in stock` : p.label
              }
              className={`rounded-xl border-2 transition-all duration-200 text-center py-2.5 px-1 ${
                disabled
                  ? "border-olive-dark/15 bg-white/30 text-olive-dark/40 cursor-not-allowed"
                  : quantity === p.qty
                  ? "border-olive-dark bg-olive-dark text-cream"
                  : "border-olive-dark/20 bg-white/60 text-olive-dark hover:border-olive-dark/40"
              }`}
            >
              <span
                className="block font-semibold leading-tight"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(0.75rem, 0.9vw, 0.95rem)",
                }}
              >
                {p.label}
              </span>
              {p.freeShipping && (
                <span className={subClass} style={subStyle}>
                  Free Shipping
                </span>
              )}
              {p.discount && (
                <span className={subClass} style={subStyle}>
                  {p.discount}
                </span>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
};
