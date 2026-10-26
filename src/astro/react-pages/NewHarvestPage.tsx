import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { HarvestSignup } from "@/components/HarvestSignup";
import { Timeline, Panels } from "@/components/NextHarvest";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { DEFAULT_LOCALE, localizeHref, formatPrice, type Locale } from "@/lib/i18n/config";
import type { HomeLabOil } from "@/lib/certificates/homeNumbers";
import { getDict } from "@/lib/i18n/dictionaries";
import { HARVEST_STATUS } from "@/lib/harvestStatus";
import { METHODS_SLUGS } from "@/lib/polyphenolMethodsContent";
import { NH_CONTENT } from "@/lib/newHarvestContent";
import { useHarvestSection, FONTS, C } from "@/components/harvest/useHarvestSection";

// Full page for the next harvest (/new-harvest). The homepage "next harvest"
// section is the extract of this page: same timeline, same bottle panels, same
// signup. This page adds what each step means, last season's lab numbers next
// to this season's, the freshness argument and an FAQ written to be quoted.
//
// Everything that moves (current step, new lab values, last update) lives in
// harvestStatus.ts, so one edit updates the homepage and this page together.

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } } });

const { UDC, SG } = FONTS;
const { CREAM, GREEN, DEEP, CHARTREUSE } = C;
const gr = (a: number) => `rgba(27,66,41,${a})`;
const cr = (a: number) => `rgba(255,250,234,${a})`;

const eyebrow = { fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.05rem)", letterSpacing: ".15em", textTransform: "uppercase" } as const;
const h2 = { fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2.1rem, 3.5vw, 3.6rem)", lineHeight: 1.02, letterSpacing: "-.025em" } as const;
const lead = { fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.3rem)", lineHeight: 1.6 } as const;

// Last season's values, as printed on the certificates
// (src/content/certificates/*-2526-*.yaml).
const LAST_SEASON: Record<"coratina" | "peranzana" | "picual", { value: number | null; method: string | null }> = {
  coratina: { value: 847, method: "HPLC" },
  peranzana: { value: null, method: null },
  picual: { value: 675, method: "Folin-Ciocalteu" },
};

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "inline-block", marginLeft: ".35em", verticalAlign: "-.05em" }}>
    <path d="M3 9 L9 3" /><path d="M4 3 H9 V8" />
  </svg>
);

