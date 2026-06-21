import { useState } from "react";
import coratinaImage from "./bottle-coratina.png?url";
import picualImage from "./bottle-picual.png?url";
import nocellaraImage from "./bottle-nocellara.png?url";

/* ────────────────────────────────────────────────────────────────────────
   SANDBOX — featured-oil selector (NOT production).
   Everything tunable lives in this ONE data object. Edit here:
   - tasteAttributes / maxScore  → the taste-profile scale
   - each oil's `taste` scores, `pairs`, `description`, copy
   Product names / origins / flavour / prices / handles mirror the live
   "Specialty Extra Virgin Olive Oil" homepage section (OilProductWidgets +
   i18n en.ts + i18n config prices) — keep them in sync with that source.
   ──────────────────────────────────────────────────────────────────────── */
const DATA = {
  // The IOC positive EVOO attributes. Edit labels / add attributes here and
  // every oil's `taste` map below must use the same keys.
  tasteAttributes: [
    { key: "fruity", label: "Fruity" },
    { key: "bitter", label: "Bitter" },
    { key: "peppery", label: "Peppery" },
  ],
  maxScore: 5,

  oils: [
    {
      handle: "coratina",
      name: "Coratina",
      nameDetail: "d'Italia",
      origin: "Puglia, Italy",
      flag: "🇮🇹",
      flavour: "Bold & Punchy", // small-caps tagline (live copy)
      price: "€24", // live price (i18n config: coratina 24)
      polyphenols: 847, // mg/kg — lab-tested value from the product page
      description:
        "An uncomprimising olive that presses and intense, bitter oil with real grip. Ultra-high in polyphenols, it's a favourite for daily longevity shots.",
      image: coratinaImage,
      // TODO: replace with real tasting notes
      taste: { fruity: 3, bitter: 4, peppery: 5 },
      pairs: "Polyphenol shots, grilled meat and fish, soups, ice cream",
      // Section background + font colour while this bottle is active.
      // bg matches the product page's "From grove to bottle" section (#10221B).
      theme: { bg: "#10221B", fg: "rgb(179, 229, 140)" },
    },
    {
      handle: "picual",
      name: "Picual",
      nameDetail: "de España",
      origin: "Jaén, Spain",
      flag: "🇪🇸",
      flavour: "Green & Grassy",
      price: "€22", // live price (i18n config: picual 22)
      polyphenols: 675, // mg/kg — lab-tested value from the product page
      description:
        "Spain's most expressive olive. It presses a vibrant oil with a fresh green bite. An all-rounder in the kitchen, with enough character to stay interesting.",
      image: picualImage,
      // TODO: replace with real tasting notes
      taste: { fruity: 4, bitter: 3, peppery: 4 },
      pairs: "Roasted veggies, fresh cheese and yogurt, salad dressing, anything grilled",
      theme: { bg: "rgb(179, 229, 140)", fg: "hsl(122, 42%, 18%)" },
      // invert the CTA (dark bg / chartreuse text) for contrast on the light theme
      ctaInvert: true,
    },
    {
      handle: "nocellara",
      name: "Nocellara",
      nameDetail: "d'Italia",
      origin: "Sicily, Italy",
      flag: "🇮🇹",
      flavour: "Gentle & Fruity",
      price: "€23", // live price (i18n config: nocellara 23)
      polyphenols: 400, // mg/kg — lab-tested value from the product page
      description:
        "A generous Sicilian olive, one of Italy's most prized cultivars. It presses a gentle oil with fruity notes and a velvety texture that is easy to like and use every day.",
      image: nocellaraImage,
      // TODO: replace with real tasting notes
      taste: { fruity: 4, bitter: 2, peppery: 2 },
      pairs: "Seafood, pasta, eggs, leafy greens, ice cream",
      // Matches the product page's "From grove to bottle" section:
      // bg #1B4229, text in the section's amber #ECA948.
      theme: { bg: "#1B4229", fg: "rgb(236, 169, 72)" },
    },
  ],
};

const GREEN = "#1B4229";
const CREAM = "#FFFAEA";
const ACCENT = "#CDDB2D";

