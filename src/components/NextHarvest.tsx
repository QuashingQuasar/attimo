import { useRef, useState, type CSSProperties } from "react";
import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C, type HarvestOil } from "@/components/harvest/useHarvestSection";

// Homepage section for the next harvest (lab look "D5b-4", chosen 2026-10-25).
//
//   header      eyebrow, title, intro, signup form (cream)
//   panels      one colour panel per oil; hover/click/focus widens a panel to
//               show its bottle large with the profile beside it. Opens on
//               Coratina. On small screens the panels stack, all open.
//   timeline    production steps from harvestStatus.ts (cream)
//
// Panel colours are pale washes of each label colour; the panel's text takes
// the label's dark ink. These are NOT design-system tokens yet.
//
// Smoothness: on md+ each panel's contents are laid out once at their open
// size and absolutely centred; opening only animates the panel's flex-grow and
// moves/scales the contents with a transform, so nothing re-wraps per frame.

const { UDC, SG, BEVERLY } = FONTS;
const { CREAM, GREEN } = C;
const gr = (a: number) => `rgba(27,66,41,${a})`;

const BANDS: Record<HarvestOil["key"], { band: string; ink: string }> = {
  coratina: { band: "#BBC3B0", ink: "#10221B" },
  peranzana: { band: "#DACAC0", ink: "#5C2C3C" },
  picual: { band: "#D1E4B1", ink: GREEN },
};
// Width/height of each bottle cut-out (src/assets/bottle-2627-*.png).
const RATIO: Record<HarvestOil["key"], number> = { coratina: 0.3489, peranzana: 0.3611, picual: 0.3611 };

const EASE = "cubic-bezier(.22,1,.36,1)";
const DUR = ".7s";

// Profile: name, origin + flag, flavour, polyphenols (or "awaiting lab results").
const Profile = ({ o, ink, pending, label }: { o: HarvestOil; ink: string; pending: string; label: string }) => (
  <div className="text-center sm:text-left">
    <h3 className="mb-2" style={{ fontFamily: BEVERLY, fontSize: "clamp(2.4rem, 3.1vw, 3.1rem)", lineHeight: 1, letterSpacing: ".02em", color: ink }}>{o.name}</h3>
    <p className="mb-3 uppercase inline-flex items-center gap-2.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".96rem", letterSpacing: ".14em", color: ink, opacity: 0.75 }}>
      <span>{o.origin}</span>
      <o.Flag aria-hidden="true" style={{ width: 22, height: 14, borderRadius: 2, flexShrink: 0 }} />
    </p>
    <p className="mb-6" style={{ fontFamily: SG, fontSize: "1.26rem", color: ink }}>{o.flavour}</p>
    <div className="pt-4 mx-auto sm:mx-0" style={{ borderTop: `1px solid ${ink}33`, maxWidth: 280 }}>
      {o.polyphenols != null ? (
        <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.45rem", color: ink }}>{o.polyphenols} mg/kg</p>
      ) : (
        <p style={{ fontFamily: SG, fontSize: "1.18rem", fontStyle: "italic", color: ink, opacity: 0.72 }}>{pending}</p>
      )}
      <p className="mt-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".84rem", letterSpacing: ".15em", color: ink, opacity: 0.6 }}>{label}</p>
    </div>
  </div>
);

// Hand-drawn "NEW" with a curled arrow pointing at the bottle's shoulder.
const NewNote = ({ ink, text }: { ink: string; text: string }) => (
  <div aria-hidden="true" className="absolute z-10 pointer-events-none flex flex-col" style={{ left: "100%", top: "4%", marginLeft: 6, color: ink }}>
    <span className="uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.35rem", letterSpacing: ".12em", lineHeight: 1, whiteSpace: "nowrap", transform: "rotate(-8deg)" }}>{text}</span>
    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, marginLeft: -6 }}>
      <path d="M40 4 C 34 22, 22 32, 6 36" />
      <path d="M13.4 29.3 L 6 36 L 15.7 38.4" />
    </svg>
  </div>
);

const Timeline = ({ locale }: { locale: Locale }) => {
  const { current, steps, note } = useHarvestSection(locale);
  const n = steps.length;
  return (
    <div>
      <ol className="relative md:grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 6, left: `${50 / n}%`, right: `${50 / n}%`, height: 2, backgroundColor: gr(0.2) }} />
        <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 6, left: `${50 / n}%`, width: `${(100 - 100 / n) * (current / Math.max(n - 1, 1))}%`, height: 2, backgroundColor: GREEN }} />
        <span aria-hidden="true" className="absolute md:hidden" style={{ left: 6, top: 8, bottom: 8, width: 2, backgroundColor: gr(0.2) }} />
        {steps.map((s, i) => {
          const done = i < current, now = i === current;
          return (
            <li key={s.label} className="relative flex md:flex-col md:items-center md:text-center gap-0.5 md:gap-3 pb-6 md:pb-0 pl-9 md:pl-0">
              <span className="absolute md:relative left-0 md:left-auto inline-flex rounded-full" style={{ width: 14, height: 14, backgroundColor: now ? C.CHARTREUSE : done ? GREEN : CREAM, border: `2px solid ${now || done ? GREEN : gr(0.45)}` }}>
                {now && <span className="absolute -inset-1 rounded-full opacity-50 animate-ping" style={{ backgroundColor: GREEN, animationDuration: "2.4s" }} />}
              </span>
              <span className="flex flex-col md:items-center">
                <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".92rem", letterSpacing: ".08em", textTransform: "uppercase", color: now || done ? GREEN : gr(0.6) }}>{s.label}</span>
                <span style={{ fontFamily: SG, fontSize: ".95rem", color: gr(0.62) }}>{s.when}</span>
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-5 text-center" style={{ fontFamily: SG, fontSize: ".9rem", color: gr(0.62) }}>{note}</p>
    </div>
  );
};

