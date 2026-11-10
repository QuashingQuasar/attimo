// Design prototype (Nov 2026): a new Peranzana product page, built from the
// 26/27 label itself. The label's art (cherub on the donkey, the harvest seal,
// the panel icons) is cropped from the print file, never redrawn. Each section
// unfolds one panel of the label: the front, the tasting notes, "Good On
// Everything", the facts row, the lab box. Not indexed, not linked.
import { useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { useCartStore } from "@/stores/cartStore";
import { getVolumeDiscountPercent } from "@/components/QuantitySelector";
import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { HARVEST_STATUS } from "@/lib/harvestStatus";
import type { SellingPlan, ShopifyProduct } from "@/lib/shopify";
import bottleUrl from "@/assets/bottle-2627-peranzana.png?url";

// The label's own two colours, plus the site's cream and green.
const C = {
  plum: "#643C4C", // label background
  ink: "#4A2533", // deeper plum for text on blush
  peach: "#EDC28F", // label print
  blush: "#DACAC0",
  blushLight: "#E8DCD3",
  cream: "#FFFAEA",
  green: "#1B4229",
};
const ART = "/images/peranzana";
const PRICE = 21; // provisional until Peranzana is in Shopify
const SUB_PRICE = Math.round(PRICE * (22 / 24) * 100) / 100; // same ~8% as every PDP
const QTYS = [1, 2, 3, 4, 6, 8];

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } } });

// Label art used as a mask, so it takes any colour from CSS.
const Art = ({ name, color, className = "", style }: { name: string; color: string; className?: string; style?: React.CSSProperties }) => (
  <span
    aria-hidden="true"
    className={`block ${className}`}
    style={{
      backgroundColor: color,
      WebkitMaskImage: `url(${ART}/${name}.png)`,
      maskImage: `url(${ART}/${name}.png)`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style,
    }}
  />
);

// Tweens a number towards its target, for the price.
function useTween(target: number, ms = 420) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      const e = 1 - Math.pow(1 - p, 3);
      const x = a + (target - a) * e;
      setV(x);
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); from.current = target; };
  }, [target, ms]);
  return v;
}

const Eyebrow = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <p className="font-working-man font-bold uppercase" style={{ fontSize: 14, letterSpacing: "0.15em", color }}>{children}</p>
);

interface Props {
  product?: ShopifyProduct;
  sellingPlans?: SellingPlan[];
  locale?: Locale;
}

