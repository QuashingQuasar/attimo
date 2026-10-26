import type { CSSProperties, ReactNode } from "react";
import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, type HarvestOil } from "@/components/harvest/useHarvestSection";

// SANDBOX building blocks for the next-harvest looks. Every look is the same
// three parts (header + form, three oil cards, timeline) with its own theme.
const { UDC, SG, BEVERLY } = FONTS;

export type Theme = {
  section: string;
  eyebrow: string; heading: string; headingWeight?: 300 | 700; intro: string; note: string;
  formTone: "dark" | "light"; button: "primary" | "secondary";
  card: {
    bg: string; border: string; borderNew?: string; radius?: number;
    stage?: string; stageNew?: string; glow?: string;
    name: string; muted: string; body: string; rule: string;
    polyValue: string; polyPending: string; polyLabel: string;
    tagNewBg: string; tagNewText: string; tagBg: string; tagText: string;
    shadow?: string;
  };
  timeline: {
    panel?: CSSProperties;
    track: string; fill: string;
    nodeNow: string; nodeNowBorder: string; ping: string;
    nodeDone: string; nodeFuture: string; nodeFutureBorder: string;
    label: string; labelNow: string; labelMuted: string; when: string;
  };
};

export const Header = ({ t, locale, align = "center" }: { t: Theme; locale: Locale; align?: "center" | "left" }) => {
  const { u } = useHarvestSection(locale);
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="mb-4 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".15em", color: t.eyebrow }}>{u.eyebrow}</p>
      <h2 className="mb-5" style={{ fontFamily: UDC, fontWeight: t.headingWeight ?? 300, fontSize: "clamp(2.1rem, 3.5vw, 3.6rem)", lineHeight: 1.02, letterSpacing: "-.025em", color: t.heading }}>{u.heading}</h2>
      <p className={align === "center" ? "mx-auto" : ""} style={{ fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", lineHeight: 1.6, color: t.intro }}>{u.intro}</p>
      <div className={`mt-8 ${align === "left" ? "[&_form]:!mx-0" : ""}`}>
        <HarvestSignup locale={locale} line={null} button={u.button} tone={t.formTone} buttonVariant={t.button} stack={align === "left"} />
      </div>
    </div>
  );
};

export const OilCard = ({ o, t, locale, bottleHeight = 280 }: { o: HarvestOil; t: Theme; locale: Locale; bottleHeight?: number }) => {
  const { u } = useHarvestSection(locale);
  const c = t.card;
  const r = c.radius ?? 16;
  const stage = o.isNew ? c.stageNew ?? c.stage : c.stage;
  return (
    <div className="relative overflow-hidden text-center flex flex-col" style={{ backgroundColor: c.bg, border: `1px solid ${o.isNew && c.borderNew ? c.borderNew : c.border}`, borderRadius: r, boxShadow: c.shadow }}>
      <span className="absolute top-4 left-4 z-10 rounded-full px-3 py-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".12em", backgroundColor: o.isNew ? c.tagNewBg : c.tagBg, color: o.isNew ? c.tagNewText : c.tagText }}>{o.tag}</span>
      <div className="relative flex items-end justify-center" style={{ height: bottleHeight + (stage ? 92 : 30), backgroundColor: stage, paddingTop: stage ? 40 : 20, paddingBottom: stage ? 36 : 0 }}>
        {c.glow && <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 rounded-full" style={{ bottom: 8, width: bottleHeight * 0.8, height: bottleHeight * 0.8, background: `radial-gradient(circle, ${c.glow} 0%, rgba(0,0,0,0) 68%)` }} />}
        {stage && <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 28, width: bottleHeight * 0.5, height: 16, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(16,34,27,.32) 0%, rgba(16,34,27,0) 70%)" }} />}
        <img src={o.image} alt={`ATTIMO ${o.name} 26/27`} className="relative" style={{ height: bottleHeight, width: "auto", filter: stage ? "drop-shadow(0 6px 8px rgba(16,34,27,.18))" : "drop-shadow(0 18px 22px rgba(0,0,0,.45))" }} />
      </div>
      <div className="px-6 pt-6 pb-7 flex-1">
        <h3 className="mb-1" style={{ fontFamily: BEVERLY, fontSize: "clamp(1.7rem, 2.3vw, 2.3rem)", letterSpacing: ".04em", color: c.name }}>{o.name}</h3>
        <p className="mb-3 uppercase inline-flex items-center justify-center gap-2.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".78rem", letterSpacing: ".12em", color: c.muted }}>
          <span>{o.origin}</span>
          <o.Flag aria-hidden="true" style={{ width: 18, height: 12, borderRadius: 2, flexShrink: 0 }} />
        </p>
        <p style={{ fontFamily: SG, fontSize: "1.02rem", color: c.body }}>{o.flavour}</p>
        <div className="mt-5 pt-4 mx-auto" style={{ borderTop: `1px solid ${c.rule}`, maxWidth: 220 }}>
          {o.polyphenols != null ? (
            <p style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.15rem", letterSpacing: ".06em", color: c.polyValue }}>{o.polyphenols} mg/kg</p>
          ) : (
            <p style={{ fontFamily: SG, fontSize: ".95rem", fontStyle: "italic", color: c.polyPending }}>{u.polyPending}</p>
          )}
          <p className="mt-1 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".7rem", letterSpacing: ".14em", color: c.polyLabel }}>{u.polyLabel}</p>
        </div>
      </div>
    </div>
  );
};

export const Timeline = ({ t, locale, vertical = false }: { t: Theme; locale: Locale; vertical?: boolean }) => {
  const { current, steps, note } = useHarvestSection(locale);
  const tl = t.timeline;
  const n = steps.length;
  return (
    <div style={tl.panel}>
      <ol className={`relative ${vertical ? "" : "md:grid"}`} style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {!vertical && <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 6, left: `${50 / n}%`, right: `${50 / n}%`, height: 2, backgroundColor: tl.track }} />}
        {!vertical && <span aria-hidden="true" className="absolute hidden md:block" style={{ top: 6, left: `${50 / n}%`, width: `${(100 - 100 / n) * (current / Math.max(n - 1, 1))}%`, height: 2, backgroundColor: tl.fill }} />}
        <span aria-hidden="true" className={`absolute ${vertical ? "" : "md:hidden"}`} style={{ left: 6, top: 8, bottom: 8, width: 2, backgroundColor: tl.track }} />
        {steps.map((s, i) => {
          const done = i < current, now = i === current;
          return (
            <li key={s.label} className={vertical ? "relative flex flex-col pb-5 last:pb-0 pl-9" : "relative flex md:flex-col md:items-center md:text-center gap-0.5 md:gap-3 pb-6 md:pb-0 pl-9 md:pl-0"}>
              <span className={vertical ? "absolute left-0 inline-flex rounded-full" : "absolute md:relative left-0 md:left-auto inline-flex rounded-full"} style={{ top: vertical ? 3 : undefined, width: 14, height: 14, backgroundColor: now ? tl.nodeNow : done ? tl.nodeDone : tl.nodeFuture, border: `2px solid ${now ? tl.nodeNowBorder : done ? tl.nodeDone : tl.nodeFutureBorder}` }}>
                {now && <span className="absolute -inset-1 rounded-full opacity-50 animate-ping" style={{ backgroundColor: tl.ping, animationDuration: "2.4s" }} />}
              </span>
              <span className={vertical ? "flex flex-col" : "flex flex-col md:items-center"}>
                <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".92rem", letterSpacing: ".08em", textTransform: "uppercase", color: now ? tl.labelNow : done ? tl.label : tl.labelMuted }}>{s.label}</span>
                <span style={{ fontFamily: SG, fontSize: ".95rem", color: tl.when }}>{s.when}</span>
              </span>
            </li>
          );
        })}
      </ol>
      <p className={`mt-5 ${vertical ? "" : "text-center"}`} style={{ fontFamily: SG, fontSize: ".9rem", color: tl.when }}>{note}</p>
    </div>
  );
};

// Standard stacked composition: header, three cards, timeline.
export const StackedLook = ({ t, locale = DEFAULT_LOCALE, bottleHeight }: { t: Theme; locale?: Locale; bottleHeight?: number }) => {
  const { oils } = useHarvestSection(locale);
  return (
    <section className="relative overflow-hidden px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24" style={{ backgroundColor: t.section }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="mb-12 md:mb-16"><Header t={t} locale={locale} /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {oils.map((o) => <OilCard key={o.key} o={o} t={t} locale={locale} bottleHeight={bottleHeight} />)}
        </div>
        <div className="mx-auto" style={{ maxWidth: t.timeline.panel ? undefined : 1080 }}><Timeline t={t} locale={locale} /></div>
      </div>
    </section>
  );
};

export const Frame = ({ children }: { children: ReactNode }) => <>{children}</>;
