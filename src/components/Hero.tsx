import { AutoplayVideo } from "@/components/AutoplayVideo";
import { ValuePropMarquee } from "@/components/ValuePropMarquee";
import { OliveLeaf } from './OliveLeaf';
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { HarvestSignup } from "@/components/HarvestSignup";
// Keep hyphenated words ("high-polyphenol", "lab-tested") on one line.
const keepHyphensWhole = (text: string) =>
  text.split(" ").map((w, i, all) => (
    <span key={i}>
      {w.includes("-") ? <span className="whitespace-nowrap">{w}</span> : w}
      {i < all.length - 1 ? " " : ""}
    </span>
  ));

interface HeroProps {
  onWaitlistClick: () => void;
  locale?: Locale;
}
export const Hero = ({
  onWaitlistClick,
  locale = DEFAULT_LOCALE
}: HeroProps) => {
  const t = getDict(locale);
  return <section className="relative flex items-center justify-center overflow-hidden snap-start hero-full">
      <AutoplayVideo
      src="/videos/hero-video-new.mp4"
      poster="/images/hero-poster.png"
      className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
    
      
      {/* Even darkening so the centred header and subheader read over the video. */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(10,20,14,.55) 0%, rgba(10,20,14,.38) 55%, rgba(10,20,14,.5) 100%)" }}></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - var(--announce-bar-h, 0px) - 100px)' }}>
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Hero (lab look 6b): no logo; the video is the product in action.
              Header = what, subheader = how, then the waitlist form. */}
          <h1 className="mx-auto mb-6 animate-fade-in" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1.0, letterSpacing: "-.02em", color: "#FFFAEA", maxWidth: "13em", textWrap: "balance", textShadow: "0 2px 22px rgba(0,0,0,.35)" } as React.CSSProperties}>
            {keepHyphensWhole(t.hero.harvest.line)}
          </h1>
          <p className="mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.15s', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, fontSize: "clamp(1.08rem, 1.35vw, 1.35rem)", lineHeight: 1.5, color: "#FFFAEA", maxWidth: "34em", textWrap: "balance", textShadow: "0 1px 14px rgba(0,0,0,.45)" } as React.CSSProperties}>
            {keepHyphensWhole(t.hero.harvest.sub)}
          </p>

          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <HarvestSignup locale={locale} line={null} maxWidth={740} />
          </div>

          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
            href="#oil-collection"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('oil-collection');
              if (el) {
                const container = el.closest('.overflow-y-scroll') as HTMLElement;
                if (container) {
                  const target = el.querySelector('h2') ?? el;
                  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
                  const containerRect = container.getBoundingClientRect();
                  const targetRect = target.getBoundingClientRect();
                  const offset = container.scrollTop + targetRect.top - containerRect.top - headerHeight - 48;
                  container.scrollTo({ top: Math.max(offset, 0), behavior: 'smooth' });
                } else {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="transition-opacity hover:opacity-80"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              color: '#FFFAEA',
              textDecoration: 'underline',
              textUnderlineOffset: '5px',
              textDecorationColor: 'rgba(255,250,234,0.55)',
              textShadow: '0 1px 12px rgba(0,0,0,0.55)',
            }}>
              {t.hero.harvest.secondary}
              {/* Monoline diagonal arrow, same as the announce-bar links. */}
              <svg viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", width: ".75em", height: ".75em", marginLeft: ".35em", verticalAlign: "baseline" }}>
                <path d="M3 9 L9 3 M4.2 3 H9 V7.8" />
              </svg>
            </a>
          </div>

          



        
        </div>
      </div>
      
      <ValuePropMarquee locale={locale} />
    </section>;
};