import { useEffect, useState } from "react";
import { ShieldCheck, Truck, Sprout, UtensilsCrossed, PackageOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import coratinaBottle from "@/assets/bottle-coratina-transparent.png?url";
import picualBottle from "@/assets/bottle-picual-transparent.png?url";
import nocellaraBottle from "@/assets/bottle-nocellara-transparent.png?url";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { OilComparison } from "@/components/OilComparison";
import { ProductOriginStory } from "@/components/product/ProductOriginStory";
import { YouMightAlsoLike } from "@/components/YouMightAlsoLike";
import { FirstOrderPopup } from "@/components/FirstOrderPopup";
import { useCartStore } from "@/stores/cartStore";
import type { BundleConfig } from "@/lib/bundleTypes";
import { toast } from "sonner";
import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import {
  detectCountry,
  getFreeShippingThreshold,
  freeShippingAvailable,
  readShippingTierCookie,
} from "@/lib/shipping";

const ACCENT = "#CDDB2D";

// Transparent bottle cut-outs (the site's own assets), keyed by oil handle.
const BOTTLE_IMG: Record<string, string> = {
  coratina: coratinaBottle,
  picual: picualBottle,
  nocellara: nocellaraBottle,
};

// Brand-value tiles for the reused ProductOriginStory grid. Four are constant
// across every bundle; the Single Variety copy varies (two vs three cultivars).
function brandValueFeatures(singleVarietyText: string) {
  return [
    { title: "Early Harvest", description: "Picked early, when the olives are highest in the polyphenols that drive both flavour and health benefits.", icon: "/icons/basket-2.svg" },
    { title: "Single Variety", description: singleVarietyText, icon: "/icons/branch-2.svg" },
    { title: "Cold Pressed", description: "Pressed within hours of harvest at low temperatures, to keep every drop of flavour and nutrition intact.", icon: "/icons/olive.svg" },
    { title: "Lab-Tested", description: "Every batch independently tested on the markers that matter: polyphenols, acidity, freshness. Verify the quality for yourself.", icon: "/icons/flask.svg" },
    { title: "Always Fresh", description: "Olive oil only from the latest harvest, because unlike wine it doesn't get better with age.", icon: "/icons/amphora-2.svg" },
  ];
}

interface Props {
  cfg: BundleConfig;
  locale?: Locale;
}

export default function BundleProductPage({ cfg, locale = DEFAULT_LOCALE }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  const singlesTotal = cfg.singlesTotal(locale);
  const price = (locale.prices[cfg.priceKey] as number) ?? cfg.singlesTotal(locale);
  const saving = singlesTotal - price;

  const [freeShippingThreshold, setFreeShippingThreshold] = useState<number>(
    () => getFreeShippingThreshold(null),
  );
  useEffect(() => {
    detectCountry().then(({ countryCode }) => {
      const cookieTier = readShippingTierCookie();
      setFreeShippingThreshold(cookieTier ?? getFreeShippingThreshold(countryCode));
    });
  }, []);

  const handleAddToCart = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "add_to_cart_custom" });
    (window as any).fbq?.("track", "AddToCart", {
      content_name: cfg.ogName,
      content_ids: [cfg.contentId],
      content_type: "product",
      value: price,
      currency: locale.currency.code,
    });

    addItem({
      product: cfg.buildProduct(locale),
      variantId: cfg.variantId,
      variantTitle: cfg.variantTitle,
      price: { amount: String(price), currencyCode: locale.currency.code },
      quantity: 1,
      selectedOptions: [],
      isSubscription: false,
    });
    toast.success(cfg.toastName, { position: "top-center" });
  };

  const shipsFree = freeShippingAvailable(freeShippingThreshold);
  const originStory = {
    headline: cfg.originHeadline,
    quickRef: [] as Array<{ label: string; value: string }>,
    features: brandValueFeatures(cfg.singleVarietyText),
  };

  return (
    <div className="relative min-h-screen flex flex-col" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => {}} forceTransparent darkNav locale={locale} />

      {/* HERO */}
      <section className="product-hero lg:pt-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-start">
          <div className="lg:sticky lg:top-0 lg:self-start">
            <div className="w-full h-[50vh] md:h-auto md:max-h-[75vh] md:aspect-[3/4] lg:max-h-none lg:aspect-auto lg:h-screen relative overflow-hidden">
              <img src={cfg.image} alt={cfg.imageAlt} className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Right: buy box */}
          <div className="px-6 md:px-10 lg:px-12 pt-8 md:pt-6 lg:pt-[4.55rem] pb-8 md:pb-12 space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <span
                className="inline-block px-5 py-2 rounded-full bg-olive-dark font-bold uppercase tracking-wider"
                style={{ color: ACCENT, fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.75rem, 0.85vw, 0.85rem)" }}
              >
                {cfg.badge}
              </span>

              <h1
                className="text-olive-dark leading-[1.1]"
                style={{ fontFamily: "UDC Working Man Sans, sans-serif", fontSize: "clamp(1.67rem, 3.23vw, 3.23rem)", fontWeight: 400 }}
              >
                {cfg.cardTitleLines
                  ? cfg.cardTitleLines.map((line, i) => <span key={i} className="block">{line}</span>)
                  : cfg.title}
              </h1>
            </div>

            <p
              className="text-olive-medium !-mt-0.5 md:!-mt-1"
              style={{ fontFamily: "Beverly Drive, cursive", fontWeight: "bold", fontSize: "clamp(0.91rem, 2.11vw, 2.11rem)", textDecoration: "underline", textDecorationStyle: "dashed", textDecorationColor: "rgba(78, 91, 43, 0.4)", textUnderlineOffset: "8px" }}
            >
              {cfg.subtitle}
            </p>

            <p
              className="text-olive-medium leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.05vw, 1.063rem)", maxWidth: "38.93rem" }}
            >
              {cfg.description}
            </p>

            {/* In the box */}
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(27, 66, 41, 0.05)" }}>
              <p className="text-olive-dark uppercase tracking-widest mb-4" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.72rem, 0.85vw, 0.85rem)", fontWeight: 600 }}>
                In the box
              </p>
              <ul className="divide-y" style={{ borderColor: "rgba(27, 66, 41, 0.1)" }}>
                {cfg.contents.map((v) => (
                  <li key={v.handle} className="flex gap-5 py-5 first:pt-0 last:pb-0 items-center" style={{ borderColor: "rgba(27, 66, 41, 0.1)" }}>
                    <img src={BOTTLE_IMG[v.handle]} alt={v.name} className="w-28 md:w-32 h-32 md:h-36 flex-shrink-0 object-contain self-center" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-olive-dark font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}>{v.name}</span>
                        <span className="rounded px-1.5 py-0.5 uppercase tracking-wide" style={{ backgroundColor: v.bg, color: v.accent, fontFamily: "Space Grotesk, sans-serif", fontSize: "0.68rem", fontWeight: 600 }}>{v.flavour}</span>
                      </div>
                      <p className="text-olive-dark mt-1.5" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.85rem, 0.98vw, 0.98rem)", lineHeight: 1.5 }}>
                        {v.desc}
                      </p>
                      <p className="text-olive-medium mt-1.5" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.78rem, 0.9vw, 0.88rem)" }}>
                        {v.volume} · {v.origin} · {v.polyphenols} polyphenols
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-olive-dark font-bold" style={{ fontFamily: "UDC Working Man Sans, sans-serif", fontSize: "clamp(1.8rem, 2.6vw, 2.6rem)" }}>
                {formatPrice(price, locale)}
              </span>
              <span className="text-olive-light line-through" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.3rem)" }}>
                {formatPrice(singlesTotal, locale)}
              </span>
              {saving > 0 && (
                <span className="font-bold uppercase tracking-wide rounded-md px-2.5 py-1" style={{ backgroundColor: "#1B4229", color: "#FFFAEA", fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.7rem, 0.8vw, 0.8rem)" }}>
                  Save {formatPrice(saving, locale)}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full text-olive-dark font-bold px-4 md:px-6 py-3 h-auto transition-all duration-300 hover:scale-[1.02] text-center"
              style={{ fontFamily: "UDC Working Man Sans, sans-serif", backgroundColor: ACCENT, fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", borderRadius: "0.75rem" }}
            >
              <span className="flex flex-col items-center gap-0.5">
                <span className="text-lg">Add to cart · {formatPrice(price, locale)}</span>
                {shipsFree && <span className="font-normal text-xs">FREE SHIPPING ✓</span>}
              </span>
            </button>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <p className="text-olive-medium flex items-center gap-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.05vw, 1.063rem)" }}>
                <ShieldCheck size={20} strokeWidth={1.5} />
                Third-party lab-tested
              </p>
              <p className="text-olive-medium flex items-center gap-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.05vw, 1.063rem)" }}>
                <Truck size={20} strokeWidth={1.5} />
                Order today, ships tomorrow
              </p>
            </div>

            {/* Accordion — reuses the single-PDP tab styling (ui/accordion). */}
            <div className="pt-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="inside" className="border-olive-light/30">
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.95rem, 1.1vw, 1.2rem)" }}>
                      <PackageOpen size={20} className="text-olive-dark" />
                      What's inside
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}>
                      <p>{cfg.whatsInside}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="harvest" className="border-olive-light/30">
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.95rem, 1.1vw, 1.2rem)" }}>
                      <Sprout size={20} className="text-olive-dark" />
                      Harvest details
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}>
                      <p>Every bottle is from the latest harvest, pressed early in October and sold fresh. We only ever ship the current season. Once it runs out, it's gone until next year.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uses" className="border-olive-light/30">
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.95rem, 1.1vw, 1.2rem)" }}>
                      <UtensilsCrossed size={20} className="text-olive-dark" />
                      Best uses
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}>
                      <p>{cfg.bestUses}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping" className="border-olive-light/30">
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.95rem, 1.1vw, 1.2rem)" }}>
                      <Truck size={20} className="text-olive-dark" />
                      Shipping & delivery
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}>
                      <p>Free shipping from two bottles, so this bundle always ships free. Order today and it's on its way tomorrow.</p>
                      <p className="mt-3">
                        <a href="/shipping" className="underline hover:no-underline text-olive-dark font-medium">Shipping &amp; delivery details</a>
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Brand values — reused single-PDP tiles+videos grid (dark Coratina tiles). */}
      <ProductOriginStory content={originStory} tileBackground="#10221B" tileAccent="#B3E58C" />

      {/* Structure: origin-story grid → testimonials → ATTIMO vs others → FAQ. */}
      <Testimonials headingColor={ACCENT} locale={locale} />
      <OilComparison polyphenolDisplay={cfg.polyphenolDisplay} locale={locale} />
      <FAQ locale={locale} heading="Frequently asked" />
      <YouMightAlsoLike currentHandle={cfg.ymalHandle} accentColor={ACCENT} locale={locale} />

      <Footer locale={locale} />
      <FirstOrderPopup locale={locale} />
    </div>
  );
}
