import { Button } from "@/components/ui/button";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { ValuePropMarquee } from "@/components/ValuePropMarquee";
import { OliveLeaf } from './OliveLeaf';
import kleiaLogo from '@/assets/attimo-main-logo.svg?url';
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { HarvestSignup } from "@/components/HarvestSignup";
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
    
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - var(--announce-bar-h, 0px) - 100px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
            <img
            src={kleiaLogo}
            alt="ATTIMO olive oil logo"
            className="object-contain drop-shadow-2xl w-auto max-h-[230px] md:max-h-[300px] lg:max-h-[360px]"
            style={{ width: 'min(380px, 56vw, 36vh)', height: 'auto' }} />
          
          </div>

          <div className="mb-5 md:mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <HarvestSignup locale={locale} />
          </div>

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
            className="text-base md:text-lg py-3 px-8 lg:py-3.5 lg:px-9 hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              border: '2px solid rgba(255,250,234,0.7)',
              color: '#FFFAEA',
              backgroundColor: 'rgba(16,34,27,0.35)',
              borderRadius: '8px',
            }}>
              {t.hero.cta}
            </Button>
          </div>

          



        
        </div>
      </div>
      
      <ValuePropMarquee locale={locale} />
    </section>;
};