import { useEffect, useState } from "react";

// Phone and tablet buy bar for the product page. It sits at the bottom of the
// screen whenever the page's own add-to-cart button is out of view, so the
// purchase is always one tap away. Hidden from lg, where the buy column is
// beside the photo.
interface StickyBuyBarProps {
  /** id of the page's add-to-cart button. */
  targetId: string;
  name: string;
  /** Small product photo in front of the name (same crop as the format cards). */
  image?: string;
  /** e.g. "2 × 500ml · €48". */
  line: string;
  label: string;
  buttonColor?: string;
  /** Bar background; defaults to the brand green. */
  barColor?: string;
  onAdd: () => void;
}

export const StickyBuyBar = ({ targetId, name, image, line, label, buttonColor = "#CDDB2D", barColor = "#1B4229", onAdd }: StickyBuyBarProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Looks the button up on every check: the buy box re-renders it.
    const check = () => {
      const el = document.getElementById(targetId);
      if (!el) return setShow(false);
      const r = el.getBoundingClientRect();
      setShow(r.bottom < 0 || r.top > window.innerHeight);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [targetId]);

  return (
    <div
      className="lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300"
      style={{ transform: show ? "none" : "translateY(110%)" }}
      aria-hidden={!show}
    >
      <div
        className="flex items-center gap-2.5 sm:gap-3 px-4 pt-3"
        style={{ backgroundColor: barColor, boxShadow: "0 -8px 24px rgba(16,34,27,.22)", paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        {/* Photo, name and price: tapping them brings the buy area (format,
            bottles, subscription) into view, ending on the page's own button. */}
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById(targetId);
            if (!el) return;
            const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            el.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "end" });
          }}
          tabIndex={show ? 0 : -1}
          className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0 text-left"
        >
          {image && (
            <span className="block w-11 h-11 rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor: "#10221B" }}>
              <img src={image} alt="" className="w-full h-full object-cover object-center" />
            </span>
          )}
          <span className="block flex-1 min-w-0">
            <span className="block truncate font-bold uppercase" style={{ fontFamily: "UDC Working Man Sans, sans-serif", color: "#FFFAEA", fontSize: "1rem", letterSpacing: "0.04em", lineHeight: 1.15 }}>{name}</span>
            <span className="block truncate" style={{ fontFamily: "Space Grotesk, sans-serif", color: "rgba(255,250,234,.78)", fontSize: "0.875rem" }}>{line}</span>
          </span>
        </button>
        <button
          type="button"
          onClick={onAdd}
          tabIndex={show ? 0 : -1}
          className="rounded-lg px-3.5 sm:px-5 py-3 font-bold uppercase whitespace-nowrap flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: buttonColor, color: "#1B4229", fontFamily: "UDC Working Man Sans, sans-serif", fontSize: "0.95rem", letterSpacing: "0.05em" }}
        >
          {label}
        </button>
      </div>
    </div>
  );
};
