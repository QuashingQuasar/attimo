import { Button } from "@/components/ui/button";
import { AutoplayVideo } from "@/components/AutoplayVideo";
interface HeroProps {
  onWaitlistClick: () => void;
}
export const Hero = ({
  onWaitlistClick
}: HeroProps) => {
  return <section className="relative flex items-center justify-center overflow-hidden snap-start hero-full">
      <AutoplayVideo
      src="/videos/hero-video-new.mp4"
      poster="/images/hero-poster.png"
      className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
    
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - var(--announce-bar-h, 0px) - 100px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="tracking-tight leading-[1.05] mb-5 md:mb-6 animate-fade-in"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              fontWeight: 400,
              color: '#FFFAEA',
              // Sized so the full headline stays on one line from ~320px
              // mobile up through 1920px desktop. Lower bound covers the
              // smallest phones (text gets small, but never wraps).
              fontSize: 'clamp(1.1rem, 5vw, 4rem)',
              whiteSpace: 'nowrap',
              letterSpacing: '0.01em',
              textShadow: '0 2px 24px rgba(0,0,0,0.35)',
            }}
          >
            OLIVE OIL THE WAY IT SHOULD BE
          </h1>

          <p
            className="mx-auto mb-8 md:mb-10 max-w-3xl leading-relaxed animate-fade-in"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 400,
              color: 'rgba(255, 250, 234, 0.92)',
              fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
              animationDelay: '0.2s',
              textShadow: '0 1px 16px rgba(0,0,0,0.3)',
            }}
          >
            ATTIMO olive oil is always fresh, single-variety and pressed from olives that were picked early for maximum flavour and health benefits. Lab-tested quality.
          </p>

          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
            onClick={() => {
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
            className="text-base md:text-lg lg:text-lg py-3.5 px-9 lg:py-4 lg:px-11 hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm shadow-2xl"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              border: '2px solid #CDDB2D',
              color: '#1B4229',
              backgroundColor: '#CDDB2D',
              borderRadius: '8px',
            }}>
              Shop New Harvest
            </Button>
          </div>

          



        
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-accent py-3 lg:py-2 overflow-hidden border-t border-olive-dark/10">
        <div className="flex hero-ticker-marquee" style={{ width: 'max-content' }}>
          {Array(4).fill(null).map((_, i) => <div key={i} className="flex items-center whitespace-nowrap">
              {[
                { text: "LAB-TESTED", icon: "/icons/branch-2.svg" },
                { text: "EARLY HARVEST", icon: "/icons/lady-2.svg" },
                { text: "SINGLE VARIETY", icon: "/icons/basket-2.svg" },
                { text: "FROM GROVE TO TABLE", icon: "/icons/bread-2.svg" },
                { text: "ALWAYS FRESH", icon: "/icons/mortar.svg" },
                { text: "COLD-PRESSED", icon: "/icons/sun-2.svg" },
              ].map((item, idx) =>
          <span key={`${i}-${idx}`} className="inline-flex items-center">
                  <span className="hero-ticker-text font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229' }}>{item.text}</span>
                  <span
                    className="inline-block mx-4 md:mx-6 lg:mx-4"
                    style={{
                      width: '1.85em',
                      height: '1.85em',
                      backgroundColor: '#1B4229',
                      WebkitMaskImage: `url(${item.icon})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(${item.icon})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </span>
          )}
            </div>)}
        </div>
      </div>
    </section>;
};