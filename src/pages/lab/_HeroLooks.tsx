import type { CSSProperties, ReactNode } from "react";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { HarvestSignup } from "@/components/HarvestSignup";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { useHarvestSection, FONTS, C } from "@/components/harvest/useHarvestSection";
import mark531 from "@/assets/attimo-hero-logo-531.svg?url";

// SANDBOX — five hero directions for the between-seasons homepage.
// Each is a full first screen: header (what), subheader (how), the product
// as the image, the waitlist form, the Last Season Sale link.
const { UDC, SG } = FONTS;
const { CREAM, GREEN, DEEP, CHARTREUSE, LIME } = C;
const locale = DEFAULT_LOCALE;
const gr = (a: number) => `rgba(27,66,41,${a})`;
const cr = (a: number) => `rgba(255,250,234,${a})`;

const H1: CSSProperties = { fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2.3rem, 4.4vw, 4.4rem)", lineHeight: 1.02, letterSpacing: "-.025em" };
const SUB: CSSProperties = { fontFamily: SG, fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)", lineHeight: 1.6 };

const Arrow = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", width: ".75em", height: ".75em", marginLeft: ".35em" }}>
    <path d="M3 9 L9 3 M4.2 3 H9 V7.8" />
  </svg>
);
const SaleLink = ({ colour }: { colour: string }) => (
  <a href="#oil-collection" style={{ fontFamily: SG, fontSize: "1.02rem", color: colour, textDecoration: "underline", textUnderlineOffset: 5, textDecorationColor: "currentColor" }}>
    Last Season Sale<Arrow />
  </a>
);
const Form = ({ tone, left = false }: { tone: "dark" | "light"; left?: boolean }) => (
  <div className={left ? "[&_form]:!mx-0" : ""}>
    <HarvestSignup locale={locale} line={null} button="Get it fresh from the press" tone={tone} maxWidth={left ? 460 : 600} stack={left} />
  </div>
);
const Bottle = ({ src, h, style }: { src: string; h: string; style?: CSSProperties }) => (
  <img src={src} alt="" aria-hidden="true" style={{ height: h, width: "auto", filter: "drop-shadow(0 22px 26px rgba(16,34,27,.28))", ...style }} />
);
const Screen = ({ children, bg, className = "" }: { children: ReactNode; bg: string; className?: string }) => (
  <section className={`relative overflow-hidden flex items-center ${className}`} style={{ backgroundColor: bg, minHeight: "min(92vh, 900px)" }}>{children}</section>
);

// 1 — Gilles's idea: the line set in Working Man capitals under the mark, so
// it reads as part of the logo. Video stays.
const Hero1 = () => (
  <Screen bg={DEEP}>
    <AutoplayVideo src="/videos/hero-video-new.mp4" poster="/images/hero-poster.png" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
    <div className="relative z-10 w-full px-6 py-20 text-center">
      <img src={mark531} alt="ATTIMO" className="mx-auto mb-7 drop-shadow-2xl" style={{ width: "min(260px, 46vw, 30vh)", height: "auto" }} />
      <h1 className="mx-auto mb-9 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(1.6rem, 2.7vw, 2.7rem)", lineHeight: 1.12, letterSpacing: ".06em", color: CREAM, maxWidth: "16em", textWrap: "balance", textShadow: "0 2px 18px rgba(0,0,0,.45)" } as CSSProperties}>
        Fresh harvest <span className="whitespace-nowrap">high-polyphenol</span> olive oil is almost here
      </h1>
      <Form tone="dark" />
      <div className="mt-8"><SaleLink colour={CREAM} /></div>
    </div>
  </Screen>
);

