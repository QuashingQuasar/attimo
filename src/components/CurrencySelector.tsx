import { useEffect, useRef, useState } from "react";
import {
  LOCALES,
  DEFAULT_LOCALE,
  getLocaleSwitchHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { DK, EU, FR, SE, DE, NL } from "country-flag-icons/react/3x2";

// Flat SVG flags (country-flag-icons), keyed by Locale.flagCode — replaces the
// OS emoji flags so the selector renders consistent, neutral flag art across
// platforms. Named imports are tree-shaken to just these four.
const FLAG_COMPONENTS = { EU, DK, SE, FR, DE, NL } as const;

const FlagIcon = ({
  code,
  size,
}: {
  code: Locale["flagCode"];
  size: string;
}) => {
  const Flag = FLAG_COMPONENTS[code];
  return (
    <Flag
      aria-hidden="true"
      style={{
        height: size,
        width: "auto",
        display: "block",
        borderRadius: 2,
        // Hairline edge so the white in the EU/FR flags stays defined on
        // light backgrounds.
        boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
      }}
    />
  );
};

interface Props {
  locale?: Locale;
  // Which way the menu opens. "up" suits the footer (page bottom); "down"
  // suits the top navbar. Default "up" for back-compat.
  placement?: "up" | "down";
  // Trigger text/caret colour. Lets the navbar match its link colour
  // (white over the hero, dark green on cream pages). Default is the footer's
  // light green.
  triggerColor?: string;
}

// Locale dropdown. Shows the current locale as a small pill; clicking reveals a
// menu of the available markets. Used in the top navbar (opens down) and
// previously the footer (opens up).
export const CurrencySelector = ({
  locale = DEFAULT_LOCALE,
  placement = "up",
  triggerColor = "#B3E58C",
}: Props) => {
  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState("/");
  const ref = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  // Target URL for switching to locale `l`. On blog POSTS the slug differs per
  // language, so prefer the page's <link rel="alternate" hreflang> tag (the
  // exact translated URL); everything else uses the path-based mapping.
  const switchHrefFor = (l: Locale) => {
    if (/\/blog(\/|$)/.test(pathname) && typeof document !== "undefined") {
      const link = document.querySelector(
        `link[rel="alternate"][hreflang="${l.hreflang}"]`,
      ) as HTMLLinkElement | null;
      if (link?.href) {
        try { return new URL(link.href).pathname; } catch { /* fall through */ }
      }
    }
    return getLocaleSwitchHref(pathname, l);
  };

  // Hover-to-open (desktop), matching the header Shop dropdown. A short close
  // delay bridges the 6px gap between the trigger and the menu so it doesn't
  // flicker shut while the cursor crosses it. Click/tap toggle is kept below
  // for touch devices and keyboard users (no hover there).
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openOnHover = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };
  useEffect(() => () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }, []);

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
      onMouseEnter={openOnHover}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-label={t.footer.changeRegion}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
        style={{
          padding: 0,
          background: "none",
          border: "none",
          fontSize: "0.875rem",
          color: triggerColor,
          cursor: "pointer",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        <FlagIcon code={locale.flagCode} size="1.5rem" />
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
            // Footer opens up from the trigger; navbar opens down. Navbar
            // anchors to the right edge so the menu doesn't run off-screen.
            ...(placement === "down"
              ? { top: "calc(100% + 6px)", right: 0, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)" }
              : { bottom: "calc(100% + 6px)", left: 0, boxShadow: "0 -6px 20px rgba(0, 0, 0, 0.25)" }),
            margin: 0,
            padding: 4,
            listStyle: "none",
            backgroundColor: "#1B4229",
            border: "1px solid rgba(179, 229, 140, 0.3)",
            borderRadius: 10,
            minWidth: "100%",
            whiteSpace: "nowrap",
            zIndex: 70,
          }}
        >
          {LOCALES.map((l) => {
            const isCurrent = l.slug === locale.slug;
            return (
              <li key={l.slug || "default"} style={{ margin: 0 }}>
                <a
                  href={switchHrefFor(l)}
                  role="menuitem"
                  aria-label={l.countryName}
                  aria-current={isCurrent ? "true" : undefined}
                  className="flex items-center justify-center transition-colors"
                  style={{
                    padding: "6px 10px",
                    borderRadius: 6,
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
                  <FlagIcon code={l.flagCode} size="1.25rem" />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
