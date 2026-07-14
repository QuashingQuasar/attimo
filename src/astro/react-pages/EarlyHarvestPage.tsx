import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Beaker } from "lucide-react";
import { Header } from "@/components/Header";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { ValuePropMarquee } from "@/components/ValuePropMarquee";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { IndustryProblem } from "@/components/IndustryProblem";
import { OilComparison } from "@/components/OilComparison";
import { KleiaWay } from "@/components/KleiaWay";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BlogSection } from "@/components/BlogSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { EH_CONTENT, type EHContent } from "@/lib/earlyHarvestHubContent";
import { HUB_SLUGS } from "@/lib/highPolyphenolHubContent";
import coratinaBottle from "@/assets/bottle-coratina-transparent.png?url";
import picualBottle from "@/assets/bottle-picual-transparent.png?url";
import nocellaraBottle from "@/assets/bottle-nocellara-transparent.png?url";
import { IT, ES } from "country-flag-icons/react/3x2";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } } });

interface InitialPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

const GREEN = "#1B4229";
const CREAM = "#FFFAEA";
const ACCENT = "#CDDB2D";
const LIME = "#B3E58C";
const AMBER = "#ECA948";
const DEEP_GREEN = "#10221B";
const UDC = "UDC Working Man Sans, sans-serif";
const SG = "Space Grotesk, sans-serif";

// ── 1. HERO — the three transparent bottles as a lineup (angle is the harvest,
// not a number). Flavour labels come from localised content.
const HERO_BOTTLES = [
  { handle: "coratina" as const, name: "Coratina", city: "Puglia", Flag: IT, image: coratinaBottle, scale: 1.0 },
  { handle: "picual" as const, name: "Picual", city: "Jaén", Flag: ES, image: picualBottle, scale: 0.97 },
  { handle: "nocellara" as const, name: "Nocellara", city: "Sicily", Flag: IT, image: nocellaraBottle, scale: 0.97 },
];

