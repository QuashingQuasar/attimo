import { Button } from "@/components/ui/button";
import { OliveLeaf } from './OliveLeaf';
import kleiaLogo from '@/assets/kleia-logo-updated.svg';

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen snap-start">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video-3.mp4" type="video/mp4" />
      </video>
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center h-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <img 
              src={kleiaLogo} 
              alt="KLEIA olive oil logo" 
              className="w-141 h-141 md:w-169 md:h-169 object-contain drop-shadow-2xl"
            />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="px-10 py-4 hover:scale-105 transition-all duration-300 font-semibold rounded-sm backdrop-blur-sm shadow-2xl text-lg"
              style={{ fontFamily: 'Space Grotesk, monospace', backgroundColor: '#CDDB2D', color: '#494F35' }}
            >
              Shop 2024 harvest
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="text-white/80 text-base font-light tracking-wide drop-shadow-lg animate-fade-in cursor-pointer hover:text-white transition-colors" style={{ animationDelay: '0.6s', fontFamily: 'Space Grotesk, monospace' }} onClick={onWaitlistClick}>
            Join harvest 2025 waitlist
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-40 py-5 overflow-hidden border-t border-olive-dark/10" style={{ backgroundColor: '#B3E58C' }}>
        <div className="flex animate-marquee">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>PREMIUM QUALITY</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>DIRECT FROM GROVES</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>LAB TESTED</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>FRESH HARVEST</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>TRACEABLE</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>ARTISANAL</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
              <span className="font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em]" style={{ color: '#1A431D' }}>SMALL BATCH</span>
              <OliveLeaf className="w-3 h-5 mx-6" fill="#1A431D" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};