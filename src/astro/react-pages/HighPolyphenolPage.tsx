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
import { FAQ } from "@/components/FAQ";
import { BlogSection } from "@/components/BlogSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { HUB_CONTENT, type HubContent } from "@/lib/highPolyphenolHubContent";
import type { HubIndexData } from "@/lib/polyphenolIndexHub";
import type { HomeLabOil } from "@/lib/certificates/homeNumbers";
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
const AMBER = "#ECA948"; // Nocellara's warm accent
const UDC = "UDC Working Man Sans, sans-serif";
const SG = "Space Grotesk, sans-serif";

// ── 1. HERO — headline + the three transparent bottles as a ranked lineup, so
// the product is in view immediately (no separate hero/product split). Bottle
// heights step down with polyphenol content (847 → 675 → 400) to read as a
// ranking; each links straight to its PDP. Video + dark overlay behind.
const HERO_BOTTLES = [
  { handle: "coratina", name: "Coratina", city: "Puglia", Flag: IT, polyphenols: 847, image: coratinaBottle, scale: 1.0 },
  { handle: "picual", name: "Picual", city: "Jaén", Flag: ES, polyphenols: 675, image: picualBottle, scale: 0.9 },
  { handle: "nocellara", name: "Nocellara", city: "Sicily", Flag: IT, polyphenols: 400, image: nocellaraBottle, scale: 0.82 },
];