function Hero({ hero, flavours }: { hero: EHContent["hero"]; flavours: EHContent["bottleFlavours"] }) {
  return (
    <section className="relative flex flex-col overflow-hidden" style={{ backgroundColor: GREEN }}>
      <AutoplayVideo
        src="/videos/harvest-2024-1.mp4"
        poster="/images/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,30,20,0.72), rgba(13,30,20,0.5) 38%, rgba(13,30,20,0.8))" }} />

      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-28 pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase mb-3 md:mb-4" style={{ fontFamily: UDC, color: ACCENT, letterSpacing: "0.22em", fontSize: "clamp(0.72rem, 0.95vw, 1rem)" }}>
            {hero.eyebrow}
          </p>
          <h1 className="mb-4 md:mb-5 tracking-tight drop-shadow-lg" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2.1rem, 5vw, 4.5rem)", lineHeight: 0.98 }}>
            {hero.h1}
          </h1>
          <p className="mx-auto" style={{ fontFamily: SG, color: "rgba(255,250,234,0.95)", fontSize: "clamp(1rem, 1.45vw, 1.4rem)", lineHeight: 1.45, maxWidth: "45rem" }}>
            {hero.subPre}<span style={{ color: ACCENT, fontWeight: 600 }}>{hero.subAccent}</span>{hero.subPost}
          </p>
        </div>

        <div className="mt-7 md:mt-8 flex justify-center">
          <a
            href="#the-range"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-xl"
            style={{ fontFamily: UDC, backgroundColor: ACCENT, color: GREEN, fontSize: "clamp(1rem, 1.3vw, 1.3rem)", letterSpacing: "0.05em" }}>
            {hero.cta}
          </a>
        </div>

        <div className="mt-9 md:mt-12">
          <div className="w-full max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 md:gap-10 items-end">
            {HERO_BOTTLES.map((b) => (
              <a
                key={b.handle}
                href={`/product/${b.handle}`}
                className="group flex flex-col items-center justify-end text-center"
                aria-label={`${b.name} — ${flavours[b.handle]}`}
              >
                <img
                  src={b.image}
                  alt={`${b.name} early harvest olive oil bottle`}
                  className="w-auto object-contain transition-transform duration-300 group-hover:-translate-y-1.5"
                  style={{ height: `clamp(${118 * b.scale}px, ${30 * b.scale}vh, ${300 * b.scale}px)`, filter: "drop-shadow(0 16px 26px rgba(0,0,0,0.4))" }}
                />
                <span className="mt-3 leading-none" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(0.95rem, 1.4vw, 1.4rem)", letterSpacing: "0.04em" }}>
                  {b.name}
                </span>
                <span className="mt-1.5 uppercase" style={{ fontFamily: UDC, color: ACCENT, fontSize: "clamp(0.62rem, 0.85vw, 0.85rem)", letterSpacing: "0.1em" }}>
                  {flavours[b.handle]}
                </span>
                <span className="hidden sm:inline-flex items-center justify-center gap-1.5 uppercase mt-1" style={{ fontFamily: UDC, color: "rgba(255,250,234,0.55)", fontSize: "clamp(0.58rem, 0.78vw, 0.78rem)", letterSpacing: "0.12em" }}>
                  {b.city}
                  <b.Flag title={b.city} style={{ width: "1.3em", height: "auto", borderRadius: "1px", display: "inline-block" }} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <ValuePropMarquee variant="static" />
    </section>
  );
}

// ── 3. WHAT "EARLY HARVEST" MEANS — the ripeness/timing spectrum. Colours are
// fixed data; labels/copy come from content.
const STAGE_COLORS = ["#6E8B3D", "#7B5A6B", "#2A2530"];

function RipenessSpectrum({ c }: { c: EHContent["ripeness"] }) {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: CREAM }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.6, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            {c.eyebrow}
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3vw, 3rem)", lineHeight: 1.0 }}>
            {c.heading}
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: GREEN, opacity: 0.75, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            {c.intro}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between mb-2" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(0.72rem, 0.95vw, 0.95rem)", letterSpacing: "0.06em" }}>
            <span style={{ color: "#3B6D11" }}>{c.scaleLeft}</span>
            <span className="opacity-60 text-right">{c.scaleRight}</span>
          </div>
          <div className="flex rounded-xl overflow-hidden h-14 md:h-16">
            {c.stages.map((s, i) => (
              <div key={s.label} className="flex-1" style={{ backgroundColor: STAGE_COLORS[i] }} />
            ))}
          </div>
          <div className="grid grid-cols-3 mt-3">
            {c.stages.map((s, i) => (
              <div key={s.label} className={i === 0 ? "text-left" : i === 1 ? "text-center" : "text-right"}>
                <div style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(0.95rem, 1.3vw, 1.3rem)" }}>{s.label}</div>
                <div style={{ fontFamily: SG, color: GREEN, opacity: 0.55, fontSize: "clamp(0.78rem, 0.95vw, 0.95rem)" }}>{s.when}</div>
              </div>
            ))}
          </div>
          {/* Marker under the GREEN third (left) — annotation, not a button. */}
          <div className="mt-3 grid grid-cols-3">
            <div className="flex flex-col items-start leading-tight">
              <span aria-hidden="true" style={{ fontFamily: UDC, color: GREEN, fontSize: "1.35rem", lineHeight: 1 }}>↑</span>
              <span className="uppercase" style={{ fontFamily: UDC, color: GREEN, fontWeight: 700, fontSize: "clamp(0.72rem, 0.9vw, 0.92rem)", letterSpacing: "0.08em" }}>
                {c.markerLabel}
              </span>
              <span style={{ fontFamily: SG, color: GREEN, opacity: 0.6, fontSize: "clamp(0.72rem, 0.85vw, 0.85rem)" }}>{c.markerSub}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 5. WHAT EARLY HARVEST TASTES LIKE — gentle→bold intensity track. pos values
// are the centres of the three equal-width label columns (1/6, 1/2, 5/6).
const TASTE_OILS = [
  { handle: "nocellara" as const, name: "Nocellara", pos: 16.667 },
  { handle: "picual" as const, name: "Picual", pos: 50 },
  { handle: "coratina" as const, name: "Coratina", pos: 83.333 },
];