const Panels = ({ locale }: { locale: Locale }) => {
  const { u, oils } = useHarvestSection(locale);
  const [i, setI] = useState(0);
  const timer = useRef<number | undefined>(undefined);
  const hoverTo = (j: number) => { window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setI(j), 90); };
  const cancel = () => window.clearTimeout(timer.current);
  return (
    <div className="flex flex-col md:flex-row md:h-[clamp(480px,40vw,600px)]" onMouseLeave={cancel}>
      {oils.map((o, j) => {
        const { band, ink } = BANDS[o.key];
        const on = j === i;
        return (
          <div
            key={o.key}
            role="button"
            tabIndex={0}
            aria-expanded={on}
            aria-label={o.name}
            onMouseEnter={() => hoverTo(j)}
            onClick={() => { cancel(); setI(j); }}
            onFocus={() => setI(j)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setI(j); }}
            className="relative overflow-hidden px-6 py-10 md:p-0 md:basis-0 md:[flex-grow:var(--grow)] outline-none focus-visible:[box-shadow:inset_0_0_0_3px_var(--ink)]"
            style={{
              backgroundColor: band,
              ["--ink" as string]: ink,
              ["--grow" as string]: on ? 2.8 : 1,
              ["--bh" as string]: "clamp(320px, 31vw, 450px)",
              ["--bw" as string]: `calc(var(--bh) * ${RATIO[o.key]})`,
              ["--t" as string]: on ? "translate(-50%, -50%)" : "translate(calc(var(--bw) / -2), -50%) scale(.7)",
              ["--po" as string]: on ? 1 : 0,
              ["--no" as string]: on ? 0 : 1,
              transition: `flex-grow ${DUR} ${EASE}`,
            } as CSSProperties}
          >
            <div
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:absolute md:left-1/2 md:top-1/2 md:[transform:var(--t)]"
              style={{ transformOrigin: "calc(var(--bw) / 2) 55%", transition: `transform ${DUR} ${EASE}`, willChange: "transform" }}
            >
              <div className="relative shrink-0">
                {o.isNew && <NewNote ink={ink} text={u.new} />}
                <img
                  src={o.image}
                  alt={`ATTIMO ${o.name} 26/27`}
                  style={{ height: "var(--bh)", width: "var(--bw)", display: "block", filter: "drop-shadow(0 20px 22px rgba(16,34,27,.24))" }}
                />
              </div>
              <div
                className="mt-6 sm:mt-[calc(var(--bh)*0.40)] sm:ml-12 md:[opacity:var(--po)]"
                style={{ width: 300, transition: `opacity ${on ? ".45s" : ".18s"} ease ${on ? ".25s" : "0s"}` }}
              >
                <Profile o={o} ink={ink} pending={u.polyPending} label={u.polyLabel} />
              </div>
            </div>
            <div className="hidden md:block absolute bottom-8 left-0 right-0 text-center pointer-events-none md:[opacity:var(--no)]" style={{ transition: `opacity ${on ? ".15s" : ".4s"} ease ${on ? "0s" : ".3s"}` }}>
              <p style={{ fontFamily: BEVERLY, fontSize: "2.2rem", lineHeight: 1.1, color: ink }}>{o.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const NextHarvest = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const { u } = useHarvestSection(locale);
  return (
    <section id="next-harvest" className="snap-start relative" style={{ backgroundColor: CREAM }}>
      <div className="px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-16 mx-auto text-center" style={{ maxWidth: 1200 }}>
        <p className="mb-4 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".15em", color: gr(0.55) }}>{u.eyebrow}</p>
        <h2 className="mb-5" style={{ fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2.1rem, 3.5vw, 3.6rem)", lineHeight: 1.02, letterSpacing: "-.025em", color: GREEN }}>{u.heading}</h2>
        <p className="mx-auto" style={{ fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", lineHeight: 1.6, color: gr(0.78) }}>{u.intro}</p>
        <div className="mt-8">
          <HarvestSignup locale={locale} line={null} button={u.button} tone="light" />
        </div>
      </div>
      <Panels locale={locale} />
      <div className="px-4 md:px-6 pt-12 md:pt-16 pb-16 md:pb-24 mx-auto" style={{ maxWidth: 1080 }}>
        <Timeline locale={locale} />
      </div>
    </section>
  );
};

