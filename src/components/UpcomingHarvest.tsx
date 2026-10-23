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
    { key: "coratina", name: "Coratina", detail: "d'Italia", image: coratina, tag: u.returning, line: u.oils.coratina, isNew: false },
    { key: "peranzana", name: "Peranzana", detail: "Bio", image: nocellara, tag: u.new, line: u.oils.peranzana, isNew: true },
    { key: "picual", name: "Picual", detail: "de España", image: picual, tag: u.returning, line: u.oils.picual, isNew: false },
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
              <h3 className="mt-5 mb-2" style={{ fontFamily: BEVERLY, fontSize: "clamp(1.7rem, 2.3vw, 2.3rem)", letterSpacing: ".04em", color: CREAM }}>{o.name} {o.detail}</h3>
              <p style={{ fontFamily: SG, fontSize: "1rem", lineHeight: 1.55, color: "rgba(255,250,234,.78)" }}>{o.line}</p>
            </div>
          ))}
        </div>

        <ol className="flex flex-wrap justify-center gap-x-7 gap-y-3 mb-3">
          {u.steps.map((s, i) => (
            <li key={s.label} className="inline-flex items-center gap-2.5">
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full" style={{ backgroundColor: i === current ? ACCENT : i < current ? "rgba(255,250,234,.55)" : "transparent", border: `1.5px solid ${i === current ? ACCENT : i < current ? "rgba(255,250,234,.55)" : "rgba(255,250,234,.45)"}` }}>
                {i === current && <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: ACCENT, animationDuration: "2.4s" }} />}
              </span>
              <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".92rem", letterSpacing: ".08em", textTransform: "uppercase", color: i === current ? ACCENT : "rgba(255,250,234,.85)" }}>{s.label}</span>
              <span style={{ fontFamily: SG, fontSize: ".95rem", color: "rgba(255,250,234,.6)" }}>{s.when}</span>
            </li>
          ))}
        </ol>
        <p className="text-center mb-12 md:mb-14" style={{ fontFamily: SG, fontSize: ".9rem", color: "rgba(255,250,234,.5)" }}>{note}</p>

        <div className="text-center">
          <HarvestSignup locale={locale} line={u.formLine} />
        </div>
      </div>
    </section>
  );
};
