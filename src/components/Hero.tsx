import { Button } from "@/components/ui/button";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-12 leading-[1.1] text-olive-dark tracking-tight">
            Exceptional olive oils
            <br />
            <span className="font-medium italic">to sip & savour.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-olive-medium max-w-4xl mx-auto leading-relaxed font-light">
            Curating the finest extra virgin olive oils directly from small European groves. 
            Fresh, traceable, and lab-tested for exceptional quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
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