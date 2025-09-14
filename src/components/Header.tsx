import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export const Header = ({ onWaitlistClick }: HeaderProps) => {
  return (
    <header className="py-6 border-b border-white/10" style={{ backgroundColor: '#15CD5D' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left - Navigation */}
          <nav className="flex items-center space-x-8 text-sm text-white font-light" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Our story</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Quality</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Producers</span>
          </nav>

          {/* Center - Logo */}
          <div className="text-3xl font-light text-white tracking-wider italic">
            KLEIA
          </div>

          {/* Right - CTA */}
          <Button 
            onClick={onWaitlistClick}
            className="bg-white text-black hover:bg-white/90 text-sm px-6 py-2 font-medium rounded-sm transition-all duration-300"
            style={{ fontFamily: 'Space Grotesk, monospace' }}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};