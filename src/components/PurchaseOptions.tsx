import { useState } from "react";
import { SellingPlan } from "@/lib/shopify";
import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface PurchaseOptionsProps {
  sellingPlans: SellingPlan[];
  oneTimePrice: number;
  subscriptionPrice: number;
  purchaseType: "one-time" | "subscribe";
  onPurchaseTypeChange: (type: "one-time" | "subscribe") => void;
  selectedSellingPlanId: string | null;
  onSellingPlanChange: (id: string) => void;
  locale?: Locale;
}

export const PurchaseOptions = ({
  sellingPlans,
  oneTimePrice,
  subscriptionPrice,
  purchaseType,
  onPurchaseTypeChange,
  selectedSellingPlanId,
  onSellingPlanChange,
  locale = DEFAULT_LOCALE,
}: PurchaseOptionsProps) => {
  const t = getDict(locale).purchase;

  // Default frequency options, localized. Used when Shopify returns no selling
  // plans (otherwise the Shopify plan names are shown as-is).
  const localizedDefaults = [
    { label: t.everyMonth, value: "every-month" },
    { label: t.every2Months, value: "every-2-months" },
    { label: t.every3Months, value: "every-3-months" },
  ];

  // Map selling plans to frequency options, or use defaults
  const frequencyOptions = sellingPlans.length > 0
    ? sellingPlans.map((plan) => ({
        label: plan.name,
        value: plan.id,
      }))
    : localizedDefaults;

  const handleFrequencyChange = (value: string) => {
    onSellingPlanChange(value);
  };

  return (
    <div className="space-y-2">
      {/* One-time purchase option */}
      <button
        type="button"
        onClick={() => onPurchaseTypeChange("one-time")}
        className={`w-full flex items-center justify-between rounded-xl border-2 px-5 py-4 transition-all duration-200 text-left ${
          purchaseType === "one-time"
            ? "border-olive-dark bg-olive-dark text-cream"
            : "border-olive-dark/20 bg-white/60 hover:border-olive-dark/40"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              purchaseType === "one-time"
                ? "border-cream"
                : "border-olive-dark/30"
            }`}
          >
            {purchaseType === "one-time" && (
              <div className="w-[10px] h-[10px] rounded-full bg-cream" />
            )}
          </div>
          <span
            className={`font-semibold ${purchaseType === "one-time" ? "text-cream" : "text-olive-dark"}`}
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              fontSize: "clamp(0.9rem, 1.05vw, 1.1rem)",
            }}
          >
            {t.oneTime}
          </span>
        </div>
        <span
          className={`font-bold ${purchaseType === "one-time" ? "text-cream" : "text-olive-dark"}`}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(0.9rem, 1.05vw, 1.1rem)",
          }}
        >
          {formatPrice(oneTimePrice, locale)}
          <span className={`font-normal ${purchaseType === "one-time" ? "text-cream/70" : "text-olive-medium"}`}>{t.perBottle}</span>
        </span>
      </button>

      {/* Subscribe & save option */}
      <div>
        <button
          type="button"
          onClick={() => onPurchaseTypeChange("subscribe")}
          className={`w-full flex items-center justify-between rounded-xl border-2 px-5 py-4 transition-all duration-200 text-left ${
            purchaseType === "subscribe"
              ? "border-olive-dark bg-olive-dark text-cream rounded-b-none"
              : "border-olive-dark/20 bg-white/60 hover:border-olive-dark/40"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                purchaseType === "subscribe"
                  ? "border-cream"
                  : "border-olive-dark/30"
              }`}
            >
              {purchaseType === "subscribe" && (
                <div className="w-[10px] h-[10px] rounded-full bg-cream" />
              )}
            </div>
            <span
            className={`font-semibold ${purchaseType === "subscribe" ? "text-cream" : "text-olive-dark"}`}
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                fontSize: "clamp(0.9rem, 1.05vw, 1.1rem)",
              }}
            >
              {t.subscribe}
            </span>
          </div>
          <span
            className={`font-bold ${purchaseType === "subscribe" ? "text-cream" : "text-olive-dark"}`}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(0.9rem, 1.05vw, 1.1rem)",
            }}
          >
            {formatPrice(subscriptionPrice, locale)}
            <span className={`font-normal ${purchaseType === "subscribe" ? "text-cream/70" : "text-olive-medium"}`}>{t.perBottle}</span>
          </span>
        </button>

        {/* Frequency dropdown — visible when subscribe is selected */}
        {purchaseType === "subscribe" && (
          <div className="border-2 border-t-0 border-olive-dark rounded-b-xl px-5 py-4 bg-olive-dark/5">
            <label
              className="block text-olive-medium mb-2"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.75rem, 0.85vw, 0.9rem)",
              }}
            >
              {t.deliveryFrequency}
            </label>
            <select
              value={selectedSellingPlanId || frequencyOptions[0]?.value}
              onChange={(e) => handleFrequencyChange(e.target.value)}
              className="w-full rounded-lg border-2 border-olive-dark/20 bg-white px-4 py-2.5 text-olive-dark appearance-none cursor-pointer focus:outline-none focus:border-olive-dark transition-colors"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.85rem, 1vw, 1rem)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231B4229' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              {frequencyOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};