function TasteSection({ c }: { c: EHContent["taste"] }) {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: LIME }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.7, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            {c.eyebrow}
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3vw, 3rem)", lineHeight: 1.0 }}>
            {c.heading}
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.78)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            {c.introPre}<em>{c.introEm}</em>{c.introPost}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-1.5 rounded-full" style={{ backgroundColor: "rgba(27,66,41,0.25)" }}>
            {TASTE_OILS.map((o) => (
              <div key={o.handle} className="absolute -translate-x-1/2" style={{ left: `${o.pos}%`, top: "-7px" }}>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: GREEN }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.6, fontSize: "clamp(0.72rem, 0.9vw, 0.9rem)", letterSpacing: "0.08em" }}>
            <span>{c.gentle}</span><span>{c.bold}</span>
          </div>
          <div className="grid grid-cols-3 mt-6">
            {TASTE_OILS.map((o) => (
              <div key={o.handle} className="text-center px-2">
                <div style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.1rem, 1.6vw, 1.6rem)" }}>{o.name}</div>
                <div className="uppercase" style={{ fontFamily: UDC, color: "rgba(27,66,41,0.6)", fontSize: "clamp(0.68rem, 0.85vw, 0.85rem)", letterSpacing: "0.08em" }}>{c.notes[o.handle]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 6. FRESHNESS — copy + freshness-decay chart.
function FreshnessSection({ c }: { c: EHContent["freshness"] }) {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: DEEP_GREEN }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
          <div>
            <p className="uppercase mb-3" style={{ fontFamily: UDC, color: AMBER, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
              {c.eyebrow}
            </p>
            <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(1.9rem, 3vw, 3rem)", lineHeight: 1.0 }}>
              {c.heading}
            </h2>
            <p className="leading-relaxed mb-6" style={{ fontFamily: SG, color: "rgba(255,250,234,0.82)", fontSize: "clamp(1.05rem, 1.2vw, 1.25rem)" }}>
              {c.body1}
            </p>
            <p className="leading-relaxed" style={{ fontFamily: SG, color: CREAM, fontSize: "clamp(1.05rem, 1.3vw, 1.35rem)", fontWeight: 500 }}>
              {c.body2Pre}<span style={{ color: AMBER }}>{c.body2Accent}</span>{c.body2Post}
            </p>
          </div>

          <div className="rounded-2xl p-6 md:p-7" style={{ backgroundColor: "rgba(255,250,234,0.04)", border: "1px solid rgba(255,250,234,0.12)" }}>
            <p className="uppercase mb-4" style={{ fontFamily: UDC, color: "rgba(255,250,234,0.7)", letterSpacing: "0.14em", fontSize: "clamp(0.68rem, 0.85vw, 0.82rem)" }}>
              {c.chart.title}
            </p>
            <svg viewBox="0 0 420 220" className="w-full h-auto" role="img" aria-label={c.chart.title}>
              <defs>
                <linearGradient id="ehdecay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B3E58C" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#B3E58C" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M30,42 C90,82 140,112 210,134 C290,158 350,173 400,183 L400,198 L30,198 Z" fill="url(#ehdecay)" />
              <path d="M30,42 C90,82 140,112 210,134 C290,158 350,173 400,183" fill="none" stroke="#B3E58C" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="150" x2="400" y2="150" stroke="#FFFAEA" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 5" />
              <text x="34" y="144" fill="#FFFAEA" fillOpacity="0.7" fontFamily={SG} fontSize="11">{c.chart.euLine}</text>
              <circle cx="30" cy="42" r="5" fill="#CDDB2D" />
              <text x="42" y="35" fill="#CDDB2D" fontFamily={UDC} fontSize="12">{c.chart.fresh}</text>
              <text x="398" y="176" fill="#FFFAEA" fillOpacity="0.55" fontFamily={SG} fontSize="11" textAnchor="end">{c.chart.ordinary}</text>
              <text x="30" y="214" fill="#FFFAEA" fillOpacity="0.5" fontFamily={SG} fontSize="11">{c.chart.pressed}</text>
              <text x="400" y="214" fill="#FFFAEA" fillOpacity="0.5" fontFamily={SG} fontSize="11" textAnchor="end">{c.chart.oneYear}</text>
            </svg>
            <p className="mt-4" style={{ fontFamily: SG, color: "rgba(255,250,234,0.5)", fontSize: "clamp(0.72rem, 0.85vw, 0.85rem)", lineHeight: 1.5 }}>
              {c.chart.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 6b. THE EVIDENCE — early-harvest-specific, peer-reviewed sources.
function EarlyHarvestScience({ c }: { c: EHContent["evidence"] }) {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: CREAM }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.6, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            {c.eyebrow}
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3vw, 3rem)", lineHeight: 1.0 }}>
            {c.heading}
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: GREEN, opacity: 0.75, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            {c.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {c.items.map((e) => (
            <div key={e.claim} className="rounded-2xl p-7 flex flex-col text-left" style={{ backgroundColor: GREEN }}>
              <h3 className="mb-3" style={{ fontFamily: UDC, color: LIME, fontSize: "clamp(1.25rem, 1.6vw, 1.6rem)", lineHeight: 1.1 }}>
                {e.claim}
              </h3>
              <p className="mb-5 leading-relaxed flex-grow" style={{ fontFamily: SG, color: "rgba(255,250,234,0.82)", fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}>
                {e.body}
              </p>
              <a href={e.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80 transition-opacity" style={{ fontFamily: UDC, color: ACCENT, fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)", letterSpacing: "0.04em" }}>
                {e.source} ↗
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 md:mt-10 max-w-3xl mx-auto text-center leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.6)", fontSize: "clamp(0.8rem, 0.95vw, 1rem)" }}>
          {c.footnote}
        </p>
      </div>
    </section>
  );
}

// ── 7. HEALTH TIE-IN → the (localised) high-polyphenol hub.
function HealthTieIn({ c, hubHref }: { c: EHContent["healthTieIn"]; hubHref: string }) {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: ACCENT }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-3 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)", lineHeight: 1.1 }}>
            {c.heading}
          </h2>
          <p className="mb-6 mx-auto leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.8)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", maxWidth: "42rem" }}>
            {c.body}
          </p>
          <a
            href={hubHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
            style={{ fontFamily: UDC, backgroundColor: GREEN, color: CREAM, fontSize: "clamp(1rem, 1.2vw, 1.2rem)", letterSpacing: "0.03em" }}>
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

// ── 8. PROOF — the freshness reports.
const LAB_REPORTS = [
  { variety: "Coratina", href: "/lab/Coratina2025.pdf" },
  { variety: "Picual", href: "/lab/Picual2025.pdf" },
  { variety: "Nocellara", href: "/lab/Nocellara2025.pdf" },
];

function FreshnessProof({ c }: { c: EHContent["proof"] }) {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: CREAM }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)", lineHeight: 1.05 }}>
            {c.heading}
          </h2>
          <p className="mb-9 mx-auto leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.7)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", maxWidth: "42rem" }}>
            {c.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {LAB_REPORTS.map((r) => (
              <a
                key={r.variety}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
                style={{ fontFamily: UDC, backgroundColor: GREEN, color: CREAM, fontSize: "clamp(1rem, 1.2vw, 1.2rem)", letterSpacing: "0.03em" }}>
                <Beaker size={18} /> {r.variety} {c.reportSuffix}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EarlyHarvestInner({ initialPosts, locale }: { initialPosts?: InitialPost[]; locale: Locale }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const content = EH_CONTENT[locale.lang];
  const hubHref = HUB_SLUGS[locale.lang];

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CREAM }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />

      <Hero hero={content.hero} flavours={content.bottleFlavours} />

      <OilProductWidgets
        locale={locale}
        sectionId="the-range"
        headingFontFamily={UDC}
        heading={content.range.heading}
        subtitle={content.range.subtitle}
        quizPrompt={content.range.quizPrompt}
      />

      <RipenessSpectrum c={content.ripeness} />

      <IndustryProblem
        locale={locale}
        heading={content.problem.heading}
        intro={content.problem.intro}
        stat1={content.problem.stat1}
        stat2={content.problem.stat2}
        args={content.problem.args}
        footnote={<p>{content.problem.footnote}</p>}
      />

      <OilComparison locale={locale} />

      <TasteSection c={content.taste} />

      <KleiaWay locale={locale} heading={content.harvest.heading} intro={content.harvest.intro} />

      <EarlyHarvestScience c={content.evidence} />

      <FreshnessSection c={content.freshness} />

      <FreshnessProof c={content.proof} />

      <HealthTieIn c={content.healthTieIn} hubHref={hubHref} />

      <Testimonials locale={locale} />
      <FAQ locale={locale} items={content.faq.items} heading={content.faq.heading} headingFontFamily={UDC} />
      <BlogSection initialPosts={initialPosts} locale={locale} heading={content.blogHeading} headingFontSize="clamp(1.9rem, 3.2vw, 3.4rem)" />
      <Footer locale={locale} />

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function EarlyHarvestPage({ initialPosts, locale = DEFAULT_LOCALE }: { initialPosts?: InitialPost[]; locale?: Locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <EarlyHarvestInner initialPosts={initialPosts} locale={locale} />
    </QueryClientProvider>
  );
}