function Hero({ hero }: { hero: HubContent["hero"] }) {
  return (
    <section className="relative flex flex-col overflow-hidden" style={{ backgroundColor: GREEN }}>
      <AutoplayVideo
        src="/videos/hero-video-new.mp4"
        poster="/images/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,30,20,0.7), rgba(13,30,20,0.5) 38%, rgba(13,30,20,0.78))" }} />

      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-64 lg:pt-80 xl:pt-[22rem] pb-14 md:pb-20">
        {/* Headline — wide enough that "Olive Oil" never orphans on desktop */}
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase mb-3 md:mb-4" style={{ fontFamily: UDC, color: ACCENT, letterSpacing: "0.22em", fontSize: "clamp(0.72rem, 0.95vw, 1rem)" }}>
            {hero.eyebrow}
          </p>
          <h1 className="mb-6 md:mb-8 tracking-tight drop-shadow-lg" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2.1rem, 5vw, 4.5rem)", lineHeight: 0.98 }}>
            {hero.h1}
          </h1>
          <p className="mx-auto" style={{ fontFamily: SG, color: "rgba(255,250,234,0.95)", fontSize: "clamp(1rem, 1.45vw, 1.4rem)", lineHeight: 1.45 }}>
            {hero.subPre}
            <span style={{ color: ACCENT, fontWeight: 600 }}>{hero.subAccent}</span>
            {hero.subPost}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="#the-range"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-xl"
            style={{ fontFamily: UDC, backgroundColor: ACCENT, color: GREEN, fontSize: "clamp(1rem, 1.3vw, 1.3rem)", letterSpacing: "0.05em" }}>
            {hero.cta}
          </a>
        </div>

        {/* Ranked bottle lineup */}
        <div className="mt-14 md:mt-20">
          <div className="w-full max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 md:gap-10 items-end">
            {HERO_BOTTLES.map((b) => (
              <a
                key={b.handle}
                href={`/product/${b.handle}`}
                className="group flex flex-col items-center justify-end text-center"
                aria-label={`${b.name} — ${b.polyphenols} mg/kg`}
              >
                <img
                  src={b.image}
                  alt={`${b.name} — ${hero.h1}`}
                  className="w-auto object-contain transition-transform duration-300 group-hover:-translate-y-1.5"
                  style={{ height: `clamp(${118 * b.scale}px, ${30 * b.scale}vh, ${300 * b.scale}px)`, filter: "drop-shadow(0 16px 26px rgba(0,0,0,0.4))" }}
                />
                <span className="mt-3 leading-none" style={{ fontFamily: UDC, color: ACCENT, fontSize: "clamp(1.1rem, 2vw, 2rem)" }}>
                  {b.polyphenols}<span style={{ fontSize: "0.5em", opacity: 0.85 }}> mg/kg</span>
                </span>
                <span className="mt-1" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(0.85rem, 1.2vw, 1.25rem)", letterSpacing: "0.04em" }}>
                  {b.name}
                </span>
                <span className="hidden sm:inline-flex items-center justify-center gap-1.5 uppercase" style={{ fontFamily: UDC, color: "rgba(255,250,234,0.6)", fontSize: "clamp(0.6rem, 0.8vw, 0.8rem)", letterSpacing: "0.12em" }}>
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

// ── 5. THE COMPOUNDS THAT MATTER — a purpose-built explainer of the three
// polyphenols that actually do the work (not a Coratina lab dump). Coratina's
// measured values appear only as proof, clearly labelled.
function CompoundsSection({ c }: { c: HubContent["compounds"] }) {
  return (
    <section id="compounds" className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: "#10221B" }}>
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: AMBER, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            {c.eyebrow}
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(2rem, 3.5vw, 3.7rem)", lineHeight: 1.0 }}>
            {c.heading}
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: "rgba(255,250,234,0.78)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            {c.leadIn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {c.items.map((item) => (
            <div key={item.name} className="rounded-2xl p-7 flex flex-col" style={{ backgroundColor: GREEN }}>
              <div
                className="w-12 h-12 mb-5"
                style={{
                  backgroundColor: AMBER,
                  WebkitMaskImage: `url(${item.icon})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center",
                  maskImage: `url(${item.icon})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center",
                }}
              />
              <h3 className="mb-3" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(1.4rem, 1.9vw, 1.9rem)" }}>
                {item.name}
              </h3>
              <p className="mb-6 leading-relaxed flex-grow" style={{ fontFamily: SG, color: "rgba(255,250,234,0.8)", fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}>
                {item.does}
              </p>
              <div className="rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(236,169,72,0.14)" }}>
                <div style={{ fontFamily: UDC, color: AMBER, fontSize: "clamp(1.3rem, 1.7vw, 1.7rem)" }}>{item.proof}</div>
                <div style={{ fontFamily: SG, color: "rgba(255,250,234,0.6)", fontSize: "clamp(0.78rem, 0.9vw, 0.92rem)" }}>{item.sub}</div>
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
function ScienceSection({ c }: { c: HubContent["science"] }) {
  return (
    <section id="science" className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: LIME }}>
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <p className="uppercase mb-3" style={{ fontFamily: UDC, color: GREEN, opacity: 0.7, letterSpacing: "0.18em", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>
            {c.eyebrow}
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3vw, 3rem)", lineHeight: 1.05 }}>
            {c.heading}
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.78)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            {c.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {c.evidence.map((e) => (
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

        {c.guideLink && (
          <p className="mt-8 md:mt-10" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.05rem, 1.3vw, 1.35rem)" }}>
            {c.guideLink}
          </p>
        )}

        <p className="mt-5 leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.6)", fontSize: "clamp(0.8rem, 0.95vw, 1rem)" }}>
          {c.disclaimer}
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

function LabReceipts({ c }: { c: HubContent["labReceipts"] }) {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: ACCENT }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 tracking-tight" style={{ fontFamily: UDC, color: GREEN, fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", lineHeight: 1.05 }}>
            {c.heading}
          </h2>
          <p className="mb-9 mx-auto leading-relaxed" style={{ fontFamily: SG, color: "rgba(27,66,41,0.8)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", maxWidth: "40rem" }}>
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
                <Beaker size={18} /> {r.variety}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// The Polyphenol Index: every brand that publishes, ranked by documented
// compounds, with ATTIMO's position. Rows arrive serialised from the
// collection; the page carries no number of its own.
function IndexSection({ c, data }: { c: HubContent["index"]; data?: HubIndexData }) {
  if (!data || !data.rows.length) return null;
  const fill = (s: string) =>
    s.replace("{rank}", String(data.attimoRank ?? "—")).replace("{ranked}", String(data.rankedCount)).replace("{total}", String(data.totalCount)).replace("{verified}", data.verified);
  return (
    <section id="index" className="pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-24" style={{ backgroundColor: GREEN }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4" style={{ fontFamily: UDC, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "1.02rem", fontWeight: 700 }}>
            {c.eyebrow}
          </p>
          <h2 className="mb-5 tracking-tight" style={{ fontFamily: UDC, color: CREAM, fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.025em" }}>
            {c.heading}
          </h2>
          <p className="mb-10 leading-relaxed" style={{ fontFamily: SG, color: "rgba(255,250,234,0.82)", fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)" }}>
            {fill(c.intro)}
          </p>

          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: CREAM }}>
            <table className="w-full border-collapse" style={{ fontFamily: SG, fontSize: "0.95rem", color: GREEN }}>
              <thead>
                <tr style={{ backgroundColor: "#10221B", color: CREAM }}>
                  {["#", c.colBrand, c.colCompounds, c.colTotal].map((h, i) => (
                    <th key={h} className={`p-3 md:p-4 ${i === 0 ? "w-12" : ""} ${i === 3 ? "hidden sm:table-cell" : ""} text-left`} style={{ fontFamily: UDC, fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.04em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r) => (
                  <tr key={r.rank} style={{ borderTop: "1px solid rgba(27,66,41,0.12)", backgroundColor: r.mine ? "rgba(205,219,45,0.22)" : undefined }}>
                    <td className="p-3 md:p-4" style={{ fontFamily: UDC, color: "rgba(27,66,41,0.55)" }}>{String(r.rank).padStart(2, "0")}</td>
                    <td className="p-3 md:p-4">
                      <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.02rem" }}>{r.brand}</span>
                      <span style={{ color: "rgba(27,66,41,0.7)" }}> · {r.oil}</span>
                      <span className="block" style={{ fontSize: "0.82rem", color: "rgba(27,66,41,0.6)" }}>{r.origin}</span>
                    </td>
                    <td className="p-3 md:p-4" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.15rem", whiteSpace: "nowrap" }}>{r.compounds}<span style={{ fontFamily: SG, fontWeight: 400, fontSize: "0.78rem", color: "rgba(27,66,41,0.6)" }}> mg/kg</span></td>
                    <td className="p-3 md:p-4 hidden sm:table-cell" style={{ whiteSpace: "nowrap", color: "rgba(27,66,41,0.75)" }}>{r.total} · {r.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p style={{ fontFamily: UDC, color: ACCENT, fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{fill(c.position)}</p>
              <p className="mt-1" style={{ fontFamily: SG, color: "rgba(255,250,234,0.6)", fontSize: "0.88rem" }}>{fill(c.note)}</p>
            </div>
            <a
              href={data.href}
              className="inline-flex items-center justify-center px-7 py-4 rounded-lg transition-transform duration-300 hover:scale-105"
              style={{ fontFamily: UDC, backgroundColor: ACCENT, color: GREEN, fontSize: "clamp(1rem, 1.2vw, 1.2rem)", letterSpacing: "0.03em", fontWeight: 700, whiteSpace: "nowrap" }}>
              {c.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighPolyphenolInner({ initialPosts, locale, indexData, labNumbers }: { initialPosts?: InitialPost[]; locale: Locale; indexData?: HubIndexData; labNumbers?: HomeLabOil[] }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const content = HUB_CONTENT[locale.lang];
  // Per-oil polyphenol line on the product cards, from the certificates
  // collection (via labNumbers), same as the homepage.
  const polyBadges = labNumbers?.length
    ? Object.fromEntries(labNumbers.filter((o) => o.total !== null).map((o) => [o.key, String(o.total)]))
    : undefined;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CREAM }}>
      <Header
        onWaitlistClick={() => setIsWaitlistOpen(true)}
        locale={locale}
        pageNav={[
          { label: content.nav.shop, href: "#the-range" },
          { label: content.nav.compounds, href: "#compounds" },
          { label: content.nav.science, href: "#science" },
          { label: content.nav.lab, href: "#lab" },
          { label: content.nav.index, href: "#index" },
          { label: content.nav.how, href: "#how" },
        ]}
      />

      {/* 1 — HERO */}
      <Hero hero={content.hero} />

      {/* 2 — THE RANGE, RANKED BY POLYPHENOLS */}
      <OilProductWidgets
        locale={locale}
        sectionId="the-range"
        headingFontFamily={UDC}
        heading={content.range.heading}
        subtitle={content.range.subtitle}
        polyphenols={polyBadges}
        showTagline={false}
        quizPrompt={content.range.quizPrompt}
      />

      {/* 3 — HOW MANY POLYPHENOLS SHOULD OLIVE OIL HAVE? (the threshold scale) */}
      <PolyphenolComparison
        locale={locale}
        heading={content.scale.heading}
        intro={content.scale.intro}
        cards={content.scale.cards}
        citation={content.scale.citation}
      />

      {/* 4 — WHY MOST OLIVE OIL ISN'T HIGH-POLYPHENOL (the problem) */}
      <IndustryProblem
        locale={locale}
        heading={content.problem.heading}
        intro={content.problem.intro}
        args={content.problem.args}
        footnote={content.problem.footnote}
      />

      {/* 5 — THE COMPOUNDS THAT MATTER */}
      <CompoundsSection c={content.compounds} />

      {/* 5b — WHAT THE SCIENCE SAYS (sourced benefits, informational intent) */}
      <ScienceSection c={content.science} />

      {/* 6 — LAB-TESTED PROOF: comparison table + the actual reports */}
      <div id="lab">
        <OilComparison locale={locale} />
        <LabReceipts c={content.labReceipts} />
      </div>

      {/* 6b — THE POLYPHENOL INDEX: every brand that publishes, and where we sit */}
      <IndexSection c={content.index} data={indexData} />

      {/* 7 — HIGH-POLYPHENOL BY DESIGN (the causes) */}
      <div id="how">
      <KleiaWay
        locale={locale}
        heading={content.kleia.heading}
        intro={content.kleia.intro}
      />
      </div>

      {/* 8 — Reviews → FAQ → blog feed + newsletter → footer */}
      <Testimonials locale={locale} />
      <FAQ locale={locale} items={content.faq.items} heading={content.faq.heading} headingFontFamily={UDC} jsonLd={false} />
      <BlogSection initialPosts={initialPosts} locale={locale} heading={content.blogHeading} />
      <Footer locale={locale} />

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function HighPolyphenolPage({ initialPosts, locale = DEFAULT_LOCALE, indexData, labNumbers }: { initialPosts?: InitialPost[]; locale?: Locale; indexData?: HubIndexData; labNumbers?: HomeLabOil[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HighPolyphenolInner initialPosts={initialPosts} locale={locale} indexData={indexData} labNumbers={labNumbers} />
    </QueryClientProvider>
  );
}
