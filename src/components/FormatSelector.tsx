import { Package } from "lucide-react";
import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

export type ProductFormat = "bottle" | "box";

// Servings per format at the standard 1 tbsp (15 ml) serving. 500 ml → 33,
// 3 L → 200. Drives the "N servings (X per serving)" line on each card.
const SERVING_ML = 15;
const BOTTLE_SERVINGS = Math.round(500 / SERVING_ML);
const BOX_SERVINGS = Math.round(3000 / SERVING_ML);

interface FormatSelectorProps {
  format: ProductFormat;
  onFormatChange: (format: ProductFormat) => void;
  bottlePrice: number;
  boxPrice: number;
  bottleImage?: string;
  boxImage?: string;
  // When true, the box thumbnail renders a branded placeholder instead of an
  // <img> (the approved render isn't wired in yet).
  boxImageIsPlaceholder?: boolean;
  // Stock per format. A sold-out card stays selectable (selecting it surfaces
  // the notify-me form in ProductPage) but is dimmed and shows a "Sold out"
  // label instead of the servings line.
  bottleInStock?: boolean;
  boxInStock?: boolean;
  locale?: Locale;
}

// Two-option purchase toggle on the Coratina PDP: 500ml bottle vs 3L
// bag-in-box. Selecting a card is UI over two distinct Shopify products —
// each adds its own line item via the existing cart path (see ProductPage).
export const FormatSelector = ({
  format,
  onFormatChange,
  bottlePrice,
  boxPrice,
  bottleImage,
  boxImage,
  boxImageIsPlaceholder = false,
  bottleInStock = true,
  boxInStock = true,
  locale = DEFAULT_LOCALE,
}: FormatSelectorProps) => {
  const t = getDict(locale).product;

  const cardBase =
    "relative flex items-center gap-3 rounded-xl border-2 px-3 py-3 text-left transition-all duration-200 w-full";
  const selectedCls = "border-olive-dark bg-olive-dark/5";
  const idleCls = "border-olive-dark/20 bg-white/60 hover:border-olive-dark/40";

  const thumbCls =
    "w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center";

  // Corner badge, same shape/position as the "BEST VALUE" pill. kind "value"
  // is chartreuse; "soldout" is dark green so it reads as unavailable.
  const badge = (label: string, kind: "value" | "soldout") => (
    <span
      aria-hidden="true"
      className="absolute right-2 top-0 -translate-y-1/2 rounded-full px-2.5 py-1 font-bold uppercase whitespace-nowrap shadow-sm"
      style={{
        backgroundColor: kind === "value" ? "#CDDB2D" : "#1B4229",
        color: kind === "value" ? "#1B4229" : "#FFFAEA",
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: "clamp(0.5rem, 0.62vw, 0.65rem)",
        letterSpacing: "0.04em",
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );

  return (
    <div className="space-y-2">
      <p
        className="uppercase tracking-wider text-olive-medium"
        style={{
          fontFamily: "UDC Working Man Sans, sans-serif",
          fontSize: "clamp(0.72rem, 0.82vw, 0.85rem)",
          opacity: 0.8,
        }}
      >
        {t.formatLabel}
      </p>

      <div className="grid grid-cols-2 gap-2">
        {/* 500ml bottle */}
        <button
          type="button"
          onClick={() => onFormatChange("bottle")}
          aria-pressed={format === "bottle"}
          className={`${cardBase} ${format === "bottle" ? selectedCls : idleCls}`}
        >
          {!bottleInStock && badge(t.soldOut, "soldout")}
          <div className={thumbCls} style={{ backgroundColor: "#10221B", opacity: bottleInStock ? 1 : 0.4 }}>
            {bottleImage && (
              <img
                src={bottleImage}
                alt={t.formatBottleName}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
          <div className="min-w-0" style={{ opacity: bottleInStock ? 1 : 0.5 }}>
            <p
              className="font-semibold text-olive-dark leading-tight"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                fontSize: "clamp(0.85rem, 1vw, 1rem)",
              }}
            >
              {t.formatBottleName} {t.formatBottleVolume}
            </p>
            <p
              className="text-olive-medium leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.72rem, 0.82vw, 0.88rem)",
              }}
            >
              {t.formatServings
                .replace("{n}", String(BOTTLE_SERVINGS))
                .replace("{price}", formatPrice(bottlePrice / BOTTLE_SERVINGS, locale, 2))}
            </p>
            <p
              className="text-olive-dark font-bold leading-tight mt-0.5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)",
              }}
            >
              {formatPrice(bottlePrice, locale)}
            </p>
          </div>
        </button>

        {/* 3L bag-in-box */}
        <button
          type="button"
          onClick={() => onFormatChange("box")}
          aria-pressed={format === "box"}
          className={`${cardBase} ${format === "box" ? selectedCls : idleCls}`}
        >
          {boxInStock ? badge(t.formatBoxBadge, "value") : badge(t.soldOut, "soldout")}
          <div className={thumbCls} style={{ backgroundColor: "#10221B", opacity: boxInStock ? 1 : 0.4 }}>
            {boxImage && !boxImageIsPlaceholder ? (
              <img
                src={boxImage}
                alt={t.formatBoxName}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <Package size={20} className="text-cream/80" />
                <span
                  className="text-cream/80 font-bold leading-none"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    fontSize: "0.6rem",
                  }}
                >
                  3L
                </span>
              </div>
            )}
          </div>
          <div className="min-w-0" style={{ opacity: boxInStock ? 1 : 0.5 }}>
            <p
              className="font-semibold text-olive-dark leading-tight"
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                fontSize: "clamp(0.85rem, 1vw, 1rem)",
              }}
            >
              {t.formatBoxName} {t.formatBoxVolume}
            </p>
            <p
              className="text-olive-medium leading-tight"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.72rem, 0.82vw, 0.88rem)",
              }}
            >
              {t.formatServings
                .replace("{n}", String(BOX_SERVINGS))
                .replace("{price}", formatPrice(boxPrice / BOX_SERVINGS, locale, 2))}
            </p>
            <p
              className="text-olive-dark font-bold leading-tight mt-0.5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)",
              }}
            >
              {formatPrice(boxPrice, locale)}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
