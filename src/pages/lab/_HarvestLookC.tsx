import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C } from "@/components/harvest/useHarvestSection";

// LOOK C — lime emphasis band, split. Left: the pitch, the form and a
// vertical timeline. Right: the three bottles grouped on a deep-green panel
// with a three-column legend underneath. The new oil stands in the middle.
const { UDC, SG, BEVERLY } = FONTS;
const { CREAM, GREEN, DEEP, CHARTREUSE, LIME } = C;
const BODY = "rgba(27,66,41,.82)";
const MUTED = "rgba(27,66,41,.62)";

export const HarvestLookC = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const { u, oils, current, note, steps } = useHarvestSection(locale);
  // Peranzana (new) in the middle and in front.
  const order = [oils[0], oils[1], oils[2]];
  return (
    <section className="relative overflow-hidden px-4 md:px-6 py-16 md:py-24" style={{ backgroundColor: LIME, color: GREEN }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center" style={{ maxWidth: 1240 }}>
        {/* Left column */}
        <div className="lg:col-span-5">
          <p className="mb-4 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".15em", color: MUTED }}>{u.eyebrow}</p>
          <h2 className="mb-5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(2.2rem, 3.8vw, 3.9rem)", lineHeight: 1.0, letterSpacing: "-.025em", color: GREEN }}>{u.heading}</h2>
          <p className="mb-8" style={{ fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)", lineHeight: 1.6, color: BODY }}>{u.intro}</p>
          <div className="mb-12 [&_form]:!mx-0">
            <HarvestSignup locale={locale} line={null} button={u.button} tone="light" buttonVariant="secondary" />
          </div>

          <ol className="relative">
            <span aria-hidden="true" className="absolute" style={{ left: 6, top: 8, bottom: 8, width: 2, backgroundColor: "rgba(27,66,41,.22)" }} />
            <span aria-hidden="true" className="absolute" style={{ left: 6, top: 8, height: `${(current / Math.max(steps.length - 1, 1)) * 100}%`, width: 2, backgroundColor: GREEN }} />
            {steps.map((s, i) => {
              const done = i < current;
              const now = i === current;
              return (
                <li key={s.label} className="relative flex items-baseline justify-between gap-4 pl-9 pb-4 last:pb-0">
                  <span className="absolute left-0 inline-flex rounded-full" style={{ top: 4, width: 14, height: 14, backgroundColor: now ? CHARTREUSE : done ? GREEN : LIME, border: `2px solid ${now || done ? GREEN : "rgba(27,66,41,.45)"}` }}>
                    {now && <span className="absolute -inset-1 rounded-full opacity-60 animate-ping" style={{ backgroundColor: GREEN, animationDuration: "2.4s" }} />}
                  </span>
                  <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".95rem", letterSpacing: ".08em", textTransform: "uppercase", color: now || done ? GREEN : MUTED }}>{s.label}</span>
                  <span className="flex-1 mx-1 hidden sm:block" style={{ borderBottom: "1px dashed rgba(27,66,41,.3)" }} />
                  <span style={{ fontFamily: SG, fontSize: ".98rem", color: now ? GREEN : MUTED, fontWeight: now ? 600 : 400 }}>{s.when}</span>
                </li>
              );
            })}
          </ol>
          <p className="mt-5" style={{ fontFamily: SG, fontSize: ".88rem", color: MUTED }}>{note}</p>
        </div>

        {/* Right column: bottle panel */}
        <div className="lg:col-span-7 rounded-3xl px-5 md:px-8 pt-10 pb-8" style={{ backgroundColor: DEEP, color: CREAM }}>
          <div className="relative flex items-end justify-center" style={{ height: "clamp(280px, 30vw, 400px)" }}>
            <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 rounded-[50%]" style={{ bottom: -8, width: "78%", height: 34, background: "radial-gradient(ellipse, rgba(0,0,0,.55) 0%, rgba(0,0,0,0) 70%)" }} />
            {order.map((o, i) => (
              <img
                key={o.key}
                src={o.image}
                alt={`ATTIMO ${o.name} 26/27`}
                className="relative"
                style={{
                  height: i === 1 ? "100%" : "86%",
                  width: "auto",
                  zIndex: i === 1 ? 2 : 1,
                  margin: i === 1 ? "0 -4%" : 0,
                  filter: "drop-shadow(0 16px 18px rgba(0,0,0,.45))",
                }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,250,234,.14)" }}>
            {order.map((o) => (
              <div key={o.key} className="text-center">
                <p className="mb-2 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".68rem", letterSpacing: ".14em", color: o.isNew ? DEEP : "rgba(255,250,234,.55)" }}>
                  <span className="rounded-full px-2.5 py-1" style={{ backgroundColor: o.isNew ? CHARTREUSE : "transparent" }}>{o.tag}</span>
                </p>
                <h3 className="mb-1" style={{ fontFamily: BEVERLY, fontSize: "clamp(1.35rem, 2vw, 2rem)", letterSpacing: ".04em", color: CREAM }}>{o.name}</h3>
                <p className="mb-2 uppercase inline-flex items-center justify-center gap-2" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".7rem", letterSpacing: ".12em", color: "rgba(255,250,234,.6)" }}>
                  <span>{o.origin}</span>
                  <o.Flag aria-hidden="true" style={{ width: 16, height: 11, borderRadius: 2, flexShrink: 0 }} />
                </p>
                <p className="mb-3" style={{ fontFamily: SG, fontSize: ".95rem", color: "rgba(255,250,234,.8)" }}>{o.flavour}</p>
                {o.polyphenols != null ? (
                  <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.05rem", color: CREAM }}>{o.polyphenols} mg/kg</p>
                ) : (
                  <p style={{ fontFamily: SG, fontSize: ".85rem", fontStyle: "italic", color: "rgba(255,250,234,.5)" }}>{u.polyPending}</p>
                )}
                <p className="uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".64rem", letterSpacing: ".14em", color: "rgba(255,250,234,.4)" }}>{u.polyLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
