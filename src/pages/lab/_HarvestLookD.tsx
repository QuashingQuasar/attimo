import { useState } from "react";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C, type HarvestOil } from "@/components/harvest/useHarvestSection";
import { Header, Timeline, type Theme } from "./_harvestParts";

// LOOK D — the Heirloom Pantry Club pattern. One oil at a time on a full-width
// band in a pale wash of its own label colour; pills and arrows switch it; the
// bottle hangs over the scalloped edge into the header band. "New" is a
// rotated scalloped sticker. Timeline closes the section on cream.
//
// The three band tints are NOT design-system tokens: each is the label colour
// mixed into cream (Coratina via the brand green, Peranzana fig, Picual lime).
const { UDC, SG, BEVERLY } = FONTS;
const { CREAM, GREEN, CHARTREUSE } = C;
const BANDS: Record<HarvestOil["key"], { band: string; ink: string }> = {
  coratina: { band: "#BBC3B0", ink: "#10221B" },
  peranzana: { band: "#DACAC0", ink: "#5C2C3C" },
  picual: { band: "#D1E4B1", ink: GREEN },
};
const SCALLOP = 22; // radius of each scallop

const Scallops = ({ colour, direction }: { colour: string; direction: "up" | "down" }) => (
  <div
    aria-hidden="true"
    style={{
      height: SCALLOP,
      backgroundImage: `radial-gradient(circle at 50% ${direction === "up" ? "100%" : "0"}, ${colour} ${SCALLOP - 0.5}px, transparent ${SCALLOP}px)`,
      backgroundSize: `${SCALLOP * 2}px ${SCALLOP}px`,
      backgroundRepeat: "repeat-x",
      backgroundPosition: "center",
    }}
  />
);

// Scalloped sticker: a disc with bumps round the rim.
const Sticker = ({ text }: { text: string }) => {
  const bumps = 18, R = 44, r = 7.5;
  return (
    <div className="absolute z-20" style={{ width: 112, height: 112, transform: "rotate(-12deg)" }}>
      <svg viewBox="-56 -56 112 112" width="112" height="112" aria-hidden="true">
        <circle r={R} fill={CHARTREUSE} />
        {Array.from({ length: bumps }, (_, i) => {
          const a = (i / bumps) * Math.PI * 2;
          return <circle key={i} cx={Math.cos(a) * R} cy={Math.sin(a) * R} r={r} fill={CHARTREUSE} />;
        })}
      </svg>
      <span className="absolute inset-0 flex items-center justify-center uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.35rem", letterSpacing: ".08em", color: GREEN }}>{text}</span>
    </div>
  );
};

const Arrow = ({ dir, onClick, label, ink }: { dir: "prev" | "next"; onClick: () => void; label: string; ink: string }) => (
  <button type="button" onClick={onClick} aria-label={label} className="inline-flex items-center justify-center rounded-full transition-transform hover:scale-105" style={{ width: 46, height: 46, border: `2px solid ${ink}`, color: ink }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "prev" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  </button>
);

export const HarvestLookD = ({ t }: { t: Theme }) => {
  const locale = DEFAULT_LOCALE;
  const { u, oils } = useHarvestSection(locale);
  const [i, setI] = useState(0);
  const o = oils[i];
  const { band, ink } = BANDS[o.key];
  const go = (d: number) => setI((i + d + oils.length) % oils.length);

  return (
    <section className="relative" style={{ backgroundColor: CREAM }}>
      {/* Header band */}
      <div className="px-4 md:px-6 pt-16 md:pt-24 pb-24 md:pb-36 mx-auto" style={{ maxWidth: 1200 }}>
        <Header t={t} locale={locale} />
      </div>

      {/* Oil band */}
      <Scallops colour={band} direction="up" />
      <div style={{ backgroundColor: band }}>
        <div className="relative mx-auto px-4 md:px-6 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start" style={{ maxWidth: 1120 }}>
          {/* Bottle, hanging over the scalloped edge */}
          <div className="relative flex justify-center" style={{ marginTop: "clamp(-150px, -11vw, -70px)" }}>
            <div className="relative">
              {o.isNew && <div className="absolute z-20 w-[112px] h-[112px] -right-[60px] sm:-right-12 top-[8%] sm:top-[22%] scale-[.78] sm:scale-100 origin-center"><Sticker text={u.new} /></div>}
              <img key={o.key} src={o.image} alt={`ATTIMO ${o.name} 26/27`} className="relative animate-fade-in" style={{ height: "clamp(340px, 40vw, 540px)", width: "auto", filter: "drop-shadow(0 26px 30px rgba(16,34,27,.28))" }} />
            </div>
          </div>

          {/* Details */}
          <div className="text-center lg:text-left lg:pt-14">
            <div role="tablist" aria-label="Oils" className="inline-flex flex-nowrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-8">
              {oils.map((x, j) => (
                <button
                  key={x.key}
                  role="tab"
                  aria-selected={j === i}
                  onClick={() => setI(j)}
                  className="rounded-full px-3.5 sm:px-5 py-2 uppercase transition-colors text-[.74rem] sm:text-[.85rem]"
                  style={{ fontFamily: UDC, fontWeight: 700, letterSpacing: ".08em", border: `2px solid ${ink}`, backgroundColor: j === i ? ink : "transparent", color: j === i ? CREAM : ink }}
                >
                  {x.name}
                </button>
              ))}
            </div>
            <h3 className="mb-2" style={{ fontFamily: BEVERLY, fontSize: "clamp(3rem, 5.5vw, 5.2rem)", lineHeight: 1, letterSpacing: ".02em", color: ink }}>{o.name}</h3>
            <p className="mb-4 uppercase inline-flex items-center gap-3" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".95rem", letterSpacing: ".14em", color: ink, opacity: 0.75 }}>
              <span>{o.origin}</span>
              <o.Flag aria-hidden="true" style={{ width: 22, height: 15, borderRadius: 2, flexShrink: 0 }} />
            </p>
            <p className="mb-8" style={{ fontFamily: SG, fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)", color: ink }}>{o.flavour}</p>
            <div className="mb-10 pt-5 mx-auto lg:mx-0" style={{ borderTop: `1px solid ${ink}33`, maxWidth: 300 }}>
              {o.polyphenols != null ? (
                <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.6rem", color: ink }}>{o.polyphenols} mg/kg</p>
              ) : (
                <p style={{ fontFamily: SG, fontSize: "1.1rem", fontStyle: "italic", color: ink, opacity: 0.7 }}>{u.polyPending}</p>
              )}
              <p className="mt-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".75rem", letterSpacing: ".15em", color: ink, opacity: 0.6 }}>{u.polyLabel}</p>
            </div>
            <div className="inline-flex items-center gap-4">
              <Arrow dir="prev" onClick={() => go(-1)} label="Previous oil" ink={ink} />
              <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".95rem", letterSpacing: ".12em", color: ink, minWidth: 48, textAlign: "center" }}>{i + 1} / {oils.length}</span>
              <Arrow dir="next" onClick={() => go(1)} label="Next oil" ink={ink} />
            </div>
          </div>
        </div>
      </div>
      <Scallops colour={band} direction="down" />

      {/* Timeline on cream */}
      <div className="px-4 md:px-6 pt-14 md:pt-20 pb-16 md:pb-24 mx-auto" style={{ maxWidth: 1080 }}>
        <Timeline t={t} locale={locale} />
      </div>
    </section>
  );
};
