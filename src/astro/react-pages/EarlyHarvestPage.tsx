import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Beaker } from "lucide-react";
import { Header } from "@/components/Header";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { ValuePropMarquee } from "@/components/ValuePropMarquee";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { IndustryProblem } from "@/components/IndustryProblem";
import { KleiaWay } from "@/components/KleiaWay";
import { Testimonials } from "@/components/Testimonials";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { BlogSection } from "@/components/BlogSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { EARLY_HARVEST_FAQS } from "@/lib/earlyHarvestContent";
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

const faqItems: FaqItem[] = EARLY_HARVEST_FAQS.map((f) => ({ question: f.question, answer: f.answer }));
const refLink: React.CSSProperties = { color: "inherit", textDecorationLine: "underline", textUnderlineOffset: "3px" };

// ── 1. HERO — the three transparent bottles as a lineup (not a ranking here —
// the angle is the harvest, not a number). Each framed by its flavour + origin.
const HERO_BOTTLES = [
  { handle: "coratina", name: "Coratina", city: "Puglia", Flag: IT, flavour: "Bold & punchy", image: coratinaBottle, scale: 1.0 },
  { handle: "picual", name: "Picual", city: "Jaén", Flag: ES, flavour: "Green & grassy", image: picualBottle, scale: 0.97 },
  { handle: "nocellara", name: "Nocellara", city: "Sicily", Flag: IT, flavour: "Gentle & fruity", image: nocellaraBottle, scale: 0.97 },
];