// Single olive glyph. Uses `currentColor` so it follows the active theme's
// font colour; `filled` = solid, otherwise a faint outline for the remainder.
function Olive({ filled }: { filled: boolean }) {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <ellipse
        cx="12"
        cy="13.5"
        rx="6.5"
        ry="8.5"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.5}
        opacity={filled ? 1 : 0.3}
      />
      {/* little stem leaf */}
      <path
        d="M12 5.5 C 13.5 3, 16 2.5, 17.5 3.5 C 16 5, 13.5 5.5, 12 5.5 Z"
        fill="currentColor"
        opacity={filled ? 1 : 0.3}
      />
    </svg>
  );
}

function TasteRow({ label, score }: { label: string; score: number }) {
  return (
    <div className="fo-taste-row">
      <span
        className="fo-taste-label"
        style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}
      >
        {label}
      </span>
      <span className="fo-taste-icons" aria-label={`${label}: ${score} of ${DATA.maxScore}`}>
        {Array.from({ length: DATA.maxScore }).map((_, i) => (
          <Olive key={i} filled={i < score} />
        ))}
      </span>
    </div>
  );
}

export default function FeaturedOilSelector() {
  const [active, setActive] = useState(0);
  const oil = DATA.oils[active];
  const count = DATA.oils.length;
  // step through the reel, wrapping around at either end
  const go = (dir: number) => setActive((active + dir + count) % count);

  return (
    <section
      className="fo-section"
      style={{ backgroundColor: oil.theme.bg, color: oil.theme.fg }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <button
        type="button"
        className="fo-arrow fo-arrow-prev"
        aria-label="Previous oil"
        onClick={() => go(-1)}
      >
        <svg width="64" height="26" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* hand-drawn left arrow */}
          <path d="M57 12.4 C 43 11.2, 24 11.6, 5 12" />
          <path d="M15 4 Q 6 8.5 4.6 12 Q 6.5 16 15 20" />
        </svg>
      </button>
      <button
        type="button"
        className="fo-arrow fo-arrow-next"
        aria-label="Next oil"
        onClick={() => go(1)}
      >
        <svg width="64" height="26" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* hand-drawn right arrow */}
          <path d="M3 12.4 C 17 11.2, 36 11.6, 55 12" />
          <path d="M45 4 Q 54 8.5 55.4 12 Q 53.5 16 45 20" />
        </svg>
      </button>

      <div className="fo-inner">
        {/* ── Selector reel: all three bottles, always visible ───────────── */}
        <div className="fo-reel" role="tablist" aria-label="Choose a featured oil">
          {DATA.oils.map((o, i) => {
            const isActive = i === active;
            return (
              <button
                key={o.handle}
                role="tab"
                aria-selected={isActive}
                aria-label={`${o.name} ${o.nameDetail} — ${o.flavour}`}
                className={`fo-reel-item${isActive ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <img src={o.image} alt={`${o.name} olive oil bottle`} />
              </button>
            );
          })}
        </div>

        {/* ── Spotlight. Block order is driven entirely by grid-template-areas
             in CSS (mobile = buy-high stack, desktop = 3 columns) so the
             section order is trivial to reorder. ───────────────────────── */}
        <div className="fo-spotlight" key={oil.handle}>
          {/* name + tagline */}
          <div className="fo-area-title">
            <h3 className="fo-oil-name" style={{ fontFamily: "Beverly Drive, serif" }}>
              {oil.name} {oil.nameDetail}
            </h3>
            <p
              className="fo-oil-origin"
              style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}
            >
              {oil.flag} {oil.origin.toUpperCase()}
            </p>
          </div>

          {/* bottle — links to the product page */}
          <div className="fo-area-bottle">
            <a
              className="fo-bottle-frame"
              href={`/product/${oil.handle}`}
              aria-label={`View ${oil.name} ${oil.nameDetail} product page`}
            >
              <img src={oil.image} alt={`${oil.name} ${oil.nameDetail} olive oil bottle`} />
            </a>
          </div>

          {/* price + CTA */}
          <div className="fo-area-buy">
            <span className="fo-price" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
              {oil.price}
            </span>
            <a
              className="fo-cta"
              href={`/product/${oil.handle}`}
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                ...((oil as { ctaInvert?: boolean }).ctaInvert
                  ? { backgroundColor: GREEN, color: ACCENT }
                  : {}),
              }}
            >
              Shop Now
            </a>
          </div>

          {/* mobile-only divider between buy box and taste profile */}
          <div className="fo-area-divider fo-divider" aria-hidden="true" />

          {/* flavour descriptor (replaces "TASTE PROFILE") + taste meters */}
          <div className="fo-area-taste">
            <p
              className="fo-block-label"
              style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}
            >
              {oil.flavour.toUpperCase()}
            </p>
            <div className="fo-taste">
              {DATA.tasteAttributes.map((attr) => (
                <TasteRow
                  key={attr.key}
                  label={attr.label}
                  score={(oil.taste as Record<string, number>)[attr.key] ?? 0}
                />
              ))}
            </div>
          </div>

          {/* pairs well with */}
          <div className="fo-area-pairs">
            <p
              className="fo-block-label"
              style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}
            >
              PERFECT FOR
            </p>
            <p className="fo-pairs-text" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {oil.pairs}
            </p>
          </div>

          {/* description + polyphenol level (left column) */}
          <div className="fo-area-desc">
            <p className="fo-desc" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {oil.description}
            </p>
            <div className="fo-poly-block">
              <p className="fo-block-label" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
                POLYPHENOLS
              </p>
              <p className="fo-poly" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
                {oil.polyphenols} <span>mg/kg</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CSS = `
.fo-section {
  background-color: ${CREAM};
  color: ${GREEN};
  /* fill the viewport and centre the content vertically */
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 1.5rem;
  box-sizing: border-box;
  position: relative;
  /* bg + font colour are set inline per active bottle; animate the swap */
  transition: background-color 0.45s ease, color 0.45s ease;
}

/* ── Prev / next arrows ──────────────────────────────────────────────── */
.fo-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; color: inherit;
  opacity: 0.75; padding: 0.5rem; display: flex; line-height: 0;
  transition: opacity 0.2s ease;
}
.fo-arrow:hover { opacity: 1; }
.fo-arrow:focus-visible { opacity: 1; outline: 2px solid currentColor; outline-offset: 4px; border-radius: 4px; }
.fo-arrow-prev { left: clamp(0.5rem, 3vw, 3rem); }
.fo-arrow-next { right: clamp(0.5rem, 3vw, 3rem); }
@media (max-width: 767px) { .fo-arrow { display: none; } }
.fo-inner { width: 100%; max-width: 1200px; margin: 0 auto; }

/* ── Reel — transparent bottle cutouts in circular tiles ─────────────── */
.fo-reel {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem; max-width: 420px;
  /* big breathing room between the reel and the spotlight below */
  margin: 0 auto clamp(4.5rem, 12vh, 9rem);
}
.fo-reel-item {
  position: relative; border: none; cursor: pointer;
  background-color: color-mix(in srgb, currentColor 9%, transparent);
  border-radius: 50%;
  aspect-ratio: 1 / 1; padding: 0.6rem;
  display: flex; align-items: center; justify-content: center;
  outline: 3px solid transparent; outline-offset: 4px;
  transition: outline-color 0.25s ease, background-color 0.25s ease;
}
.fo-reel-item img {
  width: 100%; height: 100%; object-fit: contain;
  transform: scale(1.15);
  opacity: 0.55; transition: opacity 0.25s ease;
}
.fo-reel-item.is-active { outline-color: ${ACCENT}; background-color: rgba(205, 219, 45, 0.18); }
.fo-reel-item.is-active img { opacity: 1; }
.fo-reel-item:hover img { opacity: 0.85; }
.fo-reel-item:focus-visible { outline-color: currentColor; }

/* ── Spotlight grid. Reorder by editing grid-template-areas only. ─────── */
.fo-spotlight {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  /* MOBILE — buy-high order */
  grid-template-areas:
    "title"
    "bottle"
    "buy"
    "divider"
    "taste"
    "pairs"
    "desc";
  text-align: center;
  align-items: start;
}
.fo-area-title  { grid-area: title;  }
.fo-area-bottle { grid-area: bottle; }
.fo-area-buy    { grid-area: buy;    }
.fo-area-divider{ grid-area: divider;}
.fo-area-taste  { grid-area: taste;  }
.fo-area-pairs  { grid-area: pairs;  }
.fo-area-desc   { grid-area: desc;   }

.fo-oil-name {
  margin: 0; letter-spacing: 0.04em; line-height: 1.05;
  font-size: clamp(2.6rem, 6.5vw, 3.9rem);
  color: inherit; /* override global.css h3 text-olive-dark */
}
.fo-oil-origin {
  margin: 0.7rem 0 0; letter-spacing: 0.15em; opacity: 0.7;
  font-size: 1.26rem;
}
.fo-oil-flavour {
  margin: 0.25rem 0 0; letter-spacing: 0.15em; opacity: 0.7;
  font-size: 1.26rem;
}

.fo-poly-block {
  margin-top: 2.5rem; padding-top: 2rem;
  border-top: 1px solid color-mix(in srgb, currentColor 25%, transparent);
}
.fo-poly { margin: 0.4rem 0 0; font-size: 2rem; letter-spacing: 0.03em; }
.fo-poly span { font-size: 1.2rem; opacity: 0.65; letter-spacing: 0.08em; }

.fo-bottle-frame {
  aspect-ratio: 1 / 1; max-width: 400px; margin: 0 auto; width: 100%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
}
.fo-bottle-frame img {
  width: 100%; height: 100%; object-fit: contain;
  transform: scale(1.4);
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.28));
  transition: transform 0.3s ease;
}
.fo-bottle-frame:hover img { transform: scale(1.45); }

.fo-area-buy {
  display: flex; flex-direction: column; align-items: center; gap: 0.9rem;
}
.fo-price { font-size: 2.1rem; letter-spacing: 0.03em; }
.fo-cta {
  display: inline-block; text-decoration: none;
  background-color: ${ACCENT}; color: ${GREEN};
  padding: 1rem 2.75rem; border-radius: 0.5rem;
  letter-spacing: 0.08em; font-size: 1.25rem;
  transition: transform 0.2s ease;
}
.fo-cta:hover { transform: scale(1.04); }

.fo-divider { height: 1px; background-color: currentColor; opacity: 0.22; }

.fo-block-label {
  margin: 0 0 0.85rem; letter-spacing: 0.18em; font-size: 1.14rem; opacity: 0.6;
}
.fo-taste { display: flex; flex-direction: column; gap: 0.6rem; max-width: 300px; margin: 0 auto; }
.fo-taste-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.fo-taste-label { letter-spacing: 0.08em; font-size: 1.32rem; }
.fo-taste-icons { display: inline-flex; gap: 2px; }

.fo-pairs-text { margin: 0; font-size: 1.3rem; line-height: 1.55; opacity: 0.85; }
.fo-desc { margin: 0; font-size: 1.3rem; line-height: 1.6; opacity: 0.7; }

/* ── Desktop ≥768px — 3 columns ──────────────────────────────────────── */
@media (min-width: 768px) {
  .fo-spotlight {
    grid-template-columns: 1fr minmax(0, 520px) 1fr;
    column-gap: 4rem; row-gap: 1.5rem; text-align: left;
    align-items: center;
    grid-template-areas:
      "title  bottle taste"
      "desc   bottle pairs"
      "desc   bottle buy";
  }
  /* left column: name + tagline + description grouped near centre */
  .fo-area-title, .fo-area-desc { text-align: right; }
  .fo-area-title { align-self: end; }
  .fo-area-desc  { align-self: start; padding-top: 1.5rem; border-top: 1px solid color-mix(in srgb, currentColor 25%, transparent); }

  /* center bottle spans all three rows, vertically centered */
  .fo-area-bottle { grid-row: 1 / 4; }
  .fo-bottle-frame { max-width: 560px; }

  /* right column: taste / pairs / buy grouped near centre */
  .fo-area-taste  { align-self: end; }
  .fo-area-pairs  { align-self: start; padding-top: 1.5rem; border-top: 1px solid color-mix(in srgb, currentColor 25%, transparent); }
  .fo-area-buy    { align-self: start; align-items: flex-start; }
  .fo-area-taste, .fo-area-pairs { text-align: left; }
  .fo-taste { margin: 0; max-width: 300px; }

  /* mobile-only divider hidden on desktop */
  .fo-area-divider { display: none; }
}
`;
