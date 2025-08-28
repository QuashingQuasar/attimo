import { Button } from "@/components/ui/button";

interface HeroProps {
  onWaitlistClick: () => void;
}

export const Hero = ({ onWaitlistClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block border-4 border-olive-dark rounded-full p-8 mb-8">
              <div className="text-center">
                <div className="text-olive-dark mb-2">
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 8c-8 0-12 4-12 8 0 6 4 12 8 16v16c0 4 2 8 4 8s4-4 4-8V32c4-4 8-10 8-16 0-4-4-8-12-8z"/>
                    <path d="M28 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z"/>
                    <path d="M20 16c-2-2-4-2-6 0s-2 4 0 6c2 2 6 2 8 2 0-4-1-6-2-8z"/>
                    <path d="M44 16c2-2 4-2 6 0s2 4 0 6c-2 2-6 2-8 2 0-4 1-6 2-8z"/>
                  </svg>
                </div>
                <div className="text-sm font-bold text-olive-dark">SINGLE<br/>GROVE</div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight text-olive-dark">
            KLEIA
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold mb-8 text-olive-dark">
            EXTRA VIRGIN OLIVE OIL<br/>
            GALEGA • PORTUGAL
          </div>

          <p className="text-xl md:text-2xl mb-12 text-olive-medium max-w-3xl mx-auto leading-relaxed">
            We're launching the first traceable, lab-tested, single-grove olive oil 
            that supports small family farmers and delivers the authentic taste 
            you've never experienced.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={onWaitlistClick}
              className="text-lg px-12 py-4 bg-olive-dark text-cream hover:bg-olive-medium transition-colors"
            >
              Join the Launch Waitlist
            </Button>
          </div>

          <div className="text-sm text-olive-medium uppercase tracking-wider">
            2024 LAUNCH • EARLY HARVEST
          </div>
        </div>
      </div>
    </section>
  );
};