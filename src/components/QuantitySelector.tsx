import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  pricePerUnit: number;
  onAddToCart: () => void;
  buttonId?: string;
}

const presets = [
  { qty: 1, label: "1 Bottle" },
  { qty: 2, label: "2 Bottles", sub: "Free Shipping" },
  { qty: 3, label: "3 Bottles", sub: "Free Shipping" },
  { qty: 4, label: "4 Bottles", sub: "Free Shipping" },
];

export const QuantitySelector = ({
  quantity,
  onQuantityChange,
  pricePerUnit,
  onAddToCart,
  buttonId,
}: QuantitySelectorProps) => {
  const [inputValue, setInputValue] = useState(String(quantity));
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateQuantity = useCallback(
    (qty: number) => {
      const clamped = Math.max(1, qty);
      onQuantityChange(clamped);
      setInputValue(String(clamped));
    },
    [onQuantityChange]
  );

  const handleInputChange = (val: string) => {
    setInputValue(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const parsed = parseInt(val, 10);
      if (!isNaN(parsed) && parsed >= 1) onQuantityChange(parsed);
    }, 300);
  };

  const handleInputBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed < 1) updateQuantity(1);
    else updateQuantity(parsed);
  };

  // Keep inputValue in sync when quantity changes externally (preset click)
  const prevQtyRef = useRef(quantity);
  if (quantity !== prevQtyRef.current) {
    prevQtyRef.current = quantity;
    if (inputValue !== String(quantity)) setInputValue(String(quantity));
  }

  const totalPrice = quantity * pricePerUnit;
  const isPreset = quantity >= 1 && quantity <= 4;

  return (
    <div className="space-y-3">
      {/* Row 1: Preset buttons */}
      <div className="grid grid-cols-4 gap-2">
        {presets.map((p) => (
          <button
            key={p.qty}
            type="button"
            onClick={() => updateQuantity(p.qty)}
            className={`rounded-xl border-2 transition-all duration-200 text-center py-2.5 px-1 ${
              quantity === p.qty
                ? "border-olive-dark bg-olive-dark text-cream"
                : "border-olive-dark/20 bg-white/60 text-olive-dark hover:border-olive-dark/40"
            }`}
          >
            <span
              className="block font-semibold leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
              }}
            >
              {p.label}
            </span>
            {p.sub && (
              <span
                className={`block leading-tight mt-0.5 ${
                  quantity === p.qty ? "text-cream/70" : "text-olive-medium/70"
                }`}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(0.6rem, 0.7vw, 0.75rem)",
                }}
              >
                {p.sub}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Row 2 (between): Shipping status */}
      <p
        className="text-olive-medium"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(0.8rem, 0.95vw, 1rem)",
        }}
      >
        {quantity < 2
          ? "Add 1 more bottle for free shipping"
          : "Free shipping applied ✓"}
      </p>

      {/* Row 3: Add to Cart + manual +/- */}
      <div className="flex items-stretch gap-2">
        <Button
          id={buttonId}
          onClick={onAddToCart}
          className="flex-[3] hover:bg-accent/90 text-olive-dark font-bold px-6 py-4 h-auto transition-all duration-300 hover:scale-[1.02]"
          style={{
            fontFamily: "UDC Working Man Sans, sans-serif",
            backgroundColor: "#CDDB2D",
            fontSize: "clamp(0.9rem, 1.1vw, 1.15rem)",
            borderRadius: "0.75rem",
          }}
        >
          Add to Cart — €{totalPrice}
        </Button>
        <div className="flex-1 flex items-center gap-0">
          <button
            type="button"
            onClick={() => updateQuantity(quantity - 1)}
            className="flex-1 h-full rounded-l-xl border-2 border-olive-dark/20 bg-white/60 text-olive-dark hover:bg-olive-light/10 transition-all flex items-center justify-center font-bold text-lg"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            −
          </button>
          <input
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            onBlur={handleInputBlur}
            className="w-10 h-full border-y-2 border-olive-dark/20 bg-white/60 text-center font-bold text-olive-dark outline-none"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(0.9rem, 1.1vw, 1.15rem)",
            }}
          />
          <button
            type="button"
            onClick={() => updateQuantity(quantity + 1)}
            className="flex-1 h-full rounded-r-xl border-2 border-olive-dark/20 bg-white/60 text-olive-dark hover:bg-olive-light/10 transition-all flex items-center justify-center font-bold text-lg"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