function Page({ product, sellingPlans = [], locale = DEFAULT_LOCALE }: Props) {
  const dict = getDict(locale);
  const addItem = useCartStore((s) => s.addItem);
  const [qty, setQty] = useState(1);
  const [mode, setMode] = useState<"one-time" | "subscribe">("one-time");
  const [planId, setPlanId] = useState<string | null>(sellingPlans[0]?.id ?? null);
  const [showBar, setShowBar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const buyRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const unit = mode === "subscribe" ? SUB_PRICE : PRICE;
  const discount = mode === "subscribe" ? 0 : getVolumeDiscountPercent(qty);
  const total = Math.round(unit * qty * (1 - discount) * 100) / 100;
  const fullTotal = PRICE * qty;
  const shownTotal = useTween(total);
  const fmt = (n: number) => formatPrice(Math.round(n * 100) / 100, locale);

  // Sticky bar on mobile once the main button has scrolled away.
  useEffect(() => {
    const el = buyRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShowBar(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Parallax: the bottle and the watermark drift at different speeds.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setScrollY(window.scrollY)); };
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);

  // Reveal-on-scroll for sections.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onHeroMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };

  const addToCart = () => {
    if (!product) return;
    const variant = product.node.variants.edges[0].node;
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: String(unit), currencyCode: locale.currency.code },
      quantity: qty,
      selectedOptions: variant.selectedOptions || [],
      isSubscription: mode === "subscribe",
      ...(mode === "subscribe" && planId ? { sellingPlanId: planId } : {}),
    });
    toast.success(qty > 1 ? `${qty} bottles of Peranzana in your cart` : "Peranzana is in your cart", { position: "top-center" });
  };

  const step = HARVEST_STATUS.currentStep;
  const steps = dict.upcoming?.steps ?? [];
  const reviews = dict.testimonials.reviews;
  const reviewMeta = ["Sandra V., Ghent", "Mario R., Freiburg", "Sofia M., Antwerp", "Elias N., Amsterdam", "David K., Antwerp", "Madis K., Tallinn", "Nicoleta A. P., Bucharest"];

  const faqs: FaqItem[] = useMemo(() => [
    { question: "What does Peranzana olive oil taste like?", answer: "Peranzana is a gentle olive with notes of ripe pear, fresh lettuce and toasted almond. Its oil has a silky texture and a round finish, with a mild bitterness and a light pepper at the back of the throat." },
    { question: "Where does Peranzana come from?", answer: "Peranzana is an olive variety native to the north of Puglia, around Foggia. ATTIMO Peranzana is bottled in Gualdo Tadino (PG), Italy." },
    { question: "Is ATTIMO Peranzana organic?", answer: "Yes. It is certified organic under the EU organic scheme, control body IT-BIO-023, Agricoltura Italia." },
    { question: "When are the lab results for the 26/27 harvest published?", answer: "When the lab report arrives, the values go on this page and on the certificates page. The QR code on the label links to the same report." },
    { question: "How should I store it?", answer: "Olive oil has three enemies: light, oxygen and heat. Keep the bottle closed, in a cupboard away from the stove, and finish it within a few months of opening." },
  ], []);

  const bottleShift = scrollY * -0.08;
  const artShift = scrollY * 0.12;

  return (
    <div className="pz min-h-screen" style={{ backgroundColor: C.blush }}>
      <Header onWaitlistClick={() => {}} forceTransparent darkNav locale={locale} />

      {/* 1. FRONT PANEL: the bottle as a still life, the buy box beside it */}
      <section ref={heroRef} onPointerMove={onHeroMove} className="relative overflow-hidden pz-grain" style={{ background: `radial-gradient(120% 90% at 30% 35%, ${C.blushLight} 0%, ${C.blush} 55%, #CDB9AD 100%)` }}>
        <div className="container mx-auto px-6 pt-20 md:pt-32 lg:pt-36 pb-14 lg:pb-24 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Still life */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[520px] lg:h-[680px]">
            <Art name="cherub" color={C.plum} className="absolute pz-cherub" style={{ inset: "2% -6% 8% -4%", opacity: 0.14, transform: `translate3d(${tilt.x * -14}px, ${artShift + tilt.y * -10}px, 0)` }} />
            <Art name="seal" color={C.plum} className="absolute pz-seal" style={{ width: "clamp(78px, 9vw, 120px)", height: "clamp(100px, 11.5vw, 154px)", right: "6%", top: "4%", opacity: 0.55 }} />
            {/* Surface */}
            <div className="absolute" style={{ left: "-12%", right: "-12%", top: "calc(87% - 6px)", bottom: "-8%", background: "linear-gradient(180deg, rgba(100,60,76,0.18) 0px, rgba(100,60,76,0.08) 2px, rgba(100,60,76,0.10) 35%, rgba(100,60,76,0) 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 22%, #000 78%, transparent 100%)", maskImage: "linear-gradient(90deg, transparent 0%, #000 22%, #000 78%, transparent 100%)" }} />
            {/* Bottle + contact shadow */}
            <div className="absolute left-1/2 bottom-[13%]" style={{ transform: `translate3d(calc(-50% + ${tilt.x * 10}px), ${bottleShift}px, 0)` }}>
              <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: -10, width: "150%", height: 34, background: "radial-gradient(50% 50% at 50% 50%, rgba(60,30,40,0.38) 0%, rgba(60,30,40,0.12) 55%, transparent 75%)", filter: "blur(2px)" }} />
              <img src={bottleUrl} alt="ATTIMO Peranzana d'Italia, 500 ml, harvest 26/27" className="relative block pz-bottle" style={{ height: "clamp(300px, 46vw, 560px)", width: "auto", filter: "drop-shadow(18px 10px 26px rgba(60,30,40,0.22))" }} />
              <span className="pz-note absolute font-beverly" style={{ left: "88%", top: "14%", color: C.plum, fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)", whiteSpace: "nowrap" }}>new</span>
            </div>
          </div>

          {/* Buy box */}
          <div className="lg:col-span-5 relative">
            <Eyebrow color={`${C.ink}B3`}>Harvest 26/27 · Organic · 500 ml</Eyebrow>
            <h1 className="font-beverly mt-3" style={{ color: C.plum, fontSize: "clamp(3.6rem, 7vw, 6.4rem)", lineHeight: 0.95, letterSpacing: "0.01em" }}>Peranzana d'Italia</h1>
            <p className="font-working-man font-bold uppercase mt-4" style={{ color: C.ink, fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", letterSpacing: "0.12em" }}>Organic extra virgin olive oil · Early harvest · Single variety</p>
            <p className="mt-5" style={{ color: `${C.ink}D9`, fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)", lineHeight: 1.55 }}>
              A gentle olive with notes of ripe pear, fresh lettuce and toasted almond. Silky, with a round finish.
            </p>

            {/* Purchase type */}
            <div className="mt-8 grid grid-cols-2 p-1 rounded-full" style={{ backgroundColor: "rgba(100,60,76,0.10)" }} role="radiogroup" aria-label="Purchase type">
              {(["one-time", "subscribe"] as const).map((m) => (
                <button key={m} role="radio" aria-checked={mode === m} onClick={() => setMode(m)} className="rounded-full py-2.5 font-working-man font-bold uppercase transition-colors" style={{ fontSize: 14, letterSpacing: "0.08em", backgroundColor: mode === m ? C.plum : "transparent", color: mode === m ? C.peach : C.ink }}>
                  {m === "one-time" ? `One time · ${fmt(PRICE)}` : `Subscribe · ${fmt(SUB_PRICE)}`}
                </button>
              ))}
            </div>
            {mode === "subscribe" && sellingPlans.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Delivery frequency">
                {sellingPlans.map((p) => (
                  <button key={p.id} role="radio" aria-checked={planId === p.id} onClick={() => setPlanId(p.id)} className="rounded-full px-4 py-1.5 text-sm transition-colors" style={{ border: `1.5px solid ${planId === p.id ? C.plum : "rgba(100,60,76,0.3)"}`, color: C.ink, backgroundColor: planId === p.id ? "rgba(100,60,76,0.08)" : "transparent" }}>{p.name}</button>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-working-man font-bold uppercase" style={{ fontSize: 14, letterSpacing: "0.15em", color: `${C.ink}B3` }}>Bottles</span>
                {mode === "one-time" && <span className="text-sm" style={{ color: `${C.ink}B3` }}>Less per bottle from 3</span>}
              </div>
              <div className="mt-2 grid grid-cols-6 gap-1.5">
                {QTYS.map((q) => {
                  const d = mode === "one-time" ? getVolumeDiscountPercent(q) : 0;
                  const on = q === qty;
                  return (
                    <button key={q} onClick={() => setQty(q)} aria-pressed={on} className="relative rounded-lg py-3 font-working-man font-bold transition-all" style={{ fontSize: 18, color: on ? C.peach : C.ink, backgroundColor: on ? C.plum : "rgba(255,250,234,0.55)", boxShadow: on ? "0 6px 16px rgba(100,60,76,0.25)" : "inset 0 0 0 1px rgba(100,60,76,0.18)" }}>
                      {q}
                      {d > 0 && <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 rounded-full px-1.5 font-sans font-semibold" style={{ fontSize: 10.5, lineHeight: "16px", backgroundColor: on ? C.peach : C.blush, color: C.plum }}>-{Math.round(d * 100)}%</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total + button */}
            <div ref={buyRef} className="mt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-working-man" style={{ color: C.plum, fontSize: "clamp(2.4rem, 3.4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{fmt(shownTotal)}</span>
                {total < fullTotal && <span className="line-through" style={{ color: `${C.ink}80`, fontSize: 18 }}>{fmt(fullTotal)}</span>}
              </div>
              <button onClick={addToCart} disabled={!product} className="pz-cta mt-3 w-full rounded-lg py-4 font-working-man font-bold uppercase disabled:opacity-50" style={{ backgroundColor: C.plum, color: C.peach, fontSize: 18, letterSpacing: "0.08em" }}>
                Add to cart
              </button>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm" style={{ color: `${C.ink}B3` }}>
                <span>Lab report online</span>
                <span>Certified organic</span>
                <span>Bottled in Gualdo Tadino, Italy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Label ribbon */}
      <div className="relative overflow-hidden py-4" style={{ backgroundColor: C.plum }}>
        <div className="pz-marquee flex w-max gap-10 whitespace-nowrap font-working-man font-bold uppercase" style={{ color: C.peach, fontSize: 17, letterSpacing: "0.16em" }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10 items-center" aria-hidden={k === 1}>
              {["Early harvest", "Single variety", "100% Peranzana", "Organic", "Harvest 26/27", "Pressed within hours", "500 ml"].map((w) => (
                <span key={w} className="flex items-center gap-10">{w}<Art name="olive" color={C.peach} className="w-7 h-6 opacity-70" /></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. TASTING PANEL */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: C.cream }}>
        <div className="container mx-auto px-6">
          <div data-reveal className="pz-reveal">
            <Eyebrow color={`${C.plum}B3`}>How it tastes</Eyebrow>
            <h2 className="font-working-man mt-3" style={{ color: C.plum, fontSize: "clamp(1.9rem, 3vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.05 }}>Gentle and fruity, with a silky finish</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(100,60,76,0.15)" }}>
            {[
              { note: "Ripe pear", line: "The first thing on the nose: soft, sweet fruit." },
              { note: "Fresh lettuce", line: "A green, crisp middle from olives picked young." },
              { note: "Toasted almond", line: "A nutty, round finish that stays mild." },
            ].map((n, i) => (
              <div key={n.note} data-reveal className="pz-reveal p-8 lg:p-10" style={{ backgroundColor: C.cream, transitionDelay: `${i * 90}ms` }}>
                <p className="font-working-man font-bold" style={{ color: `${C.plum}66`, fontSize: 15, letterSpacing: "0.15em" }}>0{i + 1}</p>
                <p className="font-beverly mt-4" style={{ color: C.plum, fontSize: "clamp(2.6rem, 3.6vw, 3.4rem)", lineHeight: 1 }}>{n.note}</p>
                <p className="mt-3" style={{ color: `${C.ink}CC`, fontSize: 17, lineHeight: 1.55 }}>{n.line}</p>
              </div>
            ))}
          </div>

          {/* Flavour meters */}
          <div data-reveal className="pz-reveal mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
            {[
              { k: "Fruity", v: 5 },
              { k: "Herbal", v: 3 },
              { k: "Peppery", v: 2 },
              { k: "Bitter", v: 2 },
            ].map((m) => (
              <div key={m.k}>
                <div className="flex items-baseline justify-between">
                  <span className="font-working-man font-bold uppercase" style={{ fontSize: 14, letterSpacing: "0.15em", color: C.plum }}>{m.k}</span>
                  <span className="text-sm" style={{ color: `${C.ink}99` }}>{m.v} of 5</span>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="pz-meter h-2.5 rounded-full" style={{ backgroundColor: i < m.v ? C.plum : "rgba(100,60,76,0.14)", transitionDelay: `${i * 70}ms` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GOOD ON EVERYTHING: the label's right-hand panel, unfolded */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: C.plum }}>
        <Art name="cherub" color={C.peach} className="absolute hidden lg:block" style={{ width: 620, height: 620, right: -80, bottom: -90, opacity: 0.08 }} />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5" data-reveal>
              <div className="pz-reveal">
                <p className="font-beverly" style={{ color: C.peach, fontSize: "clamp(2.8rem, 4.6vw, 4.4rem)", lineHeight: 1 }}>Good On Everything</p>
                <p className="mt-6" style={{ color: "rgba(237,194,143,0.8)", fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)", lineHeight: 1.6 }}>
                  Peranzana is the mild one of our three oils. It sits under delicate food without taking over, so it goes on things a peppery oil would drown.
                </p>
              </div>
            </div>
            <ul className="lg:col-span-7">
              {[
                { t: "Silk up fresh pasta", icon: "olive" },
                { t: "Dress fish crudo & tartare", icon: "olive" },
                { t: "Marinate vegetables", icon: "olive" },
                { t: "Finish roast chicken", icon: "olive" },
                { t: "Try on ice cream", icon: "olive" },
              ].map((u, i) => (
                <li key={u.t} data-reveal className="pz-reveal flex items-center gap-6 py-5" style={{ borderBottom: "1px dashed rgba(237,194,143,0.35)", borderTop: i === 0 ? "1px dashed rgba(237,194,143,0.35)" : undefined, transitionDelay: `${i * 70}ms` }}>
                  <Art name={u.icon} color={C.peach} className="h-11 w-14 shrink-0 opacity-80" />
                  <span className="font-working-man font-bold uppercase" style={{ color: C.peach, fontSize: "clamp(1.2rem, 2vw, 1.75rem)", letterSpacing: "0.06em" }}>{u.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FROM GROVE TO BOTTLE: the harvest, live */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.plum }}>
        <div className="relative h-[420px] lg:h-[520px]">
          <AutoplayVideo src="/videos/olives-in-container-harvest.mp4" poster="/images/olives-in-container-harvest-poster.jpg" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(60,30,42,0.72) 0%, rgba(60,30,42,0.35) 55%, rgba(60,30,42,0.1) 100%)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <Eyebrow color={C.peach}>Harvest 26/27</Eyebrow>
              <h2 className="font-working-man mt-3" style={{ color: C.cream, fontSize: "clamp(2.2rem, 4.2vw, 4.2rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.02, textShadow: "0 2px 24px rgba(60,30,40,0.35)" }}>Picked green in October,<br />pressed within hours</h2>
            </div>
          </div>
        </div>
        <div className="py-16 lg:py-20" style={{ backgroundColor: C.blush }}>
          <div className="container mx-auto px-6">
            <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              <span aria-hidden className="hidden md:block absolute top-[11px] left-[10%] right-[10%] h-px" style={{ backgroundImage: `linear-gradient(90deg, ${C.plum} 0 ${((step + 0.5) / steps.length) * 100}%, rgba(100,60,76,0.25) ${((step + 0.5) / steps.length) * 100}% 100%)` }} />
              {steps.map((s: { label: string; when: string }, i: number) => {
                const done = i < step, now = i === step;
                return (
                  <li key={s.label} className="relative flex md:flex-col md:items-center gap-4 md:gap-3 md:text-center">
                    <span className={`relative z-10 shrink-0 w-[23px] h-[23px] rounded-full ${now ? "pz-pulse" : ""}`} style={{ backgroundColor: done || now ? C.plum : C.blush, border: `2px solid ${done || now ? C.plum : "rgba(100,60,76,0.35)"}` }} />
                    <div>
                      <p className="font-working-man font-bold uppercase" style={{ fontSize: 15, letterSpacing: "0.1em", color: done || now ? C.plum : `${C.ink}80` }}>{s.label}</p>
                      <p className="mt-1 text-sm" style={{ color: `${C.ink}${done || now ? "B3" : "73"}` }}>{done ? "Done" : now ? "Now" : s.when}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. THE LAB BOX: values pending, placed against the benchmarks */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: C.cream }}>
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5" data-reveal>
            <div className="pz-reveal">
              <Eyebrow color={`${C.plum}B3`}>Lab analysis</Eyebrow>
              <h2 className="font-working-man mt-3" style={{ color: C.plum, fontSize: "clamp(1.9rem, 3vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.05 }}>Every harvest is lab-tested before it ships</h2>
              <p className="mt-5" style={{ color: `${C.ink}CC`, fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)", lineHeight: 1.6 }}>
                Polyphenols are the natural compounds behind olive oil's bitterness, its pepper and its health benefits. The 26/27 Peranzana sample is with the lab now. Its values go on this page and behind the QR code on the label as soon as the report arrives.
              </p>
              <a href="/certificates" className="inline-block mt-6 font-working-man font-bold uppercase underline underline-offset-4" style={{ color: C.plum, fontSize: 15, letterSpacing: "0.1em" }}>See every lab report</a>
            </div>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <div className="pz-reveal rounded-2xl p-6 sm:p-8 lg:p-10" style={{ backgroundColor: C.plum }}>
              <div className="grid grid-cols-3 gap-4 pb-8" style={{ borderBottom: "1px dashed rgba(237,194,143,0.35)" }}>
                {["Polyphenols", "Oleocanthal", "Oleacein"].map((k) => (
                  <div key={k}>
                    <p className="font-working-man font-bold uppercase" style={{ color: C.peach, fontSize: 13, letterSpacing: "0.12em" }}>{k}</p>
                    <p className="font-working-man mt-2 pz-pending" style={{ color: C.peach, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>···</p>
                    <p className="text-sm" style={{ color: "rgba(237,194,143,0.7)" }}>mg/kg</p>
                  </div>
                ))}
              </div>
              <div className="pt-8 space-y-3">
                {[
                  { k: "Average supermarket oil", v: 180, w: 180 / 600 },
                  { k: "EU health claim level", v: 250, w: 250 / 600 },
                ].map((b) => (
                  <div key={b.k} className="flex items-center gap-4">
                    <div className="h-12 rounded-lg flex items-center px-4 text-sm" style={{ width: `${b.w * 100}%`, minWidth: 190, backgroundColor: "rgba(237,194,143,0.22)", color: C.cream }}>{b.k}</div>
                    <span className="font-bold" style={{ color: C.peach }}>{b.v}</span>
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <div className="h-12 rounded-lg flex items-center px-4 font-working-man font-bold uppercase pz-pending-bar" style={{ width: "100%", border: "1.5px dashed rgba(237,194,143,0.6)", color: C.peach, fontSize: 14, letterSpacing: "0.1em" }}>ATTIMO Peranzana 26/27 · awaiting lab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE FACTS ROW, as printed on the back label */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: C.blush }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10" style={{ borderTop: `2px dashed ${C.plum}` }}>
                {[
                  ["Variety", "100% Peranzana"],
                  ["Origin", "Italy"],
                  ["Flavour", "Gentle & Fruity"],
                  ["Use", "Drizzle over fresh foods"],
                  ["Store", "Away from light and heat"],
                  ["Harvest", "October 2026"],
                ].map(([k, v]) => (
                  <div key={k} className="py-5" style={{ borderBottom: `1px dashed rgba(100,60,76,0.5)` }}>
                    <dt className="font-working-man font-bold uppercase" style={{ color: C.plum, fontSize: 14, letterSpacing: "0.15em" }}>{k}</dt>
                    <dd className="font-beverly mt-1" style={{ color: C.plum, fontSize: 28, lineHeight: 1.15 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-4 flex lg:flex-col items-center gap-6 lg:gap-4 lg:text-center">
              <Art name="farm" color={C.plum} className="w-28 h-20 lg:w-44 lg:h-32 shrink-0" />
              <div>
                <p className="font-working-man font-bold uppercase" style={{ color: C.plum, fontSize: 14, letterSpacing: "0.15em" }}>Bottled at</p>
                <p className="mt-1" style={{ color: C.ink, fontSize: 16, lineHeight: 1.5 }}>Fraz. Morano Madonnuccia snc<br />Gualdo Tadino (PG), Italy</p>
                <p className="mt-3 text-sm" style={{ color: `${C.ink}B3` }}>Organic IT-BIO-023 · Agricoltura Italia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS on plum */}
      <section className="py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: C.plum }}>
        <p className="font-beverly text-center px-6" style={{ color: C.peach, fontSize: "clamp(2.5rem, 5vw, 4.6rem)" }}>{dict.testimonials.heading}</p>
        <div className="relative mt-10">
          <div className="pz-reviews flex w-max gap-6">
            {[...reviews, ...reviews].map((r: { title: string; text: string }, i: number) => (
              <figure key={i} className="w-[82vw] sm:w-[360px] lg:w-[420px] shrink-0 rounded-2xl p-7" style={{ backgroundColor: "rgba(237,194,143,0.09)", border: "1px solid rgba(237,194,143,0.22)" }} aria-hidden={i >= reviews.length}>
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={C.peach}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                </div>
                <p className="font-working-man font-bold uppercase mt-4" style={{ color: C.peach, fontSize: 17, letterSpacing: "0.06em" }}>{r.title}</p>
                <blockquote className="mt-2" style={{ color: "rgba(255,250,234,0.85)", fontSize: 16, lineHeight: 1.6 }}>{r.text}</blockquote>
                <figcaption className="mt-4 text-sm" style={{ color: "rgba(237,194,143,0.7)" }}>{reviewMeta[i % reviews.length]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LAST CALL: the bottle again, with the buy button */}
      <section className="relative overflow-hidden pz-grain" style={{ backgroundColor: C.blush }}>
        <div className="container mx-auto px-6 py-20 lg:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 flex justify-center relative">
            <Art name="seal" color={C.plum} className="absolute opacity-25" style={{ width: 210, height: 270, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <img src={bottleUrl} alt="" className="relative h-[320px] w-auto" style={{ filter: "drop-shadow(14px 10px 20px rgba(60,30,40,0.22))" }} />
          </div>
          <div className="md:col-span-8">
            <p className="font-beverly" style={{ color: C.plum, fontSize: "clamp(2.8rem, 5vw, 4.8rem)", lineHeight: 1 }}>Peranzana d'Italia</p>
            <p className="mt-4" style={{ color: `${C.ink}CC`, fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)" }}>Harvest 26/27 · 500 ml · {fmt(PRICE)}</p>
            <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="pz-cta mt-6 rounded-lg px-10 py-4 font-working-man font-bold uppercase" style={{ backgroundColor: C.plum, color: C.peach, fontSize: 18, letterSpacing: "0.08em" }}>Choose your bottles</button>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: C.cream }}>
        <FAQ items={faqs} locale={locale} />
      </div>

      <Footer locale={locale} />

      {/* Sticky buy bar (mobile) */}
      <div className={`lg:hidden fixed left-0 right-0 bottom-0 z-40 transition-transform duration-300 ${showBar ? "translate-y-0" : "translate-y-full"}`} style={{ backgroundColor: C.plum, boxShadow: "0 -8px 24px rgba(60,30,40,0.25)", paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex items-center gap-3 px-4 py-3">
          <img src={bottleUrl} alt="" className="h-12 w-auto" />
          <div className="flex-1 min-w-0">
            <p className="font-beverly truncate" style={{ color: C.peach, fontSize: 22, lineHeight: 1 }}>Peranzana</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(237,194,143,0.75)" }}>{qty} × 500 ml · {fmt(total)}</p>
          </div>
          <button onClick={addToCart} className="rounded-lg px-5 py-3 font-working-man font-bold uppercase" style={{ backgroundColor: C.peach, color: C.plum, fontSize: 15, letterSpacing: "0.08em" }}>Add to cart</button>
        </div>
      </div>

      <style>{`
        .pz-grain { position: relative; }
        .pz-grain::before { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .35; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .39  0 0 0 0 .24  0 0 0 0 .3  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"); }
        .pz-grain > * { position: relative; }
        .pz-bottle { animation: pzRise 1.1s cubic-bezier(.2,.7,.2,1) both; }
        .pz-cherub { animation: pzFade 1.6s ease .2s both; }
        .pz-seal { animation: pzSeal 1.2s cubic-bezier(.2,.7,.2,1) .5s both; }
        .pz-note { animation: pzNote .7s cubic-bezier(.3,1.5,.5,1) 1s both; transform-origin: left center; }
        @keyframes pzRise { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        @keyframes pzFade { from { opacity: 0; } }
        @keyframes pzSeal { from { opacity: 0; transform: rotate(-25deg) scale(.8); } to { transform: rotate(-8deg); } }
        @keyframes pzNote { from { opacity: 0; transform: rotate(-14deg) scale(.6); } to { opacity: 1; transform: rotate(-8deg); } }
        .pz-cta { transition: transform .15s ease, box-shadow .2s ease, background-color .2s ease; box-shadow: 0 10px 24px rgba(100,60,76,.28); }
        .pz-cta:hover { transform: translateY(-1px); box-shadow: 0 14px 30px rgba(100,60,76,.36); background-color: #552F3F !important; }
        .pz-cta:active { transform: translateY(1px); }
        .pz-marquee { animation: pzMarquee 38s linear infinite; }
        .pz-reviews { animation: pzMarquee 70s linear infinite; padding-left: 24px; }
        .pz-reviews:hover { animation-play-state: paused; }
        @keyframes pzMarquee { to { transform: translateX(-50%); } }
        .pz-reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
        [data-reveal].is-in .pz-reveal, .pz-reveal.is-in { opacity: 1; transform: none; }
        .pz-meter { transform-origin: left; }
        .pz-pulse { box-shadow: 0 0 0 0 rgba(100,60,76,.45); animation: pzPulse 2s ease-out infinite; }
        @keyframes pzPulse { 70% { box-shadow: 0 0 0 12px rgba(100,60,76,0); } 100% { box-shadow: 0 0 0 0 rgba(100,60,76,0); } }
        .pz-pending { animation: pzBlink 1.6s ease-in-out infinite; }
        .pz-pending-bar { background: repeating-linear-gradient(110deg, rgba(237,194,143,.06) 0 14px, rgba(237,194,143,.14) 14px 28px); background-size: 200% 100%; animation: pzSlide 6s linear infinite; }
        @keyframes pzBlink { 50% { opacity: .35; } }
        @keyframes pzSlide { to { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) {
          .pz-bottle, .pz-cherub, .pz-seal, .pz-note, .pz-marquee, .pz-reviews, .pz-pulse, .pz-pending, .pz-pending-bar { animation: none !important; }
          .pz-seal, .pz-note { transform: rotate(-8deg); }
          .pz-reveal { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default function PeranzanaStunning(props: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Page {...props} />
      <Sonner />
    </QueryClientProvider>
  );
}