// 2 — Specialty, defined: the category plus its inputs as the header; the
// three new bottles as the image. No video.
const Hero2 = () => {
  const { oils } = useHarvestSection(locale);
  return (
    <Screen bg={CREAM}>
      <div className="relative z-10 w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ maxWidth: 1240 }}>
        <div>
          <p className="mb-5 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.05rem", letterSpacing: ".15em", color: gr(0.55) }}>Harvest 26/27 on the way</p>
          <h1 className="mb-6" style={{ ...H1, color: GREEN }}>Specialty olive oil. Picked early, pressed within hours, <span className="whitespace-nowrap">lab-tested</span>.</h1>
          <p className="mb-9" style={{ ...SUB, color: gr(0.78) }}>Single-variety oils from Puglia and Andalusia, sold one harvest at a time. This year's harvest ships mid-November.</p>
          <Form tone="light" left />
          <div className="mt-7"><SaleLink colour={GREEN} /></div>
        </div>
        <div className="relative flex items-end justify-center gap-2 sm:gap-5">
          <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 rounded-full" style={{ bottom: "6%", width: "88%", aspectRatio: "1 / 1", backgroundColor: LIME, opacity: 0.45 }} />
          <Bottle src={oils[0].image} h="clamp(240px, 30vw, 420px)" style={{ position: "relative" }} />
          <Bottle src={oils[1].image} h="clamp(270px, 34vw, 470px)" style={{ position: "relative" }} />
          <Bottle src={oils[2].image} h="clamp(240px, 30vw, 420px)" style={{ position: "relative" }} />
        </div>
      </div>
    </Screen>
  );
};

// 3 — The number as the hook, with a true-to-scale comparison.
const AVG = 180, CORATINA = 847;
const Hero3 = () => {
  const { oils } = useHarvestSection(locale);
  return (
    <Screen bg={GREEN}>
      <div className="relative z-10 w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-12 items-center" style={{ maxWidth: 1240 }}>
        <div>
          <h1 className="mb-6" style={{ ...H1, fontSize: "clamp(2.1rem, 3.6vw, 3.6rem)", color: CREAM }}>Over four times the polyphenols of supermarket olive oil. <span className="whitespace-nowrap">Lab-tested</span> every harvest.</h1>
          <p className="mb-8" style={{ ...SUB, color: cr(0.82) }}>Early-harvest, single-variety olive oil, pressed within hours of picking. Last season's Coratina measured {CORATINA} mg/kg; the supermarket average is about {AVG}.</p>
          {/* Bars to scale: widths are value / 847. */}
          <div className="mb-9 space-y-3" style={{ maxWidth: 560 }}>
            {[
              { label: "Avg. supermarket extra virgin", v: AVG, bg: "#A8B88F", fg: GREEN },
              { label: "ATTIMO Coratina 25/26", v: CORATINA, bg: CHARTREUSE, fg: GREEN },
            ].map((b) => (
              <div key={b.label}>
                <p className="mb-1.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".85rem", letterSpacing: ".06em", textTransform: "uppercase", color: cr(0.85) }}>{b.label}</p>
                <div className="grid items-center gap-3" style={{ gridTemplateColumns: "1fr 110px" }}>
                  <div className="rounded-lg" style={{ width: `${(b.v / CORATINA) * 100}%`, height: 30, backgroundColor: b.bg }} />
                  <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.15rem", color: CREAM }}>{b.v} mg/kg</span>
                </div>
              </div>
            ))}
          </div>
          <Form tone="dark" left />
          <div className="mt-7"><SaleLink colour={CREAM} /></div>
        </div>
        <div className="flex justify-center">
          <Bottle src={oils[0].image} h="clamp(320px, 40vw, 560px)" />
        </div>
      </div>
    </Screen>
  );
};

// 4 — The harvest as the hook: this October's oil, the live production
// timeline in the hero, harvest footage behind.
const Hero4 = () => {
  const { steps, current } = useHarvestSection(locale);
  return (
    <Screen bg={DEEP}>
      <AutoplayVideo src="/videos/harvest-2024-1.mp4" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
      <div className="relative z-10 w-full mx-auto px-6 py-20 text-center" style={{ maxWidth: 1100 }}>
        <h1 className="mx-auto mb-6" style={{ ...H1, color: CREAM, maxWidth: "15em", textShadow: "0 2px 18px rgba(0,0,0,.4)" }}>This October's olive oil, on your table by mid-November.</h1>
        <p className="mx-auto mb-10" style={{ ...SUB, color: cr(0.88), maxWidth: "38em" }}>We only sell the latest harvest: picked early, pressed within hours, lab-tested before it ships. Sign up and get it first.</p>
        <ol className="mx-auto mb-10 flex flex-wrap justify-center gap-x-6 gap-y-3" style={{ maxWidth: 900 }}>
          {steps.map((s, i) => (
            <li key={s.label} className="inline-flex items-center gap-2.5">
              <span className="relative inline-flex rounded-full" style={{ width: 12, height: 12, backgroundColor: i === current ? CHARTREUSE : "transparent", border: `2px solid ${i === current ? CHARTREUSE : cr(0.6)}` }}>
                {i === current && <span className="absolute -inset-1 rounded-full opacity-60 animate-ping" style={{ backgroundColor: CHARTREUSE, animationDuration: "2.4s" }} />}
              </span>
              <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".95rem", letterSpacing: ".08em", textTransform: "uppercase", color: i === current ? CHARTREUSE : CREAM }}>{s.label}</span>
              <span style={{ fontFamily: SG, fontSize: ".95rem", color: cr(0.7) }}>{s.when}</span>
            </li>
          ))}
        </ol>
        <Form tone="dark" />
        <div className="mt-8"><SaleLink colour={CREAM} /></div>
      </div>
    </Screen>
  );
};

