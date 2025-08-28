import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-olive-oil.jpg";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/80 via-olive-dark/60 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-cream leading-tight">
            Liquid Gold from
            <span className="block text-gold-rich">Ancient Groves</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 max-w-2xl leading-relaxed">
            Discover the pure essence of Mediterranean heritage. Our premium olive oil is crafted from centuries-old trees, delivering unparalleled flavor and authenticity to your table.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="waitlist" 
              size="lg"
              onClick={onWaitlistClick}
              className="text-lg px-8 py-6"
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-cream text-cream hover:bg-cream hover:text-olive-dark"
            >
              Learn Our Story
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-rich">500+</div>
              <div className="text-cream/80">Year Old Trees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-rich">100%</div>
              <div className="text-cream/80">Single Origin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-rich">24h</div>
              <div className="text-cream/80">From Tree to Bottle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};