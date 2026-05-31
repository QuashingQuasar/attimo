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

// Volume discount tiers. Single source of truth for the button label AND the
// displayed total on the Add-to-Cart row in ProductPage. The actual discount
// applied at checkout is configured as a Shopify automatic discount — keep
// the Shopify side in sync with this map before launch.
const VOLUME_DISCOUNT_PERCENTS: Record<number, number> = {
  3: 0.05,
  4: 0.08,
  6: 0.12,
  8: 0.15,
};

/** Returns the volume discount for a given quantity as a decimal (0 if none). */
export function getVolumeDiscountPercent(qty: number): number {
  return VOLUME_DISCOUNT_PERCENTS[qty] ?? 0;
}

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
    // Volume discount badge is rendered separately from VOLUME_DISCOUNT_PERCENTS
    // at render time (see getVolumeDiscountPercent).
    freeShipping: p.qty >= threshold,
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
          // Volume discount percent for this quantity (0 if none). Single
          // source: VOLUME_DISCOUNT_PERCENTS via getVolumeDiscountPercent.
          const discountPct = getVolumeDiscountPercent(p.qty);
          const discountLabel = discountPct > 0
            ? `−${Math.round(discountPct * 100)}%`
            : null;
          return (
            <button
              key={p.qty}
              type="button"
              disabled={disabled}
              onClick={() => onQuantityChange(p.qty)}
              aria-label={
                disabled
                  ? `${p.label} — only ${available} in stock`
                  : discountLabel
                  ? `${p.label}, ${Math.round(discountPct * 100)}% off`
                  : p.label
              }
              className={`relative rounded-xl border-2 transition-all duration-200 text-center py-2.5 px-1 ${
                disabled
                  ? "border-olive-dark/15 bg-white/30 text-olive-dark/40 cursor-not-allowed"
                  : quantity === p.qty
                  ? "border-olive-dark bg-olive-dark text-cream"
                  : "border-olive-dark/20 bg-white/60 text-olive-dark hover:border-olive-dark/40"
              }`}
            >
              {discountLabel && (
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 font-bold uppercase whitespace-nowrap shadow-sm pointer-events-none ${
                    disabled ? "opacity-40" : ""
                  }`}
                  style={{
                    backgroundColor: "#CDDB2D",
                    color: "#1B4229",
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    fontSize: "clamp(0.55rem, 0.7vw, 0.75rem)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  {discountLabel}
                </span>
              )}
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
            </button>
          );
        })}
      </div>

    </div>
  );
};