// 5 — Check it yourself: the lab certificate as the image, next to the bottle.
const Hero5 = () => {
  const { oils } = useHarvestSection(locale);
  const rows: [string, string][] = [
    ["Polyphenols (total)", "847 mg/kg"],
    ["Oleocanthal", "471 mg/kg"],
    ["Method", "HPLC"],
    ["Harvest", "October 2025"],
  ];
  return (
    <Screen bg={CREAM}>
      <div className="relative z-10 w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ maxWidth: 1240 }}>
        <div>
          <h1 className="mb-6" style={{ ...H1, color: GREEN }}>Extra virgin olive oil you can check. Every harvest <span className="whitespace-nowrap">lab-tested</span>.</h1>
          <p className="mb-9" style={{ ...SUB, color: gr(0.78) }}>Every ATTIMO oil has a public lab certificate: polyphenols, oleocanthal and harvest date, measured by an independent lab. This year's results land in early November.</p>
          <Form tone="light" left />
          <div className="mt-7"><SaleLink colour={GREEN} /></div>
        </div>
        <div className="relative flex items-center justify-center" style={{ minHeight: 460 }}>
          <Bottle src={oils[0].image} h="clamp(320px, 36vw, 500px)" style={{ position: "relative", zIndex: 1, transform: "translateX(-62%)" }} />
          {/* Certificate card */}
          <div className="absolute rounded-2xl" style={{ zIndex: 2, right: "0%", top: "50%", transform: "translateY(-38%) rotate(2deg)", width: "min(300px, 70%)", backgroundColor: "#FFFFFF", border: `1px solid ${GREEN}`, boxShadow: "0 24px 50px rgba(27,66,41,.18)", padding: "22px 22px 18px" }}>
            <p className="uppercase mb-1" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".16em", color: gr(0.55) }}>Lab certificate</p>
            <p className="mb-4" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.25rem", color: GREEN }}>ATTIMO Coratina 25/26</p>
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2" style={{ borderTop: `1px dashed ${GREEN}` }}>
                <span style={{ fontFamily: SG, fontSize: ".92rem", color: gr(0.7) }}>{k}</span>
                <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".98rem", color: GREEN }}>{v}</span>
              </div>
            ))}
            <p className="mt-3 inline-flex items-center" style={{ fontFamily: SG, fontSize: ".88rem", color: GREEN, textDecoration: "underline", textUnderlineOffset: 4 }}>View the full certificate<Arrow /></p>
          </div>
        </div>
      </div>
    </Screen>
  );
};


// Video versions of 2 and 5: same copy and image, current hero video behind,
// darker wash on the text side, cream text.
const VideoBg = () => (
  <>
    <AutoplayVideo src="/videos/hero-video-new.mp4" poster="/images/hero-poster.png" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,20,14,.82) 0%, rgba(10,20,14,.62) 45%, rgba(10,20,14,.38) 100%)" }} />
  </>
);

