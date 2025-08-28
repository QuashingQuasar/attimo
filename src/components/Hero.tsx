import { Button } from "@/components/ui/button";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="my-16 flex justify-center">
            <img 
              src="/lovable-uploads/7c80c965-598b-42eb-973d-4c79114eac25.png" 
              alt="KLEIA olive oil logo" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <p className="text-lg font-light tracking-[0.15em] text-olive-medium uppercase leading-relaxed">
              Exceptional extra virgin olive oils from small family groves.
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