import { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import coratinaImg from "./bottle-coratina.png?url";
import FeaturedOilSelector from "./_FeaturedOilSelector";
import SpecialtyIntro from "./_SpecialtyIntro";
import QuizNudge from "./_QuizNudge";
import BundleSection from "./_BundleSection";

/* ────────────────────────────────────────────────────────────────────────
   SANDBOX — featured-oil selector shown IN CONTEXT.
   Reuses the REAL Header + Hero + Footer from the live homepage and drops the
   experimental FeaturedOilSelector where the OilProductWidgets section sits.

   Adds a scroll-scrubbed "travelling bottle": a single bottle floats over the
   "Specialty Olive Oils" intro and, as you scroll, scales + glides down until
   it lands exactly in the selector's spotlight slot, then hands off to the
   selector's real bottle. Vanilla JS, no deps. Delete src/pages/lab/ to remove.
   ──────────────────────────────────────────────────────────────────────── */
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

function useTravellingBottle(overlayRef: React.RefObject<HTMLImageElement>) {
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const intro = document.querySelector(".si-section");
      const sel = document.querySelector<HTMLElement>(".fo-section");
      const frame = sel?.querySelector<HTMLElement>(".fo-bottle-frame");
      const img = frame?.querySelector("img");

      // keep the quiz bar's colours in sync with the active selector theme,
      // so it flows seamlessly out of the selector above it.
      const quiz = document.querySelector<HTMLElement>(".qn-section");
      if (sel && quiz) {
        const bg = sel.style.backgroundColor;
        const fg = sel.style.color;
        if (bg) {
          quiz.style.backgroundColor = bg;
          quiz.style.color = fg;
          quiz.style.setProperty("--qn-bg", bg);
          quiz.style.setProperty("--qn-fg", fg);
        }
      }

      if (!intro || !sel || !frame || !img) {
        overlay.style.opacity = "0";
        return;
      }

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const isMobile = vw <= 1100;
      const introR = intro.getBoundingClientRect();
      const imgR = img.getBoundingClientRect(); // end anchor (selector slot, scaled)

      // keep the overlay showing whichever bottle is active in the selector
      if (img.src && overlay.src !== img.src) overlay.src = img.src;

      const restTop = (vh - imgR.height) / 2;

      // start anchor + progress differ by breakpoint
      let start: { left: number; top: number; width: number; height: number };
      let p: number;
      let fadeIn: number;

      if (isMobile) {
        // big bottle parks on the left at the first value-prop's height, then
        // slides down the left side as you scroll (guiding the eye) to the slot.
        const w = Math.min(vw * 0.62, 360);
        start = { left: vw * -0.08, top: vh * 0.4, width: w, height: w };
        // continuous: 0 when the intro hits the top, 1 when the bottle is centred
        p = -introR.top / (imgR.top - restTop - introR.top || 1);
        // only appear once the intro is mostly in view (never over the hero)
        fadeIn = (vh * 0.3 - introR.top) / (vh * 0.3);
      } else {
        const lane = document.querySelector(".si-lane");
        const laneR = lane?.getBoundingClientRect();
        if (!laneR || laneR.width === 0) {
          overlay.style.opacity = "0";
          sel.classList.remove("fo-traveling");
          return;
        }
        start = { left: laneR.left, top: laneR.top, width: laneR.width, height: laneR.height };
        // parks in the lane, then slides once the selector rises in
        p = (vh - imgR.top) / (vh - restTop || 1);
        fadeIn = (vh - laneR.top) / (vh * 0.35);
      }

      p = Math.max(0, Math.min(1, p));
      fadeIn = Math.max(0, Math.min(1, fadeIn));
      const ep = easeInOut(p);

      const curLeft = lerp(start.left, imgR.left, ep);
      const curTop = lerp(start.top, imgR.top, ep);
      const curW = lerp(start.width, imgR.width, ep);
      const curH = lerp(start.height, imgR.height, ep);

      overlay.style.width = `${curW}px`;
      overlay.style.height = `${curH}px`;
      overlay.style.transform = `translate(${curLeft}px, ${curTop}px)`;

      // hand off to the real bottle once landed. Real bottle is hidden via a
      // class on the STABLE section (survives the spotlight's per-variety
      // remount → no double-bottle).
      const landed = p >= 0.999;
      overlay.style.opacity = String(landed ? 0 : fadeIn);
      sel.classList.toggle("fo-traveling", !landed);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    // reel clicks remount the spotlight; re-sync the overlay after React commits
    const onInteract = () =>
      requestAnimationFrame(() => requestAnimationFrame(update));

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("click", onInteract, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("click", onInteract, true);
      cancelAnimationFrame(raf);
    };
  }, [overlayRef]);
}

function Inner({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const overlayRef = useRef<HTMLImageElement>(null);
  useTravellingBottle(overlayRef);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      {/* ↓ the experiment, in the slot OilProductWidgets normally occupies */}
      <SpecialtyIntro />
      <FeaturedOilSelector />
      <QuizNudge />
      <BundleSection />
      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />

      {/* scroll-travelling bottle overlay */}
      <img
        ref={overlayRef}
        src={coratinaImg}
        alt=""
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          transformOrigin: "center center",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 30,
          opacity: 0,
          willChange: "transform, width, height",
          filter: "drop-shadow(0 18px 30px rgba(0, 0, 0, 0.28))",
        }}
      />
    </div>
  );
}

export default function FeaturedOilHome({ locale }: { locale?: Locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Inner locale={locale} />
    </QueryClientProvider>
  );
}
