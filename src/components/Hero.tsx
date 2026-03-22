import { Button } from "@/components/ui/button";
import { AutoplayVideo } from "@/components/AutoplayVideo";

import kleiaLogo from '@/assets/attimo-main-logo.svg';
interface HeroProps {
  onWaitlistClick: () => void;
}
export const Hero = ({
  onWaitlistClick
}: HeroProps) => {
  return <section className="relative flex items-center justify-center overflow-hidden h-screen snap-start">
      <AutoplayVideo
        src="/videos/hero-video-new.mp4"
        poster="/images/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
            <img
            src={kleiaLogo}
            alt="ATTIMO olive oil logo"
            className="object-contain drop-shadow-2xl"
            style={{ width: 'min(444px, 61.25vw, 43vh)', height: 'auto' }} />
          
          </div>

          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
            onClick={() => {
              const el = document.getElementById('oil-collection');
              if (el) {
                const container = el.closest('.overflow-y-scroll') as HTMLElement;
                if (container) {
                  const headerHeight = 80;
                  const offset = el.offsetTop - headerHeight;
                  container.scrollTo({ top: offset, behavior: 'smooth' });
                } else {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm shadow-2xl"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              border: '2px solid #CDDB2D',
              color: '#1B4229',
              backgroundColor: '#CDDB2D',
              fontSize: 'clamp(1.15rem, 1.38vw, 1.38rem)',
              borderRadius: '8px',
              padding: 'clamp(21px, 2.23vw, 28px) clamp(33px, 3vw, 47px)',
            }}>
              Shop fresh Harvest
            </Button>
          </div>

          



        
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-accent py-3 lg:py-2 overflow-hidden border-t border-olive-dark/10">
        <div className="flex hero-ticker-marquee" style={{ width: 'max-content' }}>
          {Array(4).fill(null).map((_, i) => <div key={i} className="flex items-center whitespace-nowrap">
              {[
                { text: "LAB-TESTED", icon: "/icons/flask.svg" },
                { text: "EARLY HARVEST", icon: "/icons/branch-2.svg" },
                { text: "SINGLE VARIETY", icon: "/icons/olive.svg" },
                { text: "FROM GROVE TO TABLE", icon: "/icons/basket-2.svg" },
                { text: "ALWAYS FRESH", icon: "/icons/sun-2.svg" },
                { text: "COLD-PRESSED", icon: "/icons/mortar.svg" },
              ].map((item, idx) => (
                <span key={`${i}-${idx}`} className="inline-flex items-center">
                  <span className="hero-ticker-text font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229' }}>{item.text}</span>
                  <img src={item.icon} alt="" className="w-3 md:w-4 lg:w-3 h-4 md:h-5 lg:h-4 mx-4 md:mx-6 lg:mx-4" style={{ filter: 'brightness(0) saturate(100%)' }} />
                </span>
              ))}
            </div>)}
        </div>
      </div>
    </section>;
};