const Hero2v = () => {
  const { oils } = useHarvestSection(locale);
  return (
    <Screen bg={DEEP}>
      <VideoBg />
      <div className="relative z-10 w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ maxWidth: 1240 }}>
        <div>
          <p className="mb-5 uppercase" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.05rem", letterSpacing: ".15em", color: CHARTREUSE }}>Harvest 26/27 on the way</p>
          <h1 className="mb-6" style={{ ...H1, color: CREAM }}>Specialty olive oil. Picked early, pressed within hours, <span className="whitespace-nowrap">lab-tested</span>.</h1>
          <p className="mb-9" style={{ ...SUB, color: cr(0.85) }}>Single-variety oils from Puglia and Andalusia, sold one harvest at a time. This year's harvest ships mid-November.</p>
          <Form tone="dark" left />
          <div className="mt-7"><SaleLink colour={CREAM} /></div>
        </div>
        <div className="relative flex items-end justify-center gap-2 sm:gap-5">
          <Bottle src={oils[0].image} h="clamp(240px, 30vw, 420px)" style={{ position: "relative", filter: "drop-shadow(0 24px 30px rgba(0,0,0,.55))" }} />
          <Bottle src={oils[1].image} h="clamp(270px, 34vw, 470px)" style={{ position: "relative", filter: "drop-shadow(0 24px 30px rgba(0,0,0,.55))" }} />
          <Bottle src={oils[2].image} h="clamp(240px, 30vw, 420px)" style={{ position: "relative", filter: "drop-shadow(0 24px 30px rgba(0,0,0,.55))" }} />
        </div>
      </div>
    </Screen>
  );
};

const Hero5v = () => {
  const { oils } = useHarvestSection(locale);
  const rows: [string, string][] = [
    ["Polyphenols (total)", "847 mg/kg"],
    ["Oleocanthal", "471 mg/kg"],
    ["Method", "HPLC"],
    ["Harvest", "October 2025"],
  ];
  return (
    <Screen bg={DEEP}>
      <VideoBg />
      <div className="relative z-10 w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ maxWidth: 1240 }}>
        <div>
          <h1 className="mb-6" style={{ ...H1, color: CREAM }}>Extra virgin olive oil you can check. Every harvest <span className="whitespace-nowrap">lab-tested</span>.</h1>
          <p className="mb-9" style={{ ...SUB, color: cr(0.85) }}>Every ATTIMO oil has a public lab certificate: polyphenols, oleocanthal and harvest date, measured by an independent lab. This year's results land in early November.</p>
          <Form tone="dark" left />
          <div className="mt-7"><SaleLink colour={CREAM} /></div>
        </div>
        <div className="relative flex items-center justify-center" style={{ minHeight: 460 }}>
          <Bottle src={oils[0].image} h="clamp(320px, 36vw, 500px)" style={{ position: "relative", zIndex: 1, transform: "translateX(-62%)", filter: "drop-shadow(0 24px 30px rgba(0,0,0,.55))" }} />
          <div className="absolute rounded-2xl" style={{ zIndex: 2, right: "0%", top: "50%", transform: "translateY(-38%) rotate(2deg)", width: "min(300px, 70%)", backgroundColor: CREAM, boxShadow: "0 28px 60px rgba(0,0,0,.45)", padding: "22px 22px 18px" }}>
            <p className="uppercase mb-1" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".16em", color: gr(0.55) }}>Lab certificate</p>
            <p className="mb-4" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.25rem", color: GREEN }}>ATTIMO Coratina 25/26</p>
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2" style={{ borderTop: `1px dashed ${GREEN}` }}>
                <span style={{ fontFamily: SG, fontSize: ".92rem", color: gr(0.7) }}>{k}</span>
                <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".98rem", color: GREEN }}>{v}</span>
              </div>
            ))}
            <p className="mt-3 inline-flex items-center" style={{ fontFamily: SG, fontSize: ".88rem", color: GREEN, textDecoration: "underline", textUnderlineOffset: 4 }}>View the full certificate<Arrow /></p>
          </div>
        </div>
      </div>
    </Screen>
  );
};

const Label = ({ children }: { children: string }) => (
  <div className="px-6 py-3 text-center uppercase" style={{ fontFamily: UDC, fontWeight: 700, letterSpacing: ".15em", fontSize: ".85rem", backgroundColor: "#FFFFFF", color: GREEN, borderTop: `1px dashed ${GREEN}`, borderBottom: `1px dashed ${GREEN}` }}>
    {children}
  </div>
);

export default function HeroLooks() {
  return (
    <div>
      <Label>1 · The line as part of the logo (video)</Label>
      <Hero1 />
      <Label>2 · Specialty, defined (three bottles)</Label>
      <Hero2 />
      <Label>2v · Specialty, defined, on the video</Label>
      <Hero2v />
      <Label>3 · The number as the hook (bars to scale)</Label>
      <Hero3 />
      <Label>4 · The harvest as the hook (live timeline, harvest footage)</Label>
      <Hero4 />
      <Label>5 · Check it yourself (lab certificate)</Label>
      <Hero5 />
      <Label>5v · Check it yourself, on the video</Label>
      <Hero5v />
    </div>
  );
}
