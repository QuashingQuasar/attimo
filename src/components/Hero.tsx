import { AutoplayVideo } from "@/components/AutoplayVideo";
import { ValuePropMarquee } from "@/components/ValuePropMarquee";
import { OliveLeaf } from './OliveLeaf';
// TEMPORARY logo comparison: default Group 530, ?logo=531 shows Group 531.
// Remove the switch and the unused file once one is chosen.
import logo530 from '@/assets/attimo-hero-logo-530.svg?url';
import logo531 from '@/assets/attimo-hero-logo-531.svg?url';
import { useEffect, useState } from 'react';
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
  const [logoSrc, setLogoSrc] = useState(logo530);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('logo') === '531') setLogoSrc(logo531);
  }, []);
  return <section className="relative flex items-center justify-center overflow-hidden snap-start hero-full">
      <AutoplayVideo
      src="/videos/hero-video-new.mp4"
      poster="/images/hero-poster.png"
      className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
    
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - var(--announce-bar-h, 0px) - 100px)' }}>
        <div className="w-full max-w-5xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
            <img
            src={logoSrc}
            alt="ATTIMO specialty olive oil"
            className="object-contain drop-shadow-2xl w-auto max-h-[230px] md:max-h-[300px] lg:max-h-[360px]"
            style={{ width: 'min(380px, 56vw, 36vh)', height: 'auto' }} />
          
          </div>

          <div className="mb-7 md:mb-9 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <HarvestSignup locale={locale} lineSize="clamp(1.25rem, 1.75vw, 1.65rem)" maxWidth={740} />
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