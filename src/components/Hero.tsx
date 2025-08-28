import { Button } from "@/components/ui/button";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Header */}
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-olive-medium mb-4 uppercase">
              Premium Olive Oil
            </p>
            <h1 className="text-6xl md:text-7xl font-light text-olive-dark mb-4 font-serif tracking-tight">
              KLEIA
            </h1>
            <p className="text-lg font-light tracking-[0.15em] text-olive-medium uppercase">
              Direct from European Groves
            </p>
          </div>

          {/* Olive Tree Illustration Placeholder */}
          <div className="my-16 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center border-2 border-olive-light/30 rounded-full bg-olive-light/5">
              <span className="text-olive-medium font-light text-sm">Olive Tree</span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl font-light text-olive-medium max-w-3xl mx-auto leading-relaxed">
              Curating exceptional extra virgin olive oils from small family groves.<br />
              <span className="italic">Fresh, traceable, and lab-tested for uncompromising quality.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={onWaitlistClick}
              className="px-8 py-3 bg-olive-dark text-cream hover:bg-olive-medium transition-all duration-300 font-medium rounded-sm"
            >
              Join the waitlist
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-3 border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-cream transition-all duration-300 font-medium rounded-sm"
            >
              Learn more
            </Button>
          </div>

          {/* Launch Info */}
          <div className="text-olive-light text-sm font-light tracking-wide">
            Starting with Portugal's 2024 harvest • Full launch 2026
          </div>
        </div>
      </div>
    </section>
  );
};