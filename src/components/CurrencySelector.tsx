import { useEffect, useRef, useState } from "react";
import {
  LOCALES,
  DEFAULT_LOCALE,
  getLocaleSwitchHref,
  type Locale,
} from "@/lib/i18n/config";

interface Props {
  locale?: Locale;
}

// Footer-bar locale dropdown. Shows the current locale as a small pill
// (cream text on dark green, sized to match the copyright line); clicking
// reveals a small menu *above* the trigger (footer is at the page bottom,
// so opening downward would clip).
export const CurrencySelector = ({ locale = DEFAULT_LOCALE }: Props) => {
  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState("/");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative inline-block"
      style={{ fontFamily: "Space Grotesk, sans-serif", lineHeight: 1 }}
    >
      <button
        type="button"
        aria-label="Change currency or country"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="inline-flex items-center gap-1.5 hover:underline"
        style={{
          padding: 0,
          background: "none",
          border: "none",
          fontSize: "0.875rem",
          color: "#B3E58C",
          cursor: "pointer",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        <span aria-hidden="true">{locale.flag}</span>
        <span style={{ letterSpacing: "0.02em" }}>{locale.currency.code}</span>
        <span
          aria-hidden="true"
          style={{
            fontSize: "0.65rem",
            opacity: 0.75,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.15s ease",
            display: "inline-block",
          }}
        >▾</span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute"
          style={{
            bottom: "calc(100% + 6px)",
            left: 0,
            margin: 0,
            padding: 4,
            listStyle: "none",
            backgroundColor: "#1B4229",
            border: "1px solid rgba(179, 229, 140, 0.3)",
            borderRadius: 10,
            minWidth: "100%",
            boxShadow: "0 -6px 20px rgba(0, 0, 0, 0.25)",
            whiteSpace: "nowrap",
            zIndex: 70,
          }}
        >
          {LOCALES.map((l) => {
            const isCurrent = l.slug === locale.slug;
            return (
              <li key={l.slug || "default"} style={{ margin: 0 }}>
                <a
                  href={getLocaleSwitchHref(pathname, l)}
                  role="menuitem"
                  aria-current={isCurrent ? "true" : undefined}
                  className="flex items-center gap-2 transition-colors"
                  style={{
                    padding: "6px 10px",
                    borderRadius: 6,
                    fontSize: "0.875rem",
                    color: isCurrent ? "#CDDB2D" : "#B3E58C",
                    backgroundColor: isCurrent ? "rgba(205, 219, 45, 0.12)" : "transparent",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isCurrent) e.currentTarget.style.backgroundColor = "rgba(179, 229, 140, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isCurrent) e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span aria-hidden="true">{l.flag}</span>
                  <span style={{ letterSpacing: "0.02em" }}>{l.currency.code}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