function NewHarvestInner({ locale, labNumbers }: { locale: Locale; labNumbers?: HomeLabOil[] }) {
  const c = NH_CONTENT[locale.lang] ?? NH_CONTENT.en;
  const t = getDict(locale);
  const { oils, steps } = useHarvestSection(locale);
  const current = HARVEST_STATUS.currentStep;
  const updated = new Intl.DateTimeFormat(locale.lang === "en" ? "en-GB" : locale.hreflang, { day: "numeric", month: "long", year: "numeric" }).format(new Date(HARVEST_STATUS.updated + "T12:00:00Z"));
  const methodsHref = METHODS_SLUGS[locale.lang as keyof typeof METHODS_SLUGS] ?? METHODS_SLUGS.en;
  const certHref = localizeHref("/certificates", locale);
  const saleHref = "#last-season-sale";
  // "While you wait": the homepage's Last Season Sale block, same props.
  const saleSubtitle = t.oilCollection.lastHarvestSubtitle
    .replace("{sale}", formatPrice(locale.prices.nocellaraSale ?? locale.prices.nocellara, locale))
    .replace("{price}", formatPrice(locale.prices.nocellara, locale));
  const polyBadges = labNumbers?.length
    ? Object.fromEntries(labNumbers.filter((o) => o.total !== null).map((o) => [o.key, String(o.total)]))
    : undefined;
  // FAQ answers with an inline link keep a plain-text copy for the JSON-LD.
  const faqItems = c.faq.items.map((f) => {
    if (!f.link || !f.answer.includes(f.link.text)) return { question: f.question, answer: f.answer };
    const [pre, post] = f.answer.split(f.link.text);
    return {
      question: f.question,
      answer: null,
      jsonText: f.answer,
      answerElement: (
        <>
          {pre}
          <a href={localizeHref(f.link.href, locale)} className="underline hover:no-underline" style={{ color: GREEN }}>{f.link.text}</a>
          {post}
        </>
      ),
    };
  });

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CREAM }}>
      <Header
        locale={locale}
        pageNavLayout="leading"
        pageNav={[
          { label: c.nav.status, href: "#status" },
          { label: c.nav.oils, href: "#oils" },
          { label: c.nav.freshness, href: "#freshness" },
          { label: c.nav.faq, href: "#faq" },
        ]}
      />

      {/* ═══ HERO: harvest footage, header, lead, signup, status chip ═══ */}
      <section className="relative flex items-center overflow-hidden" style={{ backgroundColor: DEEP, minHeight: "100vh" }}>
        <AutoplayVideo
          src="/videos/harvest-2024-1.mp4"
          poster="/images/hero-poster.png"
          className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,30,20,.7) 0%, rgba(13,30,20,.5) 45%, rgba(13,30,20,.78) 100%)" }} />
        <div className="relative z-10 w-full container mx-auto px-6 pt-36 md:pt-44 pb-20 text-center">
          <p className="mb-5" style={{ ...eyebrow, color: CHARTREUSE }}>{c.hero.eyebrow}</p>
          <h1 className="mx-auto mb-6" style={{ fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2.4rem, 4.8vw, 4.8rem)", lineHeight: 1.0, letterSpacing: "-.02em", color: CREAM, maxWidth: "14em", textWrap: "balance", textShadow: "0 2px 22px rgba(0,0,0,.35)" } as React.CSSProperties}>
            {c.hero.h1}
          </h1>
          <p className="mx-auto mb-10" style={{ fontFamily: SG, fontWeight: 400, fontSize: "clamp(1.08rem, 1.35vw, 1.35rem)", lineHeight: 1.5, color: CREAM, maxWidth: "34em", textWrap: "balance", textShadow: "0 1px 14px rgba(0,0,0,.45)" } as React.CSSProperties}>
            {c.hero.lead}
          </p>
          <div className="mb-10">
            <HarvestSignup locale={locale} line={null} maxWidth={740} />
          </div>
          {/* Living status chip, as on the Polyphenol Index. */}
          <a href="#status" className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full px-5 py-3" style={{ backgroundColor: "rgba(16,34,27,.55)", border: `1px solid ${cr(0.28)}`, backdropFilter: "blur(8px)" }}>
            <span className="inline-flex items-center gap-2.5">
              <span className="relative inline-flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: CHARTREUSE, animationDuration: "2.4s" }} />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CHARTREUSE }} />
              </span>
              <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".82rem", letterSpacing: ".12em", textTransform: "uppercase", color: CHARTREUSE }}>{c.hero.now}</span>
            </span>
            <span style={{ fontFamily: SG, fontSize: ".95rem", color: cr(0.92) }}>{steps[current].label}, {steps[current].when}</span>
            <span className="hidden sm:inline w-px h-4" style={{ backgroundColor: cr(0.3) }} />
            <span style={{ fontFamily: SG, fontSize: ".95rem", color: cr(0.7) }}>{c.hero.updated.replace("{date}", updated)}</span>
          </a>
        </div>
      </section>

      {/* ═══ STATUS: the homepage timeline, then what each step means ═══ */}
      <section id="status" className="scroll-mt-24 px-4 md:px-6 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto" style={{ maxWidth: 1190 }}>
          <div className="text-center mb-12">
            <p className="mb-4" style={{ ...eyebrow, color: gr(0.55) }}>{c.status.eyebrow}</p>
            <h2 style={{ ...h2, color: GREEN }}>{c.status.h2}</h2>
          </div>
          <Timeline locale={locale} />
          <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-center">
          {/* Harvest footage: olives and leaves tipped into the bin at the grove. */}
          <div className="relative overflow-hidden rounded-2xl mx-auto w-full" style={{ aspectRatio: "4 / 5", maxWidth: 520, backgroundColor: DEEP }}>
            <AutoplayVideo
              src="/videos/kleia-way-video-2.mp4"
              poster="/images/hero-poster.png"
              className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
            />
          </div>
          <ol style={{ borderTop: `1px solid ${gr(0.18)}` }}>
            {steps.map((s, i) => {
              const state = i < current ? c.status.states.done : i === current ? c.status.states.now : c.status.states.next;
              const now = i === current;
              return (
                <li key={s.label} className="grid grid-cols-1 gap-2 py-6" style={{ borderBottom: `1px solid ${gr(0.18)}` }}>
                  <div>
                    <p className="mb-1 inline-flex items-center gap-3">
                      <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.15rem", letterSpacing: ".08em", textTransform: "uppercase", color: GREEN }}>{s.label}</span>
                      <span className="rounded-full px-2.5 py-0.5" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", backgroundColor: now ? CHARTREUSE : "transparent", color: now ? GREEN : gr(0.55), border: `1px solid ${now ? CHARTREUSE : gr(0.3)}` }}>{state}</span>
                    </p>
                    <p style={{ fontFamily: SG, fontSize: "1.05rem", color: gr(0.62) }}>{s.when}</p>
                  </div>
                  <p style={{ fontFamily: SG, fontSize: "1.15rem", lineHeight: 1.6, color: gr(0.85) }}>{c.status.details[i]}</p>
                </li>
              );
            })}
          </ol>
          </div>
        </div>
      </section>

      {/* ═══ OILS: the homepage panels, then last season against this one ═══ */}
      <section id="oils" className="scroll-mt-24" style={{ backgroundColor: CREAM }}>
        <div className="px-4 md:px-6 pt-4 md:pt-8 pb-12 md:pb-16 mx-auto text-center" style={{ maxWidth: 1200 }}>
          <p className="mb-4" style={{ ...eyebrow, color: gr(0.55) }}>{c.oils.eyebrow}</p>
          <h2 className="mb-5" style={{ ...h2, color: GREEN }}>{c.oils.h2}</h2>
          <p style={{ ...lead, color: gr(0.78) }}>{c.oils.lead}</p>
        </div>
        <Panels locale={locale} />
        <div className="px-4 md:px-6 py-14 md:py-20 mx-auto" style={{ maxWidth: 1190 }}>
          <h3 className="mb-6" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.35rem", letterSpacing: "-.01em", color: GREEN }}>{c.oils.table.caption}</h3>
          <div className="overflow-x-auto rounded-2xl" style={{ border: `1px solid ${gr(0.18)}`, backgroundColor: "#FFFFFF" }}>
            <table className="w-full text-left" style={{ minWidth: 720, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: GREEN }}>
                  {Object.values(c.oils.table.cols).map((h) => (
                    <th key={h} scope="col" className="px-5 py-4" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".82rem", letterSpacing: ".12em", textTransform: "uppercase", color: CREAM }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {oils.map((o) => {
                  const last = LAST_SEASON[o.key];
                  return (
                    <tr key={o.key} style={{ borderTop: `1px solid ${gr(0.12)}` }}>
                      <th scope="row" className="px-5 py-4" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.1rem", color: GREEN }}>{o.name}</th>
                      <td className="px-5 py-4" style={{ fontFamily: SG, fontSize: "1.02rem", color: gr(0.85) }}>{o.origin}</td>
                      <td className="px-5 py-4" style={{ fontFamily: SG, fontSize: "1.02rem", color: gr(0.85) }}>{o.flavour}</td>
                      <td className="px-5 py-4" style={{ fontFamily: SG, fontSize: "1.02rem", color: gr(0.85) }}>{last.value != null ? `${last.value} mg/kg` : c.oils.table.newOil}</td>
                      <td className="px-5 py-4" style={{ fontFamily: SG, fontSize: "1.02rem", color: gr(0.85) }}>{last.method ?? "—"}</td>
                      <td className="px-5 py-4" style={{ fontFamily: SG, fontSize: "1.02rem", color: o.polyphenols != null ? GREEN : gr(0.6), fontStyle: o.polyphenols != null ? "normal" : "italic", fontWeight: o.polyphenols != null ? 600 : 400 }}>
                        {o.polyphenols != null ? `${o.polyphenols} mg/kg` : t.upcoming.polyPending}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-5" style={{ fontFamily: SG, fontSize: "1rem", lineHeight: 1.6, color: gr(0.7) }}>{c.oils.table.note}</p>
          <p className="mt-4 flex flex-wrap gap-x-8 gap-y-2" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".95rem", letterSpacing: ".06em", color: GREEN }}>
            <a href={certHref} className="hover:opacity-70 transition-opacity">{c.oils.table.certificates}<Arrow /></a>
            <a href={methodsHref} className="hover:opacity-70 transition-opacity">{c.oils.table.methods}<Arrow /></a>
          </p>
        </div>
      </section>

      {/* ═══ FRESHNESS: why the latest harvest only ═══ */}
      <section id="freshness" className="scroll-mt-24 px-6 py-16 md:py-24" style={{ backgroundColor: DEEP }}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mx-auto" style={{ maxWidth: 1100 }}>
          <div>
            <p className="mb-4" style={{ ...eyebrow, color: CHARTREUSE }}>{c.freshness.eyebrow}</p>
            <h2 className="mb-6" style={{ ...h2, color: CREAM }}>{c.freshness.h2}</h2>
            <p className="mb-5" style={{ ...lead, color: cr(0.82) }}>{c.freshness.body1}</p>
            <p className="mb-7" style={{ ...lead, color: CREAM }}>{c.freshness.body2}</p>
            <a href={saleHref} className="hover:opacity-80 transition-opacity" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1rem", letterSpacing: ".08em", textTransform: "uppercase", color: CHARTREUSE }}>
              {c.freshness.saleLink}<Arrow />
            </a>
          </div>
          <div className="rounded-2xl p-6 md:p-7" style={{ backgroundColor: cr(0.04), border: `1px solid ${cr(0.12)}` }}>
            <p className="mb-4" style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".85rem", letterSpacing: ".14em", textTransform: "uppercase", color: cr(0.7) }}>{c.freshness.chart.title}</p>
            <svg viewBox="0 0 420 220" className="w-full h-auto" role="img" aria-label={c.freshness.chart.title}>
              <defs>
                <linearGradient id="nhdecay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B3E58C" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#B3E58C" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M30,42 C120,62 230,92 400,124 L400,198 L30,198 Z" fill="url(#nhdecay)" />
              <path d="M30,42 C120,62 230,92 400,124" fill="none" stroke="#B3E58C" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="198" x2="400" y2="198" stroke="#FFFAEA" strokeOpacity="0.25" strokeWidth="1" />
              <circle cx="30" cy="42" r="5" fill="#CDDB2D" />
              <text x="42" y="35" fill="#CDDB2D" fontFamily={UDC} fontSize="12">{c.freshness.chart.fresh}</text>
              <text x="30" y="214" fill="#FFFAEA" fillOpacity="0.5" fontFamily={SG} fontSize="11">{c.freshness.chart.pressed}</text>
              <text x="400" y="214" fill="#FFFAEA" fillOpacity="0.5" fontFamily={SG} fontSize="11" textAnchor="end">{c.freshness.chart.oneYear}</text>
            </svg>
            <p className="mt-4" style={{ fontFamily: SG, fontSize: ".88rem", lineHeight: 1.5, color: cr(0.5) }}>{c.freshness.chart.caption}</p>
          </div>
        </div>
      </section>

      {/* ═══ WHILE YOU WAIT: the homepage's Last Season Sale ═══ */}
      <OilProductWidgets
        locale={locale}
        sectionId="last-season-sale"
        polyphenols={polyBadges}
        eyebrow={c.wait.eyebrow}
        heading={t.oilCollection.lastHarvestHeading}
        headingFontFamily="UDC Working Man Sans, sans-serif"
        subtitle={saleSubtitle}
        wideSubtitle
        soldOutButton="soldOut"
      />

      {/* ═══ FAQ: JSON-LD is emitted by the Astro page, so off here ═══ */}
      <div id="faq" className="scroll-mt-24">
        <FAQ locale={locale} items={faqItems} heading={c.faq.heading} headingFontFamily={UDC} jsonLd={false} />
      </div>

      {/* ═══ CLOSING SIGNUP ═══ */}
      <section className="px-6 py-16 md:py-24 text-center" style={{ backgroundColor: GREEN }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <h2 className="mb-4" style={{ ...h2, color: CREAM }}>{c.closing.h2}</h2>
          <p className="mb-9" style={{ ...lead, color: cr(0.8) }}>{c.closing.lead}</p>
          <HarvestSignup locale={locale} line={null} maxWidth={740} />
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}

export default function NewHarvestPage({ locale = DEFAULT_LOCALE, labNumbers }: { locale?: Locale; labNumbers?: HomeLabOil[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NewHarvestInner locale={locale} labNumbers={labNumbers} />
    </QueryClientProvider>
  );
}