function Hero() {
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
            Category · Extra Virgin Olive Oil
          </p>
          <h1 className="mb-4 md:mb-5 tracking-tight drop-shadow-lg" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2.1rem, 5vw, 4.5rem)", lineHeight: 0.98 }}>
            Early Harvest Olive Oil
          </h1>
          <p className="mx-auto" style={{ fontFamily: SG, color: "rgba(255,250,234,0.95)", fontSize: "clamp(1rem, 1.45vw, 1.4rem)", lineHeight: 1.45, maxWidth: "45rem" }}>
            Olives picked <span style={{ color: ACCENT, fontWeight: 600 }}>green and young</span>, pressed within hours — the
            freshest, most intense, most alive olive oil there is. Single-variety, this year's harvest.
          </p>
        </div>

        <div className="mt-7 md:mt-8 flex justify-center">
          <a
            href="#the-range"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-xl"
            style={{ fontFamily: UDC, backgroundColor: ACCENT, color: GREEN, fontSize: "clamp(1rem, 1.3vw, 1.3rem)", letterSpacing: "0.05em" }}>
            Shop this year's harvest →
          </a>
        </div>

        <div className="mt-9 md:mt-12">
          <div className="w-full max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 md:gap-10 items-end">
            {HERO_BOTTLES.map((b) => (
              <a
                key={b.handle}
                href={`/product/${b.handle}`}
                className="group flex flex-col items-center justify-end text-center"
                aria-label={`${b.name} — ${b.flavour}`}
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
                  {b.flavour}
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

// ── 3. WHAT "EARLY HARVEST" MEANS — the ripeness/timing spectrum. Signature
// visual: green (early) → purple → black (late); early = intense, fresh, less
// oil; late = mild, more oil.
function RipenessSpectrum() {
  const stages = [
    { c: "#6E8B3D", label: "Green", when: "early October" },
    { c: "#7B5A6B", label: "Turning", when: "late October" },
    { c: "#2A2530", label: "Black", when: "November+" },
  ];
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: CREAM }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.6, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            The Timing
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(2rem, 3.5vw, 3.7rem)", lineHeight: 1.0 }}>
            What "early harvest" actually means
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: GREEN, opacity: 0.75, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            An olive changes as it ripens — green, then purple, then black — and so does the oil it makes. Pick early,
            while it's green, and you get less oil but far more of everything that matters: flavour, aroma and polyphenols.
            Wait, and you get more oil but a milder, flatter one. Early harvest is the choice to pick at the green peak.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between mb-2" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(0.72rem, 0.95vw, 0.95rem)", letterSpacing: "0.06em" }}>
            <span style={{ color: "#3B6D11" }}>← more flavour · more polyphenols · less oil</span>
            <span className="opacity-60 text-right">more oil · milder · less polyphenol →</span>
          </div>
          <div className="flex rounded-xl overflow-hidden h-14 md:h-16">
            {stages.map((s) => (
              <div key={s.label} className="flex-1" style={{ backgroundColor: s.c }} />
            ))}
          </div>
          <div className="grid grid-cols-3 mt-3">
            {stages.map((s, i) => (
              <div key={s.label} className={i === 0 ? "text-left" : i === 1 ? "text-center" : "text-right"}>
                <div style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(0.95rem, 1.3vw, 1.3rem)" }}>{s.label}</div>
                <div style={{ fontFamily: SG, color: GREEN, opacity: 0.55, fontSize: "clamp(0.78rem, 0.95vw, 0.95rem)" }}>{s.when}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 w-fit mx-auto flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: GREEN }}>
            <span style={{ fontFamily: UDC, color: ACCENT, fontSize: "clamp(0.8rem, 1vw, 1rem)", letterSpacing: "0.06em" }}>↑ ATTIMO picks here — green &amp; early</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 5. WHAT EARLY HARVEST TASTES LIKE — the sensory heart. Three oils placed
// on a gentle→bold intensity track.
const TASTE_OILS = [
  { name: "Nocellara", note: "Gentle & fruity", pos: 22 },
  { name: "Picual", note: "Green & grassy", pos: 55 },
  { name: "Coratina", note: "Bold & punchy", pos: 84 },
];

function TasteSection() {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: LIME }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.7, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            The Taste
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(2rem, 3.5vw, 3.7rem)", lineHeight: 1.0 }}>
            What early harvest tastes like
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.78)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            Green, grassy and aromatic, with a bitterness on the tongue and a peppery catch at the back of the throat —
            sometimes enough to make you cough. That kick isn't a flaw; it's the taste of a fresh, just-pressed oil,
            straight from green fruit. In its first weeks, unfiltered, it's what Italians call <em>olio nuovo</em>. Our
            three vary in intensity, but all share that living, green freshness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-1.5 rounded-full" style={{ backgroundColor: "rgba(27,66,41,0.25)" }}>
            {TASTE_OILS.map((o) => (
              <div key={o.name} className="absolute -translate-x-1/2" style={{ left: `${o.pos}%`, top: "-7px" }}>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: GREEN }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.6, fontSize: "clamp(0.72rem, 0.9vw, 0.9rem)", letterSpacing: "0.08em" }}>
            <span>GENTLE</span><span>BOLD</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {TASTE_OILS.map((o) => (
              <div key={o.name} className="text-center">
                <div style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.1rem, 1.6vw, 1.6rem)" }}>{o.name}</div>
                <div className="uppercase" style={{ fontFamily: UDC, color: "rgba(27,66,41,0.6)", fontSize: "clamp(0.68rem, 0.85vw, 0.85rem)", letterSpacing: "0.08em" }}>{o.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 6. FRESHNESS — the "always the latest harvest" angle.
function FreshnessSection() {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: DEEP_GREEN }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: AMBER, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            The Catch
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2rem, 3.5vw, 3.7rem)", lineHeight: 1.0 }}>
            It only works fresh
          </h2>
          <p className="leading-relaxed mb-6" style={{ fontFamily: SG, color: "rgba(255,250,234,0.82)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            Everything early harvest gives you — the green intensity, the aroma, the polyphenols — starts fading the day
            the oil is bottled. A great early-harvest oil that's sat in transit and on a shelf for a year has quietly
            become an ordinary one. Freshness isn't a nice-to-have here; it's the whole product.
          </p>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: CREAM, fontSize: "clamp(1.1rem, 1.4vw, 1.45rem)", fontWeight: 500 }}>
            So we do the one thing that keeps it honest: <span style={{ color: AMBER }}>we only ever sell the latest
            harvest.</span> When this year's is gone, we wait for the next — rather than shipping you last year's oil
            dressed up as fresh.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── 7. HEALTH TIE-IN → the high-polyphenol hub (one tight block, no re-tread).
function HealthTieIn() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: ACCENT }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-3 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)", lineHeight: 1.1 }}>
            Picking early is also why it's the healthiest
          </h2>
          <p className="mb-6 mx-auto leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.8)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", maxWidth: "42rem" }}>
            Polyphenols — the antioxidants behind olive oil's health reputation — peak in green, early-harvested olives.
            The harvest choice and the health benefit are the same decision.
          </p>
          <a
            href="/high-polyphenol-olive-oil"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
            style={{ fontFamily: UDC, backgroundColor: GREEN, color: CREAM, fontSize: "clamp(1rem, 1.2vw, 1.2rem)", letterSpacing: "0.03em" }}>
            See our high-polyphenol range →
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

