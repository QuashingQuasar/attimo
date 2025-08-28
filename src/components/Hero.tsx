import { Button } from "@/components/ui/button";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-olive-dark to-olive-medium">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-cream">
            OLIVE OIL
            <br />
            <span className="text-gold-rich">THE RIGHT WAY</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-cream/90 max-w-3xl mx-auto leading-relaxed">
            Curating exceptional olive oils directly from small European groves. 
            Fresh, traceable, and lab-tested. Starting with Portugal's 2024 harvest.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={onWaitlistClick}
              className="text-lg px-12 py-4 bg-gold-rich text-olive-dark hover:bg-gold-light transition-colors font-bold"
            >
              Get Notified on 2025 Harvest Selection
            </Button>
          </div>

          {/* Launch Info */}
          <div className="text-cream/80 text-sm">
            <span>Building towards full launch 2026 • Early access for supporters</span>
          </div>
        </div>
      </div>
    </section>
  );
};