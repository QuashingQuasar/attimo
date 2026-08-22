import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Truck, Package, ShieldCheck, Clock } from "lucide-react";
import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

// Tier shape is locale-independent (cost numbers, country keys, free-from
// bottle counts, highlight); names/delivery/country labels come from the dict.
const TIERS = [
  { key: "core" as const, countries: ["Belgium", "Germany", "Luxembourg", "Netherlands"], shippingCost: "€9", freeFromN: 2, highlight: true },
  { key: "tier1" as const, countries: ["Austria", "Bulgaria", "Croatia", "Czechia", "Denmark", "France", "Hungary", "Poland", "Slovakia", "Slovenia", "Sweden"], shippingCost: "€12", freeFromN: 2 },
  { key: "tier2" as const, countries: ["Estonia", "Ireland", "Italy", "Latvia", "Lithuania", "Spain"], shippingCost: "€19", freeFromN: 3 },
  { key: "tier3" as const, countries: ["Finland", "Greece", "Malta", "Portugal", "Romania"], shippingCost: "€22", freeFromN: 4 },
];

interface ShippingPageProps {
  locale?: Locale;
}

const ShippingPage = ({ locale = DEFAULT_LOCALE }: ShippingPageProps = {}) => {
  const t = getDict(locale).shippingPage;
  const countryLabels = t.countries as Record<string, string>;
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  useEffect(() => { document.title = t.title; return () => { document.title = `ATTIMO ${getDict(locale).product.titleSuffix}`; }; }, [t.title, locale]);

  const tiers = TIERS.map((tier) => ({
    ...tier,
    name: t.tierNames[tier.key],
    delivery: t.delivery[tier.key],
    freeFrom: t.freeFromBottles.replace("{n}", String(tier.freeFromN)),
  }));

  const isLocalized = locale.slug !== "";
  const localStandard = formatPrice(locale.shipping.standard, locale);
  const localFreeFrom = formatPrice(locale.shipping.freeThreshold, locale);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} forceScrolled locale={locale} />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              {t.heading}
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.7 }}
            >
              {t.intro}
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              { icon: Clock, label: t.factShipsTomorrow },
              { icon: Truck, label: t.factFreeMulti },
              { icon: Package, label: t.factPacked },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl px-5 py-4"
                style={{ backgroundColor: "#1B4229" }}
              >
                <Icon size={22} strokeWidth={1.5} style={{ color: "#B3E58C" }} />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFAEA" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Shipping tiers */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              {t.ratesHeading}
            </h2>

            {isLocalized ? (
              <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: "#1B4229", backgroundColor: "#1B4229" }}>
                <div className="p-5 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                        style={{ fontFamily: "Space Grotesk, sans-serif", backgroundColor: "#B3E58C", color: "#1B4229" }}
                      >
                        {locale.countryName}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className="text-sm"
                        style={{ fontFamily: "Space Grotesk, sans-serif", color: "rgba(255,250,234,0.7)" }}
                      >
                        {t.standardLabel} {localStandard}
                      </span>
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{ fontFamily: "Space Grotesk, sans-serif", backgroundColor: "#CDDB2D", color: "#1B4229" }}
                      >
                        {t.freeFromLabel} {localFreeFrom}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
            <div className="space-y-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-2xl border-2 overflow-hidden"
                  style={{
                    borderColor: tier.highlight ? "#1B4229" : "rgba(27,66,41,0.15)",
                    backgroundColor: tier.highlight ? "#1B4229" : "rgba(27,66,41,0.04)",
                  }}
                >
                  <div className="p-5 md:p-6">
                    {/* Top row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            backgroundColor: tier.highlight ? "#B3E58C" : "rgba(27,66,41,0.1)",
                            color: "#1B4229",
                          }}
                        >
                          {tier.name}
                        </span>
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            color: tier.highlight ? "#FFFAEA" : "#1B4229",
                            opacity: 0.7,
                          }}
                        >
                          {t.estLabel} {tier.delivery}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            color: tier.highlight ? "rgba(255,250,234,0.6)" : "rgba(27,66,41,0.5)",
                          }}
                        >
                          {t.standardLabel} {tier.shippingCost}
                        </span>
                        <span
                          className="text-sm font-bold px-3 py-1 rounded-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            backgroundColor: "#CDDB2D",
                            color: "#1B4229",
                          }}
                        >
                          {t.freeFromLabel} {tier.freeFrom}
                        </span>
                      </div>
                    </div>

                    {/* Countries */}
                    <div className="flex flex-wrap gap-2">
                      {tier.countries.map((country) => (
                        <span
                          key={country}
                          className="text-sm px-3 py-1 rounded-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            backgroundColor: tier.highlight
                              ? "rgba(179,229,140,0.15)"
                              : "rgba(27,66,41,0.06)",
                            color: tier.highlight ? "#B3E58C" : "#1B4229",
                          }}
                        >
                          {countryLabels[country] ?? country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}

            <p
              className="mt-4 text-sm italic"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.5 }}
            >
              {t.autoCalcNote}
            </p>
          </section>

          {/* Processing & delivery */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              {t.processingHeading}
            </h2>
            <div
              className="space-y-4 leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.8 }}
            >
              <p>
                {t.processingP1}
              </p>
              <p>
                {t.processingP2}
              </p>
            </div>
          </section>

          {/* Returns & damages */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229" }}
            >
              {t.returnsHeading}
            </h2>
            <div
              className="space-y-4 leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.8 }}
            >
              <p>
                {t.returnsP1}
              </p>
              <div
                className="rounded-xl p-5 flex items-start gap-3"
                style={{ backgroundColor: "rgba(27,66,41,0.06)" }}
              >
                <ShieldCheck size={22} strokeWidth={1.5} style={{ color: "#1B4229", flexShrink: 0, marginTop: 2 }} />
                <p className="text-sm" style={{ opacity: 1 }}>
                  <strong>{t.damagedStrong}</strong>{t.damagedPre}{" "}
                  <a
                    href="mailto:hello@attimo-oil.com"
                    className="underline font-medium"
                    style={{ color: "#1B4229" }}
                  >
                    hello@attimo-oil.com
                  </a>
                  {t.damagedPost}
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            className="rounded-2xl p-6 md:p-8 text-center"
            style={{ backgroundColor: "#1B4229" }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFAEA" }}
            >
              {t.contactHeading}
            </h3>
            <p
              className="text-sm mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#B3E58C" }}
            >
              {t.contactSub}
            </p>
            <a
              href="mailto:hello@attimo-oil.com"
              className="inline-block text-sm font-bold px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                backgroundColor: "#CDDB2D",
                color: "#1B4229",
              }}
            >
              hello@attimo-oil.com
            </a>
          </section>
        </div>
      </main>

      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default ShippingPage;
