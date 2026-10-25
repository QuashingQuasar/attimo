import { useState } from "react";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C, type HarvestOil } from "@/components/harvest/useHarvestSection";
import { Header, Timeline, type Theme } from "./_harvestParts";

// SANDBOX — the "colour band" direction (from the Heirloom Pantry Club look).
// Each oil owns a pale wash of its own label colour; text on it takes the
// label's dark ink. No scalloped edges. Four takes:
//   D2  one oil at a time, picker made of bottle thumbnails
//   D3  all three side by side, each panel in its own colour
//   D4  all three on one band; the band takes the selected oil's colour
//   D5  three colour panels; the selected one widens to show its profile
//
// The band tints are NOT design-system tokens (label colour mixed into cream).
const { UDC, SG, BEVERLY } = FONTS;
const { CREAM, GREEN, CHARTREUSE } = C;

export const BANDS: Record<HarvestOil["key"], { band: string; ink: string }> = {
  coratina: { band: "#BBC3B0", ink: "#10221B" },
  peranzana: { band: "#DACAC0", ink: "#5C2C3C" },
  picual: { band: "#D1E4B1", ink: GREEN },
};

// Scalloped "New" sticker.
export const Sticker = ({ text, size = 104 }: { text: string; size?: number }) => {
  const bumps = 18, R = 44, r = 7.5;
  return (
    <div className="relative" style={{ width: size, height: size, transform: "rotate(-12deg)" }}>
      <svg viewBox="-56 -56 112 112" width={size} height={size} aria-hidden="true">
        <circle r={R} fill={CHARTREUSE} />
        {Array.from({ length: bumps }, (_, i) => {
          const a = (i / bumps) * Math.PI * 2;
          return <circle key={i} cx={Math.cos(a) * R} cy={Math.sin(a) * R} r={r} fill={CHARTREUSE} />;
        })}
      </svg>
      <span className="absolute inset-0 flex items-center justify-center uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: size * 0.012 + "rem", letterSpacing: ".08em", color: GREEN }}>{text}</span>
    </div>
  );
};

// Profile block in an oil's ink colour. size "lg" for a featured oil.
const Profile = ({ o, ink, pending, label, size = "md", align = "center" }: { o: HarvestOil; ink: string; pending: string; label: string; size?: "md" | "lg"; align?: "center" | "left" }) => {
  const lg = size === "lg";
  return (
    <div className={align === "left" ? "text-center lg:text-left" : "text-center"}>
      <h3 className="mb-2" style={{ fontFamily: BEVERLY, fontSize: lg ? "clamp(3rem, 5vw, 4.8rem)" : "clamp(2rem, 2.6vw, 2.6rem)", lineHeight: 1, letterSpacing: ".02em", color: ink }}>{o.name}</h3>
      <p className="mb-3 uppercase inline-flex items-center gap-2.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: lg ? ".95rem" : ".8rem", letterSpacing: ".14em", color: ink, opacity: 0.75 }}>
        <span>{o.origin}</span>
        <o.Flag aria-hidden="true" style={{ width: lg ? 22 : 18, height: lg ? 15 : 12, borderRadius: 2, flexShrink: 0 }} />
      </p>
      <p className={lg ? "mb-7" : "mb-5"} style={{ fontFamily: SG, fontSize: lg ? "clamp(1.2rem, 1.6vw, 1.45rem)" : "1.05rem", color: ink }}>{o.flavour}</p>
      <div className={`pt-4 mx-auto ${align === "left" ? "lg:mx-0" : ""}`} style={{ borderTop: `1px solid ${ink}33`, maxWidth: lg ? 300 : 230 }}>
        {o.polyphenols != null ? (
          <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: lg ? "1.6rem" : "1.2rem", color: ink }}>{o.polyphenols} mg/kg</p>
        ) : (
          <p style={{ fontFamily: SG, fontSize: lg ? "1.1rem" : ".98rem", fontStyle: "italic", color: ink, opacity: 0.72 }}>{pending}</p>
        )}
        <p className="mt-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: lg ? ".75rem" : ".7rem", letterSpacing: ".15em", color: ink, opacity: 0.6 }}>{label}</p>
      </div>
    </div>
  );
};

