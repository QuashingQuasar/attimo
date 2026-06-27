import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Beaker } from "lucide-react";
import { Header } from "@/components/Header";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { ValuePropMarquee } from "@/components/ValuePropMarquee";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { IndustryProblem } from "@/components/IndustryProblem";
import { OilComparison } from "@/components/OilComparison";
import { KleiaWay } from "@/components/KleiaWay";
import { Testimonials } from "@/components/Testimonials";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { BlogSection } from "@/components/BlogSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { HIGH_POLYPHENOL_FAQS } from "@/lib/highPolyphenolContent";
import coratinaBottle from "@/assets/bottle-coratina-transparent.png?url";
import picualBottle from "@/assets/bottle-picual-transparent.png?url";
import nocellaraBottle from "@/assets/bottle-nocellara-transparent.png?url";

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
const AMBER = "#ECA948"; // Nocellara's warm accent
const DEEP_GREEN = "#10221B"; // the deeper green tint from Coratina's page
const UDC = "UDC Working Man Sans, sans-serif";
const SG = "Space Grotesk, sans-serif";

const faqItems: FaqItem[] = HIGH_POLYPHENOL_FAQS.map((f) => ({ question: f.question, answer: f.answer }));

const refLink: React.CSSProperties = { color: "inherit", textDecorationLine: "underline", textUnderlineOffset: "3px" };

// ── 1. HERO — headline + the three transparent bottles as a ranked lineup, so
// the product is in view immediately (no separate hero/product split). Bottle
// heights step down with polyphenol content (847 → 675 → 400) to read as a
// ranking; each links straight to its PDP. Video + dark overlay behind.
const HERO_BOTTLES = [
  { handle: "coratina", name: "Coratina", region: "Puglia, IT", polyphenols: 847, image: coratinaBottle, scale: 1.0 },
  { handle: "picual", name: "Picual", region: "Jaén, ES", polyphenols: 675, image: picualBottle, scale: 0.9 },
  { handle: "nocellara", name: "Nocellara", region: "Sicily, IT", polyphenols: 400, image: nocellaraBottle, scale: 0.82 },
];

