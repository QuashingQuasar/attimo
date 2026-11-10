import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { CSSProperties } from "react";
import { IT, ES } from "country-flag-icons/react/3x2";
import { Header } from "@/components/Header";
import { HarvestSignup } from "@/components/HarvestSignup";
import { Timeline } from "@/components/NextHarvest";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { FONTS, C } from "@/components/harvest/useHarvestSection";
import { certIndexHrefFor } from "@/lib/certificatesContent";
import coratina from "@/assets/bottle-2627-coratina.png?url";
import peranzana from "@/assets/bottle-2627-peranzana.png?url";
import picual from "@/assets/bottle-2627-picual.png?url";

// DESIGN PROTOTYPE (noindex): the product page in the look of the homepage
// harvest section. Cream base; each oil owns a soft colour field and an ink;
// variety names in Beverly Drive; bottle cut-outs. Peranzana is not in Shopify
// yet, so price and lab figure stay pending and the call to action is the
// harvest signup. English only until the design is approved.

const { UDC, SG, BEVERLY } = FONTS;
const { CREAM, GREEN } = C;
const queryClient = new QueryClient();

// The three oils' colour fields and inks, as on the homepage harvest panels.
const OILS = {
  coratina: { name: "Coratina", band: "#BBC3B0", ink: "#10221B", img: coratina, ratio: 0.3489, origin: "Puglia", Flag: IT },
  peranzana: { name: "Peranzana", band: "#DACAC0", ink: "#5C2C3C", img: peranzana, ratio: 0.3611, origin: "Puglia", Flag: IT },
  picual: { name: "Picual", band: "#D1E4B1", ink: GREEN, img: picual, ratio: 0.3611, origin: "Andalusia", Flag: ES },
} as const;
const P = OILS.peranzana;
const ink = (a: number) => `rgba(92,44,60,${a})`;
const gr = (a: number) => `rgba(27,66,41,${a})`;

const eyebrow: CSSProperties = { fontFamily: UDC, fontWeight: 700, fontSize: "clamp(.9rem, 1.05vw, 1.02rem)", letterSpacing: ".15em", textTransform: "uppercase" };
const h2: CSSProperties = { fontFamily: UDC, fontWeight: 300, fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: 1.04, letterSpacing: "-.025em" };
const lead: CSSProperties = { fontFamily: SG, fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)", lineHeight: 1.6 };

// Hand-drawn "NEW" with a curled arrow, as on the harvest panels.
const NewNote = ({ color }: { color: string }) => (
  <div aria-hidden="true" className="absolute pointer-events-none flex flex-col" style={{ left: "100%", top: "3%", marginLeft: 8, color }}>
    <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)", letterSpacing: ".12em", lineHeight: 1, whiteSpace: "nowrap", transform: "rotate(-8deg)", textTransform: "uppercase" }}>New</span>
    <svg width="70" height="50" viewBox="0 0 64 46" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, marginLeft: -6 }}>
      <path d="M40 4 C 34 22, 22 32, 6 36" />
      <path d="M13.4 29.3 L 6 36 L 15.7 38.4" />
    </svg>
  </div>
);

const FACTS: [string, string][] = [
  ["Variety", "Peranzana, one variety only"],
  ["Origin", "Puglia, Italy"],
  ["Harvest", "October 2026, picked green"],
  ["Farming", "Organic"],
  ["Bottle", "500 ml, dark glass"],
];

const FAQ_ITEMS = [
  { question: "When can I order Peranzana?", answer: "Pre-orders open in mid-November, and the first bottles ship from late November. Leave your email and you hear first." },
  { question: "What does Peranzana taste like?", answer: "Light and very fruity. It is the gentle oil of the three, next to the bold Coratina and the green, grassy Picual." },
  { question: "How many polyphenols does Peranzana have?", answer: "The 26/27 lab analysis is under way. The figure goes on this page, with its certificate, as soon as the lab sends it." },
  { question: "Is Peranzana organic?", answer: "Yes. The olives are grown organically." },
  { question: "What happened to Nocellara?", answer: "Peranzana takes Nocellara's place as the gentle, fruity oil of the 26/27 harvest. The last Nocellara bottles from 25/26 are on sale while stock lasts." },
];

