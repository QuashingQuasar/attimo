import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export const Header = ({ onWaitlistClick }: HeaderProps) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left - Navigation */}
          <nav className="flex items-center space-x-8 text-sm text-white font-light" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Our story</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Quality</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Producers</span>
          </nav>


          {/* Right - CTA */}
          <Button 
            onClick={onWaitlistClick}
            className="text-white hover:bg-white/10 text-sm px-6 py-2 font-medium rounded-full transition-all duration-300 border border-white/20"
            style={{ fontFamily: 'Space Grotesk, monospace', backgroundColor: '#CDDB2D' }}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};