function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden" style={{ backgroundColor: GREEN }}>
      <AutoplayVideo
        src="/videos/hero-video-new.mp4"
        poster="/images/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,30,20,0.7), rgba(13,30,20,0.5) 38%, rgba(13,30,20,0.78))" }} />

      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-28 pb-8">
        {/* Headline — wide enough that "Olive Oil" never orphans on desktop */}
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase mb-3 md:mb-4" style={{ fontFamily: UDC, color: ACCENT, letterSpacing: "0.22em", fontSize: "clamp(0.72rem, 0.95vw, 1rem)" }}>
            Category · Extra Virgin Olive Oil
          </p>
          <h1 className="mb-4 md:mb-5 tracking-tight drop-shadow-lg" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2.1rem, 5vw, 4.5rem)", lineHeight: 0.98 }}>
            High-Polyphenol Olive Oil
          </h1>
          <p className="mx-auto" style={{ fontFamily: SG, color: "rgba(255,250,234,0.95)", fontSize: "clamp(1rem, 1.45vw, 1.4rem)", lineHeight: 1.45, maxWidth: "44rem" }}>
            Single-variety, early-harvest extra virgin oil, ranked by what matters most: a{" "}
            <span style={{ color: ACCENT, fontWeight: 600 }}>polyphenol-rich</span> profile you can taste — and verify in the lab.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-7 md:mt-8 flex justify-center">
          <a
            href="#the-range"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-xl"
            style={{ fontFamily: UDC, backgroundColor: ACCENT, color: GREEN, fontSize: "clamp(1rem, 1.3vw, 1.3rem)", letterSpacing: "0.05em" }}>
            Shop the range →
          </a>
        </div>

        {/* Ranked bottle lineup */}
        <div className="mt-9 md:mt-12">
          <div className="w-full max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 md:gap-10 items-end">
            {HERO_BOTTLES.map((b) => (
              <a
                key={b.handle}
                href={`/product/${b.handle}`}
                className="group flex flex-col items-center justify-end text-center"
                aria-label={`${b.name} — ${b.polyphenols} mg/kg polyphenols`}
              >
                <img
                  src={b.image}
                  alt={`${b.name} high-polyphenol olive oil bottle`}
                  className="w-auto object-contain transition-transform duration-300 group-hover:-translate-y-1.5"
                  style={{ height: `clamp(${118 * b.scale}px, ${30 * b.scale}vh, ${300 * b.scale}px)`, filter: "drop-shadow(0 16px 26px rgba(0,0,0,0.4))" }}
                />
                <span className="mt-3 leading-none" style={{ fontFamily: UDC, color: ACCENT, fontSize: "clamp(1.1rem, 2vw, 2rem)" }}>
                  {b.polyphenols}<span style={{ fontSize: "0.5em", opacity: 0.85 }}> mg/kg</span>
                </span>
                <span className="mt-1" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(0.85rem, 1.2vw, 1.25rem)", letterSpacing: "0.04em" }}>
                  {b.name}
                </span>
                <span className="hidden sm:block uppercase" style={{ fontFamily: UDC, color: "rgba(255,250,234,0.6)", fontSize: "clamp(0.6rem, 0.8vw, 0.8rem)", letterSpacing: "0.12em" }}>
                  {b.region}
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

// ── 5. THE COMPOUNDS THAT MATTER — a purpose-built explainer of the three
// polyphenols that actually do the work (not a Coratina lab dump). Coratina's
// measured values appear only as proof, clearly labelled.
const COMPOUNDS = [
  {
    name: "Oleocanthal",
    icon: "/icons/mortar.svg",
    does: "A natural anti-inflammatory whose effect has been compared to ibuprofen — and the source of the peppery catch at the back of your throat.",
    proof: "471 mg/kg",
    sub: "in our Coratina · typical EVOO <10",
  },
  {
    name: "Oleacein",
    icon: "/icons/olive.svg",
    does: "A powerful antioxidant studied for blood-pressure regulation and cardiovascular protection.",
    proof: "336 mg/kg",
    sub: "in our Coratina · typical EVOO <40",
  },
  {
    name: "Hydroxytyrosol",
    icon: "/icons/flask.svg",
    does: "One of the most-studied olive antioxidants — and the exact compound the EU writes its olive-oil health claim around.",
    proof: "EU health-claim basis",
    sub: "≥250 mg/kg of hydroxytyrosol & derivatives",
  },
];

function CompoundsSection() {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: "#10221B" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: AMBER, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            What's Inside
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2rem, 3.5vw, 3.7rem)", lineHeight: 1.0 }}>
            The compounds that matter
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: "rgba(255,250,234,0.78)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            "Polyphenols" is an umbrella term. Three compounds do most of the heavy lifting — and an average supermarket
            oil barely registers any of them. New to lab reports?{" "}
            <a href="/blog/how-to-read-olive-oil-lab-analysis" style={{ ...refLink, color: AMBER }}>Here's how to read one</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {COMPOUNDS.map((c) => (
            <div key={c.name} className="rounded-2xl p-7 flex flex-col" style={{ backgroundColor: GREEN }}>
              <div
                className="w-12 h-12 mb-5"
                style={{
                  backgroundColor: AMBER,
                  WebkitMaskImage: `url(${c.icon})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center",
                  maskImage: `url(${c.icon})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center",
                }}
              />
              <h3 className="mb-3" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(1.4rem, 1.9vw, 1.9rem)" }}>
                {c.name}
              </h3>
              <p className="mb-6 leading-relaxed flex-grow" style={{ fontFamily: SG, color: "rgba(255,250,234,0.8)", fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}>
                {c.does}
              </p>
              <div className="rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(236,169,72,0.14)" }}>
                <div style={{ fontFamily: UDC, color: AMBER, fontSize: "clamp(1.3rem, 1.7vw, 1.7rem)" }}>{c.proof}</div>
                <div style={{ fontFamily: SG, color: "rgba(255,250,234,0.6)", fontSize: "clamp(0.78rem, 0.9vw, 0.92rem)" }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5b. WHAT THE SCIENCE SAYS — sourced benefits (YMYL: every claim links a
// primary source, and a plain disclaimer keeps it honest). Answers the
// informational half of the query without turning the page into an article.
const EVIDENCE = [
  {
    claim: "It protects your cholesterol from oxidising",
    body: "Olive-oil polyphenols help protect blood lipids (LDL) from oxidative damage — the one olive-oil health benefit the EU has formally approved, granted only to oils with at least 5 mg of hydroxytyrosol per 20 g (≈250 mg/kg).",
    source: "EU Reg. 432/2012 (EFSA)",
    href: "https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2012:136:0001:0040:en:PDF",
  },
  {
    claim: "It's anti-inflammatory, like a micro-dose of ibuprofen",
    body: "Oleocanthal — the compound behind the peppery throat-sting — was shown to inhibit the same COX-1 and COX-2 enzymes as ibuprofen. About 50 g of a high-oleocanthal oil delivers roughly a tenth of an ibuprofen dose: not a painkiller, but a daily anti-inflammatory drip.",
    source: "Beauchamp et al., Nature (2005)",
    href: "https://www.nature.com/articles/437045a",
  },
  {
    claim: "It anchors the most-proven heart-healthy diet",
    body: "In the PREDIMED trial, a Mediterranean diet rich in extra virgin olive oil (~50 ml/day) was associated with about 30% fewer major cardiovascular events in high-risk adults than a low-fat diet.",
    source: "Estruch et al., NEJM (2018 republication)",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389",
  },
];

function ScienceSection() {
  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: LIME }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.7, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            What The Science Says
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3vw, 3rem)", lineHeight: 1.05 }}>
            Why high polyphenols are worth chasing
          </h2>
          <p className="leading-relaxed max-w-3xl" style={{ fontFamily: SG, color: "rgba(27,66,41,0.78)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            The reason a polyphenol-rich olive oil is worth the premium isn't taste alone. Three findings, each from a
            primary source — not a wellness blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {EVIDENCE.map((e) => (
            <div key={e.claim} className="rounded-2xl p-7 flex flex-col" style={{ backgroundColor: GREEN }}>
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

        <p className="mt-8 md:mt-10 max-w-3xl leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.6)", fontSize: "clamp(0.8rem, 0.95vw, 1rem)" }}>
          ATTIMO is a food, not a medicine. Polyphenol levels are lab-measured per batch; the health context above is
          drawn from the published research linked beside each point. This isn't medical advice, and individual results vary.
        </p>
      </div>
    </section>
  );
}

// ── 6b. LAB RECEIPTS — literal proof: the three full third-party reports.
const LAB_REPORTS = [
  { variety: "Coratina", href: "/lab/Coratina2025.pdf" },
  { variety: "Picual", href: "/lab/Picual2025.pdf" },
  { variety: "Nocellara", href: "/lab/Nocellara2025.pdf" },
];

function LabReceipts() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: ACCENT }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", lineHeight: 1.05 }}>
            Don't take our word for it
          </h2>
          <p className="mb-9 mx-auto leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.8)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", maxWidth: "40rem" }}>
            Every batch is sent to an independent lab. Here are the full reports behind the numbers on this page —
            download and check them yourself.
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

function HighPolyphenolInner({ initialPosts }: { initialPosts?: InitialPost[] }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const locale = DEFAULT_LOCALE;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CREAM }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />

      {/* 1 — HERO */}
      <Hero />

      {/* 2 — THE RANGE, RANKED BY POLYPHENOLS */}
      <OilProductWidgets
        locale={locale}
        sectionId="the-range"
        headingFontFamily={UDC}
        heading="Shop Fresh Harvest"
        subtitle="All three are genuinely high-polyphenol — the difference is flavour and intensity. Pick by taste, or take the quiz to find your match."
        polyphenols={{ coratina: "847", picual: "675", nocellara: "400" }}
        showTagline={false}
        quizPrompt="Not sure which one to pick?"
      />

      {/* 3 — HOW MANY POLYPHENOLS SHOULD OLIVE OIL HAVE? (the threshold scale) */}
      <PolyphenolComparison
        locale={locale}
        heading="How many polyphenols should olive oil have?"
        intro="There's no legal minimum — but there are milestones. Below is where a typical supermarket bottle lands, where the EU draws its health-claim line, where the well-known Blueprint oil sits, and where ATTIMO's range falls."
        cards={[
          {
            content: "Polyphenols are the antioxidants behind olive oil's health reputation.",
            content2: "They're also what makes a fresh oil taste bitter and peppery — flavour and benefit come from the same place.",
          },
          {
            content: "Levels peak in early-harvest olives and start falling the moment the oil is bottled.",
            content2: "Heat, light, age and blending all pull the number down — which is why most bottles never reach a high-polyphenol level.",
          },
          {
            content: "Above 250 mg/kg, the EU lets a producer make a documented health claim.",
            content2: "ATTIMO's oils run 400–900 mg/kg, so every bottle clears that bar with room to spare.",
          },
        ]}
        citation={
          <>
            EU health-claim threshold of 250 mg/kg derives from the requirement of 5 mg hydroxytyrosol and derivatives per
            20 g of oil under{" "}
            <a href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2012:136:0001:0040:en:PDF" target="_blank" rel="noopener noreferrer" style={refLink}>
              Commission Regulation (EU) No&nbsp;432/2012
            </a>
            . The 400 mg/kg mark is the{" "}
            <a href="/blog/bryan-johnson-olive-oil" style={refLink}>Blueprint benchmark popularised by Bryan Johnson</a>. More in our{" "}
            <a href="/blog/polyphenols-olive-oil" style={refLink}>polyphenols explainer</a>.
          </>
        }
      />

      {/* 4 — WHY MOST OLIVE OIL ISN'T HIGH-POLYPHENOL (the problem) */}
      <IndustryProblem
        locale={locale}
        heading="Why high-polyphenol extra virgin olive oil is hard to find"
        intro="The words “extra virgin” say nothing about polyphenols — and often aren't even accurate. Here's the gap, and the three reasons supermarket oil lands so low."
        args={[
          {
            title: "Blended for shelf life, not polyphenols",
            text: "Industrial oil is blended across countries and harvests for a cheap, neutral, consistent taste. Blending and scale dilute the fresh-pressed polyphenols that make oil bitter, peppery and healthy.",
          },
          {
            title: "Picked late, pressed slow",
            text: "Polyphenols peak in young, green olives. Mass producers harvest late for higher yield and press hours or days later — by which point much of the polyphenol content is already gone.",
          },
          {
            title: "Old before you open it",
            text: "Polyphenols fade with time, light and heat. A bottle that has spent a year in transit and on a shelf has far less than the day it was pressed, even if it once qualified as high-polyphenol.",
          },
        ]}
        footnote={
          <p>
            On the figures: the ~80% failure rate reflects widely-cited independent testing of supermarket “extra
            virgin” oils; the most rigorous public study, the{" "}
            <a href="https://www.ucdavis.edu/news/most-imported-olive-oils-don%E2%80%99t-match-%E2%80%98extra-virgin%E2%80%99-claims-study-finds" target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>
              UC&nbsp;Davis Olive Center (2010–11)
            </a>
            , found 69% of sampled imported oils failed international extra-virgin standards. “Low in polyphenols” is
            measured against the EU health-claim threshold of 250 mg/kg (
            <a href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2012:136:0001:0040:en:PDF" target="_blank" rel="noopener noreferrer" style={{ ...refLink, color: ACCENT }}>
              Reg.&nbsp;(EU)&nbsp;432/2012
            </a>
            ).
          </p>
        }
      />

      {/* 5 — THE COMPOUNDS THAT MATTER */}
      <CompoundsSection />

      {/* 5b — WHAT THE SCIENCE SAYS (sourced benefits, informational intent) */}
      <ScienceSection />

      {/* 6 — LAB-TESTED PROOF: comparison table + the actual reports */}
      <OilComparison locale={locale} />
      <LabReceipts />

      {/* 7 — HIGH-POLYPHENOL BY DESIGN (the causes) */}
      <KleiaWay
        locale={locale}
        heading="Why our polyphenols stay high"
        intro="High numbers aren't luck. They come from a few deliberate choices — early harvest, single variety, pressed and bottled fresh — the same choices industrial oil skips to scale."
      />

      {/* 8 — Reviews → FAQ → blog feed + newsletter → footer */}
      <Testimonials locale={locale} />
      <FAQ locale={locale} items={faqItems} heading="High-polyphenol olive oil FAQ" headingFontFamily={UDC} />
      <BlogSection initialPosts={initialPosts} locale={locale} heading="Keep reading polyphenols" />
      <Footer locale={locale} />

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function HighPolyphenolPage({ initialPosts }: { initialPosts?: InitialPost[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HighPolyphenolInner initialPosts={initialPosts} />
    </QueryClientProvider>
  );
}