const Inner = ({ locale }: { locale: Locale }) => {
  const t = getDict(locale);
  const flavour = t.products.flavour;
  const lineup = [
    { ...OILS.coratina, taste: flavour.coratina, current: false },
    { ...OILS.peranzana, taste: flavour.nocellara, current: true },
    { ...OILS.picual, taste: flavour.picual, current: false },
  ];
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CREAM }}>
      <Header onWaitlistClick={() => {}} forceTransparent darkNav locale={locale} />

      {/* ═══ HERO: the bottle on its colour field, the oil's profile beside it ═══ */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0 lg:min-h-screen" style={{ backgroundColor: P.band }}>
          <div className="relative" style={{ ["--bh" as string]: "clamp(380px, 62vh, 660px)" } as CSSProperties}>
            <NewNote color={P.ink} />
            <img src={P.img} alt="ATTIMO Peranzana 26/27, 500 ml" style={{ height: "var(--bh)", width: `calc(var(--bh) * ${P.ratio})`, display: "block", filter: "drop-shadow(0 28px 30px rgba(16,34,27,.26))" }} />
          </div>
        </div>

        <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:pt-32 lg:pb-16">
          <div className="w-full">
            <p className="mb-5" style={{ ...eyebrow, color: gr(0.55) }}>Harvest 26/27 · New this season</p>
            <h1 className="mb-1" style={{ fontFamily: BEVERLY, fontWeight: 400, fontSize: "clamp(3.6rem, 6vw, 5.6rem)", lineHeight: 1, letterSpacing: ".01em", color: P.ink }}>
              Peranzana<span className="sr-only"> single-variety extra virgin olive oil</span>
            </h1>
            <p className="mb-5 inline-flex items-center gap-2.5" style={{ ...eyebrow, fontSize: ".95rem", color: P.ink, opacity: 0.75 }}>
              Puglia, Italy <IT aria-hidden="true" style={{ width: 22, height: 14, borderRadius: 2 }} />
            </p>
            <p className="mb-6" style={{ fontFamily: SG, fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)", color: P.ink }}>{flavour.nocellara}</p>
            <p className="mb-8" style={{ ...lead, color: gr(0.8) }}>
              Peranzana is an olive variety from northern Puglia. It gives a light, very fruity oil. New this harvest, it takes the gentle place Nocellara held last season.
            </p>

            <dl className="mb-8" style={{ fontFamily: SG }}>
              {FACTS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3" style={{ borderTop: `1px solid ${ink(0.18)}` }}>
                  <dt style={{ ...eyebrow, fontSize: ".72rem", letterSpacing: ".1em", color: ink(0.6), paddingTop: 2 }}>{k}</dt>
                  <dd style={{ fontSize: "1.02rem", color: GREEN }}>{v}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-3" style={{ borderTop: `1px solid ${ink(0.18)}`, borderBottom: `1px solid ${ink(0.18)}` }}>
                <dt style={{ ...eyebrow, fontSize: ".72rem", letterSpacing: ".1em", color: ink(0.6), paddingTop: 2 }}>Polyphenols</dt>
                <dd style={{ fontSize: "1.02rem", fontStyle: "italic", color: ink(0.8) }}>Awaiting the 26/27 lab results</dd>
              </div>
            </dl>

            <div className="rounded-2xl p-5 md:p-6" style={{ backgroundColor: "rgba(218,202,192,.45)" }}>
              <p className="mb-1" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.15rem", color: P.ink }}>Pre-orders open mid-November</p>
              <p className="mb-4" style={{ fontFamily: SG, fontSize: ".98rem", color: gr(0.75) }}>Leave your email and you hear first.</p>
              <HarvestSignup locale={locale} line={null} button="Get it fresh" tone="light" maxWidth={2000} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATUS: where this oil is now ═══ */}
      <section className="px-6 py-20 md:py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto" style={{ maxWidth: 1190 }}>
          <p className="mb-4 text-center" style={{ ...eyebrow, color: gr(0.55) }}>Where this oil is now</p>
          <h2 className="mb-12 text-center" style={{ ...h2, color: GREEN }}>Pressed in October, in the lab now</h2>
          <Timeline locale={locale} />
        </div>
      </section>

      {/* ═══ LINEUP: the gentle oil of the three ═══ */}
      <section style={{ backgroundColor: CREAM }}>
        <div className="px-6 pb-12 text-center mx-auto" style={{ maxWidth: 1190 }}>
          <p className="mb-4" style={{ ...eyebrow, color: gr(0.55) }}>The 26/27 oils</p>
          <h2 className="mb-5" style={{ ...h2, color: GREEN }}>The gentle oil of the three</h2>
          <p style={{ ...lead, color: gr(0.78) }}>Coratina and Picual return. Peranzana is new and takes the gentle, fruity place Nocellara held last season.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr_1fr]">
          {lineup.map((o) => (
            <div key={o.name} className="relative flex flex-col items-center justify-end px-6 pt-14 pb-12" style={{ backgroundColor: o.band, minHeight: o.current ? 560 : 500 }}>
              <img src={o.img} alt={`ATTIMO ${o.name} 26/27`} style={{ height: o.current ? 330 : 270, width: (o.current ? 330 : 270) * o.ratio, filter: "drop-shadow(0 18px 20px rgba(16,34,27,.22))" }} />
              <p className="mt-7" style={{ fontFamily: BEVERLY, fontSize: o.current ? "2.8rem" : "2.3rem", lineHeight: 1, color: o.ink }}>{o.name}</p>
              <p className="mt-2 inline-flex items-center gap-2" style={{ ...eyebrow, fontSize: ".8rem", color: o.ink, opacity: 0.7 }}>{o.origin} <o.Flag aria-hidden="true" style={{ width: 18, height: 12, borderRadius: 2 }} /></p>
              <p className="mt-3" style={{ fontFamily: SG, fontSize: "1.1rem", color: o.ink }}>{o.taste}</p>
              {o.current && <span className="mt-4 rounded-full px-3 py-1.5" style={{ ...eyebrow, fontSize: ".7rem", backgroundColor: o.ink, color: CREAM }}>This oil</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROOF: early harvest, a lab report per harvest, organic ═══ */}
      <section className="px-6 py-20 md:py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto" style={{ maxWidth: 1190 }}>
          <p className="mb-4" style={{ ...eyebrow, color: gr(0.55) }}>What you can check</p>
          <h2 className="mb-12" style={{ ...h2, color: GREEN }}>Picked green, pressed within hours, tested every harvest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { band: OILS.coratina.band, title: "Picked green in October", text: "The olives are picked while still green and pressed within hours. Green olives give less oil and more polyphenols." },
              { band: P.band, title: "A lab report for every harvest", text: "Each harvest is analysed by an accredited lab. The 26/27 report goes online as soon as the lab sends it.", href: certIndexHrefFor(locale.lang), cta: "See the lab reports" },
              { band: OILS.picual.band, title: "Organic", text: "The olives are grown organically, without synthetic pesticides or fertilisers." },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl p-7 md:p-8 flex flex-col" style={{ backgroundColor: x.band }}>
                <p className="mb-3" style={{ fontFamily: UDC, fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.2, color: GREEN }}>{x.title}</p>
                <p className="mb-5" style={{ fontFamily: SG, fontSize: "1.02rem", lineHeight: 1.6, color: gr(0.85) }}>{x.text}</p>
                {x.href && <a href={x.href} className="mt-auto underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ fontFamily: SG, fontWeight: 600, fontSize: ".95rem", color: GREEN }}>{x.cta} →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <div style={{ backgroundColor: CREAM }}>
        <FAQ locale={locale} items={FAQ_ITEMS} heading="Questions about Peranzana" headingFontFamily={UDC} jsonLd={false} />
      </div>

      {/* ═══ CLOSING: signup on the oil's colour field ═══ */}
      <section className="px-6 py-20 md:py-24 text-center" style={{ backgroundColor: P.band }}>
        <p className="mb-4" style={{ ...eyebrow, color: ink(0.65) }}>Harvest 26/27</p>
        <h2 className="mb-3" style={{ fontFamily: BEVERLY, fontSize: "clamp(2.8rem, 4.5vw, 4rem)", lineHeight: 1, color: P.ink }}>Peranzana</h2>
        <p className="mb-8" style={{ ...lead, color: ink(0.85) }}>Pre-orders open mid-November. Leave your email and you hear first.</p>
        <div className="mx-auto" style={{ maxWidth: 560 }}>
          <HarvestSignup locale={locale} line={null} button="Get it fresh" tone="light" maxWidth={560} />
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
};

const PeranzanaPdpPrototype = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => (
  <QueryClientProvider client={queryClient}>
    <Inner locale={locale} />
  </QueryClientProvider>
);
export default PeranzanaPdpPrototype;