const Shell = ({ t, children }: { t: Theme; children: React.ReactNode }) => {
  const locale = DEFAULT_LOCALE;
  return (
    <section className="relative" style={{ backgroundColor: CREAM }}>
      <div className="px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-16 mx-auto" style={{ maxWidth: 1200 }}>
        <Header t={t} locale={locale} />
      </div>
      {children}
      <div className="px-4 md:px-6 pt-12 md:pt-16 pb-16 md:pb-24 mx-auto" style={{ maxWidth: 1080 }}>
        <Timeline t={t} locale={locale} />
      </div>
    </section>
  );
};

// D2 — one at a time, bottle-thumbnail picker.
export const LookD2 = ({ t }: { t: Theme }) => {
  const { u, oils } = useHarvestSection(DEFAULT_LOCALE);
  const [i, setI] = useState(0);
  const o = oils[i];
  const { band, ink } = BANDS[o.key];
  return (
    <Shell t={t}>
      <div style={{ backgroundColor: band, transition: "background-color .35s ease" }}>
        <div className="mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center" style={{ maxWidth: 1120 }}>
          <div className="relative flex justify-center">
            <div className="relative">
              {o.isNew && <div className="absolute z-10 -right-14 top-[6%] scale-[.8] sm:scale-100"><Sticker text={u.new} /></div>}
              <img key={o.key} src={o.image} alt={`ATTIMO ${o.name} 26/27`} className="relative animate-fade-in" style={{ height: "clamp(320px, 36vw, 480px)", width: "auto", filter: "drop-shadow(0 22px 26px rgba(16,34,27,.25))" }} />
            </div>
          </div>
          <div>
            <Profile o={o} ink={ink} pending={u.polyPending} label={u.polyLabel} size="lg" align="left" />
            {/* Picker after the parked June selector: round tiles with the
                bottle cut-outs, inactive dimmed, active ringed. */}
            <div role="tablist" aria-label="Oils" className="mt-10 grid grid-cols-3 gap-5 mx-auto lg:mx-0" style={{ maxWidth: 360 }}>
              {oils.map((x, j) => {
                const on = j === i;
                return (
                  <button
                    key={x.key}
                    role="tab"
                    aria-selected={on}
                    aria-label={x.name}
                    onClick={() => setI(j)}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="flex items-center justify-center rounded-full transition-all overflow-hidden" style={{ width: 96, height: 96, backgroundColor: on ? "rgba(255,250,234,.7)" : "rgba(255,250,234,.32)", outline: `3px solid ${on ? ink : "transparent"}`, outlineOffset: 4 }}>
                      <img src={x.image} alt="" aria-hidden="true" className="transition-opacity" style={{ height: 80, width: "auto", opacity: on ? 1 : 0.55 }} />
                    </span>
                    <span className="uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".7rem", letterSpacing: ".1em", color: ink, opacity: on ? 1 : 0.65 }}>{x.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

// D3 — three panels side by side, each in its own colour.
export const LookD3 = ({ t }: { t: Theme }) => {
  const { u, oils } = useHarvestSection(DEFAULT_LOCALE);
  return (
    <Shell t={t}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {oils.map((o) => {
          const { band, ink } = BANDS[o.key];
          return (
            <div key={o.key} className="relative px-6 pt-12 pb-12 md:pt-14 md:pb-14" style={{ backgroundColor: band }}>
              {o.isNew && <div className="absolute z-10 right-5 top-5 md:right-8 md:top-8"><Sticker text={u.new} size={92} /></div>}
              <div className="flex justify-center mb-8">
                <img src={o.image} alt={`ATTIMO ${o.name} 26/27`} style={{ height: "clamp(280px, 26vw, 380px)", width: "auto", filter: "drop-shadow(0 20px 22px rgba(16,34,27,.24))" }} />
              </div>
              <Profile o={o} ink={ink} pending={u.polyPending} label={u.polyLabel} />
            </div>
          );
        })}
      </div>
    </Shell>
  );
};

// D4 — all three bottles on one band; the band takes the selected oil's colour.
export const LookD4 = ({ t }: { t: Theme }) => {
  const { u, oils } = useHarvestSection(DEFAULT_LOCALE);
  const [i, setI] = useState(1);
  const o = oils[i];
  const { band, ink } = BANDS[o.key];
  return (
    <Shell t={t}>
      <div style={{ backgroundColor: band, transition: "background-color .35s ease" }}>
        <div className="mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-12 md:pb-16" style={{ maxWidth: 1120 }}>
          <div role="tablist" aria-label="Oils" className="flex items-end justify-center gap-4 sm:gap-10 md:gap-16 mb-10" style={{ height: "clamp(260px, 32vw, 440px)" }}>
            {oils.map((x, j) => {
              const on = j === i;
              return (
                <button
                  key={x.key}
                  role="tab"
                  aria-selected={on}
                  aria-label={x.name}
                  onClick={() => setI(j)}
                  className="relative flex flex-col items-center h-full justify-end transition-all duration-300"
                  style={{ opacity: on ? 1 : 0.55 }}
                >
                  {x.isNew && <div className="absolute z-10 -right-8 top-0 scale-[.7] sm:scale-90"><Sticker text={u.new} /></div>}
                  <img src={x.image} alt="" aria-hidden="true" className="transition-all duration-300" style={{ height: on ? "100%" : "74%", width: "auto", filter: on ? "drop-shadow(0 22px 24px rgba(16,34,27,.28))" : "drop-shadow(0 10px 12px rgba(16,34,27,.15))" }} />
                  <span className="mt-3 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".12em", color: ink, borderBottom: `2px solid ${on ? ink : "transparent"}`, paddingBottom: 2 }}>{x.name}</span>
                </button>
              );
            })}
          </div>
          <div key={o.key} className="animate-fade-in">
            <Profile o={o} ink={ink} pending={u.polyPending} label={u.polyLabel} size="lg" />
          </div>
        </div>
      </div>
    </Shell>
  );
};

// D5 — three colour panels; the selected one widens and shows its profile.
export const LookD5 = ({ t }: { t: Theme }) => {
  const { u, oils } = useHarvestSection(DEFAULT_LOCALE);
  const [i, setI] = useState(0);
  return (
    <Shell t={t}>
      <div className="flex flex-col md:flex-row" style={{ minHeight: 520 }}>
        {oils.map((o, j) => {
          const { band, ink } = BANDS[o.key];
          const on = j === i;
          return (
            <div
              key={o.key}
              role="button"
              tabIndex={0}
              aria-expanded={on}
              onClick={() => setI(j)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setI(j); }}
              className="relative overflow-hidden cursor-pointer px-6 py-10 md:py-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 md:basis-0 md:[flex-grow:var(--grow)]"
              style={{ backgroundColor: band, ["--grow" as string]: on ? 2.4 : 1, transition: "flex-grow .45s ease" } as React.CSSProperties}
            >
              {o.isNew && <div className="absolute z-10 right-4 top-4"><Sticker text={u.new} size={84} /></div>}
              <img src={o.image} alt={`ATTIMO ${o.name} 26/27`} className="transition-all duration-500" style={{ height: on ? "clamp(300px, 30vw, 420px)" : "clamp(260px, 20vw, 300px)", width: "auto", filter: "drop-shadow(0 20px 22px rgba(16,34,27,.24))" }} />
              {/* Profile: always on mobile (stacked panels); on md+ only for the open panel */}
              <div key={o.key} className={on ? "animate-fade-in" : "md:hidden"} style={{ minWidth: 240 }}>
                <Profile o={o} ink={ink} pending={u.polyPending} label={u.polyLabel} align="left" />
              </div>
              {!on && <p className="hidden md:block md:absolute md:bottom-8 md:left-0 md:right-0 text-center" style={{ fontFamily: BEVERLY, fontSize: "1.9rem", color: ink }}>{o.name}</p>}
            </div>
          );
        })}
      </div>
    </Shell>
  );
};
