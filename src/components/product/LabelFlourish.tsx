// Label-art touches for the renewed-look product page (prototype, opt-in via
// ProductPage `flourish`). The art is cut from the 26/27 Peranzana print file
// and used as a CSS mask, so it takes any colour.
import { useEffect, useRef, useState } from "react";

const ART = "/images/peranzana";
export const PEACH = "#EDC28F";

export const Art = ({ name, color, className = "", style }: { name: string; color: string; className?: string; style?: React.CSSProperties }) => (
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

/** Tweens a number towards its target (the add-to-cart total). */
export function useTween(target: number, ms = 420) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      setV(a + (target - a) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); from.current = target; };
  }, [target, ms]);
  return v;
}

export const Tween = ({ value, format }: { value: number; format: (n: number) => string }) => {
  const v = useTween(value);
  return <>{format(Math.abs(v - value) < 0.005 ? value : v)}</>;
};

/** Cherub watermark and seal behind the hero bottle; drifts with the mouse. */
export const HeroArt = ({ ink }: { ink: string }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setTilt({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <>
      <Art name="cherub" color={ink} className="absolute fl-cherub pointer-events-none" style={{ inset: "8% -10% 10% -10%", opacity: 0.13, transform: `translate3d(${tilt.x * -16}px, ${tilt.y * -12}px, 0)` }} />
      <Art name="seal" color={ink} className="absolute fl-seal pointer-events-none" style={{ width: "clamp(70px, 8vw, 112px)", height: "clamp(90px, 10.3vw, 144px)", right: "7%", top: "max(13%, 88px)", opacity: 0.55 }} />
    </>
  );
};

/** Plum strip of label phrases. */
export const LabelRibbon = ({ ink, words }: { ink: string; words: string[] }) => (
  <div className="relative overflow-hidden py-4" style={{ backgroundColor: ink }}>
    <div className="fl-marquee flex w-max gap-10 whitespace-nowrap font-bold uppercase" style={{ color: PEACH, fontFamily: "UDC Working Man Sans, sans-serif", fontSize: 17, letterSpacing: "0.16em" }}>
      {[0, 1].map((k) => (
        <div key={k} className="flex gap-10 items-center" aria-hidden={k === 1}>
          {words.map((w) => (
            <span key={w} className="flex items-center gap-10">{w}<Art name="olive" color={PEACH} className="w-7 h-6 opacity-70" /></span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/** Fades a section up the first time it scrolls into view. */
export const Reveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="fl-reveal">{children}</div>;
};

/** Mobile buy bar, shown once the add-to-cart button has scrolled away. */
export const StickyBuyBar = ({ targetId, ink, name, line, label, onAdd }: { targetId: string; ink: string; name: string; line: string; label: string; onAdd: () => void }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Looks the button up on every check: the buy box can re-render it.
    const check = () => {
      const el = document.getElementById(targetId);
      setShow(!!el && el.getBoundingClientRect().bottom < 0);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, [targetId]);
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300" style={{ transform: show ? "none" : "translateY(110%)" }} aria-hidden={!show}>
      <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: ink, boxShadow: "0 -10px 30px rgba(60,30,40,.25)", paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}>
        <div className="flex-1 min-w-0">
          <p className="font-beverly truncate" style={{ color: PEACH, fontSize: 22, lineHeight: 1 }}>{name}</p>
          <p className="text-xs mt-0.5" style={{ color: "rgba(237,194,143,0.75)", fontFamily: "Space Grotesk, sans-serif" }}>{line}</p>
        </div>
        <button onClick={onAdd} tabIndex={show ? 0 : -1} className="rounded-lg px-5 py-3 font-bold uppercase" style={{ backgroundColor: PEACH, color: ink, fontFamily: "UDC Working Man Sans, sans-serif", fontSize: 15, letterSpacing: "0.08em" }}>{label}</button>
      </div>
    </div>
  );
};

export const FlourishStyles = ({ ink }: { ink: string }) => (
  <style>{`
    .fl-grain { position: relative; }
    .fl-grain::before { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .35; mix-blend-mode: multiply; z-index: 0;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .39  0 0 0 0 .24  0 0 0 0 .3  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"); }
    .fl-bottle { animation: flRise 1.1s cubic-bezier(.2,.7,.2,1) both; }
    .fl-cherub { animation: flFade 1.6s ease .2s both; transition: transform .4s ease-out; }
    .fl-seal { animation: flSeal 1.2s cubic-bezier(.2,.7,.2,1) .5s both; transform: rotate(-8deg); }
    .fl-note { animation: flNote .7s cubic-bezier(.3,1.5,.5,1) 1s both; transform-origin: left center; }
    @keyframes flRise { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
    @keyframes flFade { from { opacity: 0; } }
    @keyframes flSeal { from { opacity: 0; transform: rotate(-25deg) scale(.8); } to { transform: rotate(-8deg); } }
    @keyframes flNote { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: none; } }
    .fl-cta { transition: transform .15s ease, box-shadow .2s ease, background-color .2s ease !important; box-shadow: 0 10px 24px ${ink}47; }
    .fl-cta:hover { transform: translateY(-1px) !important; box-shadow: 0 14px 30px ${ink}5c; background-color: #552F3F !important; }
    .fl-marquee { animation: flMarquee 38s linear infinite; }
    @keyframes flMarquee { to { transform: translateX(-50%); } }
    .fl-reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
    .fl-reveal.is-in { opacity: 1; transform: none; }
    .fl-pending { animation: flBlink 1.6s ease-in-out infinite; }
    @keyframes flBlink { 50% { opacity: .35; } }
    @media (prefers-reduced-motion: reduce) {
      .fl-bottle, .fl-cherub, .fl-seal, .fl-note, .fl-marquee, .fl-pending { animation: none !important; }
      .fl-reveal { opacity: 1; transform: none; }
    }
  `}</style>
);
