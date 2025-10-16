import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface WaitlistCTAProps {
  onWaitlistClick: () => void;
}

export const WaitlistCTA = ({ onWaitlistClick }: WaitlistCTAProps) => {
  return (
    <section 
      className="py-20 snap-start relative overflow-hidden" 
      style={{ backgroundColor: '#1B4229' }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'url(/icons/branch-2.svg)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
          opacity: 0.3
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#B3E58C' }}
            >
              <Bell className="w-8 h-8" style={{ color: '#1B4229' }} strokeWidth={2.5} />
            </div>
          </div>

          {/* Heading */}
          <h2 
            className="font-bold mb-4"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              color: '#FFFAEA',
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              lineHeight: '1.2'
            }}
          >
            Get notified when we release our 2025 harvest selection
          </h2>

          {/* Subheading */}
          <p 
            className="mb-8 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Space Grotesk, monospace',
              color: '#B3E58C',
              fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
              lineHeight: '1.6'
            }}
          >
            Be the first to taste the freshest, most polyphenol-rich olive oil from our upcoming harvest. 
            Limited quantities available.
          </p>

          {/* CTA Button */}
          <Button
            onClick={onWaitlistClick}
            className="text-lg px-8 py-6 font-bold transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              backgroundColor: '#B3E58C',
              color: '#1B4229',
              fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
              borderRadius: '8px'
            }}
          >
            JOIN THE WAITLIST
          </Button>

          {/* Small text */}
          <p 
            className="mt-6"
            style={{
              fontFamily: 'Space Grotesk, monospace',
              color: '#FFFAEA',
              fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
              opacity: 0.7
            }}
          >
            No spam, just pure quality updates
          </p>
        </div>
      </div>
    </section>
  );
};
