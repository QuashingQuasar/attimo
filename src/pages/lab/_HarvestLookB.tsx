import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C } from "@/components/harvest/useHarvestSection";

// LOOK B — cream editorial. No cards: the bottles stand free on one dashed
// "shelf" rule, the site's dashed table language carries the rules and the
// timeline. Chartreuse only on the button and the current step.
const { UDC, SG, BEVERLY } = FONTS;
const { CREAM, GREEN, CHARTREUSE, LIME } = C;
const BODY = "rgba(27,66,41,.78)";
const MUTED = "rgba(27,66,41,.55)";

export const HarvestLookB = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const { u, oils, current, note, steps } = useHarvestSection(locale);
  return (
    <section className="relative overflow-hidden px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24" style={{ backgroundColor: CREAM, color: GREEN }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="text-center mb-12 md:mb-14">
          <p className="mb-4 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".15em", color: MUTED }}>{u.eyebrow}</p>
          <h2 className="mb-5" style={{ fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2.1rem, 3.6vw, 3.7rem)", lineHeight: 1.02, letterSpacing: "-.025em", color: GREEN }}>{u.heading}</h2>
          <p className="mx-auto" style={{ fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", lineHeight: 1.6, color: BODY }}>{u.intro}</p>
          <div className="mt-8">
            <HarvestSignup locale={locale} line={null} button={u.button} tone="light" />
          </div>
        </div>

        {/* Bottles on one shelf */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          <span aria-hidden="true" className="absolute hidden md:block left-0 right-0" style={{ top: 372, borderTop: `1px dashed ${GREEN}` }} />
          {oils.map((o) => (
            <div key={o.key} className="relative text-center">
              <div className="relative mx-auto flex items-end justify-center" style={{ height: 372 }}>
                {o.isNew && <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 260, height: 260, backgroundColor: LIME, opacity: 0.55 }} />}
                <img src={o.image} alt={`ATTIMO ${o.name} 26/27`} className="relative" style={{ height: 356, width: "auto", filter: "drop-shadow(0 14px 14px rgba(27,66,41,.22))" }} />
              </div>
              <div className="pt-6 md:pt-7" style={{ borderTop: `1px dashed ${GREEN}` }}>
                <p className="mb-2 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".75rem", letterSpacing: ".15em", color: o.isNew ? GREEN : MUTED }}>
                  {o.isNew ? <span className="rounded-full px-3 py-1" style={{ backgroundColor: LIME }}>{o.tag}</span> : o.tag}
                </p>
                <h3 className="mb-1" style={{ fontFamily: BEVERLY, fontSize: "clamp(1.8rem, 2.4vw, 2.4rem)", letterSpacing: ".04em", color: GREEN }}>{o.name}</h3>
                <p className="mb-2 uppercase inline-flex items-center justify-center gap-2.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".78rem", letterSpacing: ".13em", color: MUTED }}>
                  <span>{o.origin}</span>
                  <o.Flag aria-hidden="true" style={{ width: 18, height: 12, borderRadius: 2, flexShrink: 0 }} />
                </p>
                <p className="mb-5" style={{ fontFamily: SG, fontSize: "1.05rem", color: BODY }}>{o.flavour}</p>
                <div className="mx-auto flex items-baseline justify-between gap-4 pt-3" style={{ maxWidth: 260, borderTop: `1px dashed rgba(27,66,41,.45)` }}>
                  <span className="uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".14em", color: MUTED }}>{u.polyLabel}</span>
                  {o.polyphenols != null ? (
                    <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.1rem", color: GREEN }}>{o.polyphenols} mg/kg</span>
                  ) : (
                    <span style={{ fontFamily: SG, fontSize: ".92rem", fontStyle: "italic", color: MUTED }}>{u.polyPending}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline, dashed track */}
        <div className="mt-16 md:mt-20 mx-auto" style={{ maxWidth: 1040 }}>
          <ol className="relative md:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 6, left: `${50 / steps.length}%`, right: `${50 / steps.length}%`, borderTop: `2px dashed rgba(27,66,41,.35)` }} />
            <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 6, left: `${50 / steps.length}%`, width: `${(100 - 100 / steps.length) * (current / Math.max(steps.length - 1, 1))}%`, borderTop: `2px solid ${GREEN}` }} />
            <span aria-hidden="true" className="absolute md:hidden" style={{ left: 6, top: 8, bottom: 8, borderLeft: `2px dashed rgba(27,66,41,.35)` }} />
            {steps.map((s, i) => {
              const done = i < current;
              const now = i === current;
              return (
                <li key={s.label} className="relative flex md:flex-col md:items-center md:text-center gap-4 md:gap-3 pb-7 md:pb-0 pl-9 md:pl-0">
                  <span className="absolute md:relative left-0 md:left-auto inline-flex rounded-full" style={{ width: 14, height: 14, backgroundColor: now ? CHARTREUSE : done ? GREEN : CREAM, border: `2px solid ${now || done ? GREEN : "rgba(27,66,41,.45)"}` }}>
                    {now && <span className="absolute -inset-1 rounded-full opacity-50 animate-ping" style={{ backgroundColor: CHARTREUSE, animationDuration: "2.4s" }} />}
                  </span>
                  <span className="flex flex-col md:items-center">
                    <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".92rem", letterSpacing: ".08em", textTransform: "uppercase", color: now || done ? GREEN : MUTED }}>{s.label}</span>
                    <span style={{ fontFamily: SG, fontSize: ".95rem", color: MUTED }}>{s.when}</span>
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mt-6 text-center" style={{ fontFamily: SG, fontSize: ".9rem", color: MUTED }}>{note}</p>
        </div>
      </div>
    </section>
  );
};
