import { Button } from "@/components/ui/button";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
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
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - 80px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <img 
              src="/lovable-uploads/a89180d1-44f4-4357-b1da-0bda7fb6b9ca.png" 
              alt="KLEIA olive oil logo" 
              className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Description */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-working-man-light tracking-[0.2em] text-white uppercase leading-relaxed drop-shadow-lg">
              Exceptional extra virgin olive oils<br />
              from small family groves
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="px-10 py-4 bg-white/90 text-olive-dark hover:bg-white hover:scale-105 transition-all duration-300 font-semibold rounded-sm backdrop-blur-sm shadow-2xl text-lg"
            >
              Shop 2024 harvest
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="text-white/80 text-base font-light tracking-wide drop-shadow-lg animate-fade-in cursor-pointer hover:text-white transition-colors" style={{ animationDelay: '0.6s' }} onClick={onWaitlistClick}>
            Join harvest 2025 waitlist
          </div>
        </div>
      </div>
      
      {/* Quality Ticker - At bottom of hero section */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-[hsl(67_15%_45%)] py-5 overflow-hidden border-t border-white/10">
        <div className="flex animate-marquee">
          <span className="text-white font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em] whitespace-nowrap pr-12 drop-shadow-sm">
            PREMIUM QUALITY • DIRECT FROM GROVES • LAB TESTED • FRESH HARVEST • TRACEABLE • ARTISANAL • SMALL BATCH • PREMIUM QUALITY • DIRECT FROM GROVES • LAB TESTED • FRESH HARVEST • TRACEABLE • ARTISANAL • SMALL BATCH
          </span>
          <span className="text-white font-working-man-light font-bold text-xl md:text-3xl tracking-[0.3em] whitespace-nowrap pr-12 drop-shadow-sm">
            PREMIUM QUALITY • DIRECT FROM GROVES • LAB TESTED • FRESH HARVEST • TRACEABLE • ARTISANAL • SMALL BATCH • PREMIUM QUALITY • DIRECT FROM GROVES • LAB TESTED • FRESH HARVEST • TRACEABLE • ARTISANAL • SMALL BATCH
          </span>
        </div>
      </div>
    </section>
  );
};