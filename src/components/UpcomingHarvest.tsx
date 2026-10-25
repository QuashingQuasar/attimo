import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { HARVEST_STATUS } from "@/lib/harvestStatus";
import coratina from "@/assets/bottle-coratina-cutout.png?url";
import picual from "@/assets/bottle-picual-cutout.png?url";
import nocellara from "@/assets/bottle-nocellara-cutout.png?url";

// Homepage pre-launch section for the next harvest, shown between seasons.
// Three bottles as pale silhouettes (the labels do not exist yet), one line
// each, the production steps, and the signup. Deep green so it reads as a
// reveal; sits between the ticker and the cream lineup of last year's oils.
const DEEP = "#10221B";
const CREAM = "#FFFAEA";
const ACCENT = "#CDDB2D";
const UDC = "'UDC Working Man Sans', sans-serif";
const SG = "'Space Grotesk', sans-serif";
const BEVERLY = "'Beverly Drive', serif";

export const UpcomingHarvest = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const t = getDict(locale);
  const u = t.upcoming;
  const current = HARVEST_STATUS.currentStep;
  const updated = new Intl.DateTimeFormat(locale.lang === "en" ? "en-GB" : locale.hreflang, { day: "numeric", month: "long" }).format(new Date(HARVEST_STATUS.updated + "T12:00:00Z"));
  const note = u.note.replace("{date}", updated);
  const oils = [
    { key: "coratina", name: "Coratina", image: coratina, tag: u.returning, origin: u.origins.coratina, organic: true, line: u.oils.coratina, isNew: false },
    { key: "peranzana", name: "Peranzana", image: nocellara, tag: u.new, origin: u.origins.peranzana, organic: true, line: u.oils.peranzana, isNew: true },
    { key: "picual", name: "Picual", image: picual, tag: u.returning, origin: u.origins.picual, organic: false, line: u.oils.picual, isNew: false },
  ];
  return (
    <section id="next-harvest" className="snap-start relative overflow-hidden px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24" style={{ backgroundColor: DEEP, color: CREAM }}>
      <div className="relative z-10 mx-auto" style={{ maxWidth: 1200 }}>
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-4 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".14em", color: ACCENT }}>{u.eyebrow}</p>
          <h2 className="mb-5" style={{ fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2rem, 3.4vw, 3.4rem)", lineHeight: 1.02, letterSpacing: "-.025em", color: CREAM }}>{u.heading}</h2>
          <p className="mx-auto" style={{ fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", lineHeight: 1.6, color: "rgba(255,250,234,.82)" }}>{u.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {oils.map((o) => (
            <div key={o.key} className="relative rounded-2xl px-6 pt-8 pb-7 text-center" style={{ backgroundColor: "rgba(255,250,234,.04)", border: `1px solid ${o.isNew ? "rgba(205,219,45,.45)" : "rgba(255,250,234,.14)"}` }}>
              <span className="absolute top-4 left-4 rounded-full px-3 py-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".12em", backgroundColor: o.isNew ? ACCENT : "rgba(255,250,234,.1)", color: o.isNew ? "#1B4229" : "rgba(255,250,234,.8)" }}>{o.tag}</span>
              <div className="relative mx-auto flex items-end justify-center" style={{ height: 230 }}>
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 mx-auto rounded-full" style={{ width: 170, height: 170, background: "radial-gradient(circle, rgba(179,229,140,.22) 0%, rgba(179,229,140,0) 70%)" }} />
                <img src={o.image} alt="" aria-hidden="true" className="relative" style={{ height: 220, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.16 }} />
              </div>
              <h3 className="mt-5 mb-1" style={{ fontFamily: BEVERLY, fontSize: "clamp(1.7rem, 2.3vw, 2.3rem)", letterSpacing: ".04em", color: CREAM }}>{o.name}</h3>
              <p className="mb-3 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".78rem", letterSpacing: ".12em", color: "rgba(255,250,234,.6)" }}>
                {o.origin}{o.organic && <><span aria-hidden="true" style={{ margin: "0 .5em", opacity: .5 }}>·</span><span style={{ color: ACCENT }}>{u.organic}</span></>}
              </p>
              <p style={{ fontFamily: SG, fontSize: "1rem", lineHeight: 1.55, color: "rgba(255,250,234,.78)" }}>{o.line}</p>
            </div>
          ))}
        </div>

        {/* Timeline: a track with one node per step. Done steps are filled,
            the current one is lit, the rest are outlined. Horizontal from md
            up, vertical below. */}
        <ol className="relative mx-auto mb-4 md:mb-6 md:grid" style={{ maxWidth: 1040, gridTemplateColumns: `repeat(${u.steps.length}, minmax(0, 1fr))` }}>
          <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 5, left: `${50 / u.steps.length}%`, right: `${50 / u.steps.length}%`, height: 2, backgroundColor: "rgba(255,250,234,.18)" }} />
          <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 5, left: `${50 / u.steps.length}%`, width: `${(100 - 100 / u.steps.length) * (current / Math.max(u.steps.length - 1, 1))}%`, height: 2, backgroundColor: ACCENT }} />
          <span aria-hidden="true" className="absolute md:hidden" style={{ left: 5, top: 6, bottom: 6, width: 2, backgroundColor: "rgba(255,250,234,.18)" }} />
          {u.steps.map((s, i) => {
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
        <p className="text-center mb-12 md:mb-14" style={{ fontFamily: SG, fontSize: ".9rem", color: "rgba(255,250,234,.5)" }}>{note}</p>

        <div className="text-center">
          <HarvestSignup locale={locale} line={u.formLine} />
        </div>
      </div>
    </section>
  );
};
