import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C } from "@/components/harvest/useHarvestSection";

// Homepage section for the next harvest, shown between seasons (look A: deep
// green band, one card per oil). Copy, status and lab values come from
// useHarvestSection; edit src/lib/harvestStatus.ts as the harvest moves.
const { UDC, SG, BEVERLY } = FONTS;
const { DEEP, CREAM, CHARTREUSE: ACCENT } = C;

export const UpcomingHarvest = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const { u, oils, current, note, steps } = useHarvestSection(locale);
  return (
    <section id="next-harvest" className="snap-start relative overflow-hidden px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24" style={{ backgroundColor: DEEP, color: CREAM }}>
      <div className="relative z-10 mx-auto" style={{ maxWidth: 1200 }}>
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-4 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".14em", color: ACCENT }}>{u.eyebrow}</p>
          <h2 className="mb-5" style={{ fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2rem, 3.4vw, 3.4rem)", lineHeight: 1.02, letterSpacing: "-.025em", color: CREAM }}>{u.heading}</h2>
          <p className="mx-auto" style={{ fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", lineHeight: 1.6, color: "rgba(255,250,234,.82)" }}>{u.intro}</p>
          <div className="mt-8">
            <HarvestSignup locale={locale} line={null} button={u.button} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {oils.map((o) => (
            <div key={o.key} className="relative rounded-2xl px-6 pt-8 pb-7 text-center" style={{ backgroundColor: "rgba(255,250,234,.04)", border: `1px solid ${o.isNew ? "rgba(205,219,45,.45)" : "rgba(255,250,234,.14)"}` }}>
              <span className="absolute top-4 left-4 z-10 rounded-full px-3 py-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".12em", backgroundColor: o.isNew ? ACCENT : "rgba(255,250,234,.1)", color: o.isNew ? "#1B4229" : "rgba(255,250,234,.8)" }}>{o.tag}</span>
              <div className="relative mx-auto flex items-end justify-center" style={{ height: 290 }}>
                <div aria-hidden="true" className="absolute inset-x-0 bottom-2 mx-auto rounded-full" style={{ width: 230, height: 230, background: "radial-gradient(circle, rgba(179,229,140,.20) 0%, rgba(179,229,140,0) 68%)" }} />
                <img src={o.image} alt={`ATTIMO ${o.name} 26/27`} className="relative" style={{ height: 280, width: "auto", filter: "drop-shadow(0 18px 22px rgba(0,0,0,.45))" }} />
              </div>
              <h3 className="mt-5 mb-1" style={{ fontFamily: BEVERLY, fontSize: "clamp(1.7rem, 2.3vw, 2.3rem)", letterSpacing: ".04em", color: CREAM }}>{o.name}</h3>
              <p className="mb-3 uppercase inline-flex items-center justify-center gap-2.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".78rem", letterSpacing: ".12em", color: "rgba(255,250,234,.6)" }}>
                <span>{o.origin}</span>
                <o.Flag aria-hidden="true" style={{ width: 18, height: 12, borderRadius: 2, flexShrink: 0 }} />
              </p>
              <p style={{ fontFamily: SG, fontSize: "1rem", lineHeight: 1.55, color: "rgba(255,250,234,.78)" }}>{o.flavour}</p>
              <div className="mt-5 pt-4 mx-auto" style={{ borderTop: "1px solid rgba(255,250,234,.12)", maxWidth: 220 }}>
                {o.polyphenols != null ? (
                  <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.15rem", letterSpacing: ".06em", color: CREAM }}>{o.polyphenols} mg/kg</p>
                ) : (
                  <p style={{ fontFamily: SG, fontSize: ".95rem", fontStyle: "italic", color: "rgba(255,250,234,.55)" }}>{u.polyPending}</p>
                )}
                <p className="mt-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".7rem", letterSpacing: ".14em", color: "rgba(255,250,234,.45)" }}>{u.polyLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline: a track with one node per step. Done steps are filled,
            the current one is lit, the rest are outlined. Horizontal from md
            up, vertical below. */}
        <ol className="relative mx-auto mb-4 md:mb-6 md:grid" style={{ maxWidth: 1040, gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 5, left: `${50 / steps.length}%`, right: `${50 / steps.length}%`, height: 2, backgroundColor: "rgba(255,250,234,.18)" }} />
          <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 5, left: `${50 / steps.length}%`, width: `${(100 - 100 / steps.length) * (current / Math.max(steps.length - 1, 1))}%`, height: 2, backgroundColor: ACCENT }} />
          <span aria-hidden="true" className="absolute md:hidden" style={{ left: 5, top: 6, bottom: 6, width: 2, backgroundColor: "rgba(255,250,234,.18)" }} />
          {steps.map((s, i) => {
            const done = i < current;
            const now = i === current;
            return (
              <li key={s.label} className="relative flex md:flex-col md:items-center md:text-center gap-4 md:gap-3 pb-7 md:pb-0 pl-8 md:pl-0">
                <span className="absolute md:relative left-0 md:left-auto inline-flex w-3 h-3 rounded-full" style={{ backgroundColor: now ? ACCENT : done ? "rgba(255,250,234,.7)" : DEEP, border: `2px solid ${now ? ACCENT : done ? "rgba(255,250,234,.7)" : "rgba(255,250,234,.45)"}` }}>
                  {now && <span className="absolute -inset-1 rounded-full opacity-60 animate-ping" style={{ backgroundColor: ACCENT, animationDuration: "2.4s" }} />}
                </span>
                <span className="flex flex-col md:items-center">
                  <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".92rem", letterSpacing: ".08em", textTransform: "uppercase", color: now ? ACCENT : done ? "rgba(255,250,234,.95)" : "rgba(255,250,234,.75)" }}>{s.label}</span>
                  <span style={{ fontFamily: SG, fontSize: ".95rem", color: "rgba(255,250,234,.6)" }}>{s.when}</span>
                </span>
              </li>
            );
          })}
        </ol>
        <p className="text-center" style={{ fontFamily: SG, fontSize: ".9rem", color: "rgba(255,250,234,.5)" }}>{note}</p>
      </div>
    </section>
  );
};
