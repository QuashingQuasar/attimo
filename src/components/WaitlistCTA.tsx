import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface WaitlistCTAProps {
  onWaitlistClick: () => void;
}

export const WaitlistCTA = ({ onWaitlistClick }: WaitlistCTAProps) => {
  return (
    <section 
      className="py-20 snap-start relative overflow-hidden" 
      style={{ backgroundColor: '#B3E58C' }}
    >
      {/* Decorative background pattern - mixed icons in repeating grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 gap-8 p-8" style={{ opacity: 0.5 }}>
          {[
            'branch-2.svg', 'amphora-2.svg', 'basket-2.svg', 'sun-2.svg', 'column-2.svg', 'lyre-2.svg',
            'mortar.svg', 'branch-2.svg', 'caraf-2.svg', 'bread-2.svg', 'branch-2.svg', 'book-2.svg',
            'branch-2.svg', 'lady-2.svg', 'branch-2.svg', 'amphora-2.svg', 'branch-2.svg', 'basket-2.svg',
            'sun-2.svg', 'branch-2.svg', 'column-2.svg', 'branch-2.svg', 'lyre-2.svg', 'branch-2.svg',
            'branch-2.svg', 'mortar.svg', 'branch-2.svg', 'caraf-2.svg', 'branch-2.svg', 'bread-2.svg',
            'book-2.svg', 'branch-2.svg', 'lady-2.svg', 'branch-2.svg', 'amphora-2.svg', 'branch-2.svg'
          ].map((icon, i) => (
            <div key={i} className="w-full h-24 flex items-center justify-center">
              <img src={`/icons/${icon}`} alt="" className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#1B4229' }}
            >
              <Bell className="w-8 h-8" style={{ color: '#B3E58C' }} strokeWidth={2.5} />
            </div>
          </div>

          {/* Heading */}
          <h2 
            className="font-bold mb-4"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              color: '#1B4229',
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
              color: '#1B4229',
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
              backgroundColor: '#1B4229',
              color: '#B3E58C',
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
              color: '#1B4229',
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