function FreshnessProof() {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: CREAM }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)", lineHeight: 1.05 }}>
            Freshness you can check
          </h2>
          <p className="mb-9 mx-auto leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.7)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", maxWidth: "42rem" }}>
            Careful early harvest shows up in the numbers — low acidity (from intact, quickly-pressed fruit) and low
            peroxides (from minimal oxidation). Every batch is third-party tested; here are the full reports.
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
                <Beaker size={18} /> {r.variety} lab report
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EarlyHarvestInner({ initialPosts }: { initialPosts?: InitialPost[] }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const locale = DEFAULT_LOCALE;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CREAM }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />

      {/* 1 — HERO */}
      <Hero />

      {/* 2 — THE RANGE */}
      <OilProductWidgets
        locale={locale}
        sectionId="the-range"
        headingFontFamily={UDC}
        heading="This year's harvest"
        subtitle="Three single-variety oils, all pressed from this season's early, green-picked olives. Pick by taste, or take the quiz to find your match."
        quizPrompt="Not sure which one to pick?"
      />

      {/* 3 — WHAT EARLY HARVEST MEANS (ripeness spectrum) */}
      <RipenessSpectrum />

      {/* 4 — THE ECONOMICS: why almost no one does it */}
      <IndustryProblem
        locale={locale}
        heading="Why early-harvest olive oil is rare — and costs more"
        intro="Early harvest isn't a marketing word; it's an economic sacrifice most producers won't make. Here's the maths, and why the industry picks late instead."
        stat1={{
          value: "~½",
          text: "the oil green, early-harvested olives give versus fully ripe ones — so it takes about twice the fruit to fill a bottle.",
        }}
        stat2={{
          value: "October",
          text: "the short early window when the fruit is still green and at its peak. The industry waits for yield; we don't.",
        }}
        args={[
          {
            title: "Green olives give less oil",
            text: "Ripe black olives are fat with oil; green ones aren't. Early harvest trades yield for quality — roughly half the oil per kilo of fruit, which is exactly why it costs more per bottle.",
          },
          {
            title: "A short, careful window",
            text: "The green window lasts weeks, and firm early fruit has to be picked and pressed fast to avoid bruising and oxidation. More care, less oil, higher cost — the opposite of how commodity oil is made.",
          },
          {
            title: "Volume wins at scale",
            text: "Mass producers pick late and mechanically, when olives are heavy with oil, then blend for a cheap, neutral, consistent taste. Early harvest is the deliberate choice not to.",
          },
        ]}
        footnote={
          <p>
            On the maths: green, early-picked olives contain less oil than fully ripe ones — roughly half — so it takes
            about twice the fruit to fill a bottle. That yield gap is the core economics behind early-harvest pricing.
          </p>
        }
      />

      {/* 5 — WHAT IT TASTES LIKE */}
      <TasteSection />

      {/* 6 — FRESHNESS */}
      <FreshnessSection />

      {/* 7 — HEALTH TIE-IN → high-polyphenol hub */}
      <HealthTieIn />

      {/* 8 — PROOF */}
      <FreshnessProof />

      {/* 9 — HOW WE HARVEST (process) */}
      <KleiaWay
        locale={locale}
        heading="How we harvest"
        intro="Picked green in October, from a single variety, and cold-pressed within hours — then bottled fresh and shipped while it's still this year's oil."
      />

      {/* 10 — Reviews → FAQ → blog feed → footer */}
      <Testimonials locale={locale} />
      <FAQ locale={locale} items={faqItems} heading="Early harvest olive oil FAQ" headingFontFamily={UDC} />
      <BlogSection initialPosts={initialPosts} locale={locale} heading="Read more early harvest olive oil" />
      <Footer locale={locale} />

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function EarlyHarvestPage({ initialPosts }: { initialPosts?: InitialPost[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <EarlyHarvestInner initialPosts={initialPosts} />
    </QueryClientProvider>
  );
}
