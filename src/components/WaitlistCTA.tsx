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
      {/* Decorative background pattern - scattered icons */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full" style={{ opacity: 0.5 }}>
          {[
            { icon: 'branch-2.svg', top: '5%', left: '8%', size: 'w-20 h-20', rotate: 'rotate-12' },
            { icon: 'amphora-2.svg', top: '15%', left: '25%', size: 'w-24 h-24', rotate: '-rotate-6' },
            { icon: 'basket-2.svg', top: '8%', left: '45%', size: 'w-20 h-20', rotate: 'rotate-45' },
            { icon: 'sun-2.svg', top: '12%', left: '65%', size: 'w-28 h-28', rotate: 'rotate-0' },
            { icon: 'column-2.svg', top: '18%', left: '85%', size: 'w-20 h-20', rotate: '-rotate-12' },
            { icon: 'lyre-2.svg', top: '35%', left: '5%', size: 'w-22 h-22', rotate: 'rotate-6' },
            { icon: 'mortar.svg', top: '40%', left: '20%', size: 'w-24 h-24', rotate: '-rotate-12' },
            { icon: 'caraf-2.svg', top: '38%', left: '38%', size: 'w-20 h-20', rotate: 'rotate-24' },
            { icon: 'bread-2.svg', top: '42%', left: '55%', size: 'w-22 h-22', rotate: '-rotate-6' },
            { icon: 'book-2.svg', top: '35%', left: '72%', size: 'w-20 h-20', rotate: 'rotate-12' },
            { icon: 'lady-2.svg', top: '45%', left: '90%', size: 'w-24 h-24', rotate: '-rotate-24' },
            { icon: 'branch-2.svg', top: '65%', left: '10%', size: 'w-20 h-20', rotate: 'rotate-45' },
            { icon: 'amphora-2.svg', top: '68%', left: '28%', size: 'w-22 h-22', rotate: '-rotate-12' },
            { icon: 'basket-2.svg', top: '72%', left: '48%', size: 'w-24 h-24', rotate: 'rotate-6' },
            { icon: 'sun-2.svg', top: '70%', left: '68%', size: 'w-20 h-20', rotate: '-rotate-6' },
            { icon: 'column-2.svg', top: '75%', left: '88%', size: 'w-20 h-20', rotate: 'rotate-12' },
            { icon: 'lyre-2.svg', top: '90%', left: '15%', size: 'w-22 h-22', rotate: '-rotate-24' },
            { icon: 'mortar.svg', top: '88%', left: '35%', size: 'w-20 h-20', rotate: 'rotate-12' },
            { icon: 'caraf-2.svg', top: '92%', left: '52%', size: 'w-24 h-24', rotate: '-rotate-6' },
            { icon: 'bread-2.svg', top: '85%', left: '75%', size: 'w-20 h-20', rotate: 'rotate-6' }
          ].map((item, i) => (
            <img 
              key={i}
              src={`/icons/${item.icon}`} 
              alt="" 
              className={`absolute ${item.size} ${item.rotate} object-contain`}
              style={{ top: item.top, left: item.left }}
            />
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
