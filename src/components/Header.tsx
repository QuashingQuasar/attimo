import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export const Header = ({ onWaitlistClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-olive-light/10 py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left - Navigation */}
          <nav className="flex items-center space-x-8 text-sm text-olive-medium font-light">
            <span className="hover:text-olive-dark transition-colors cursor-pointer">Our story</span>
            <span className="hover:text-olive-dark transition-colors cursor-pointer">Quality</span>
            <span className="hover:text-olive-dark transition-colors cursor-pointer">Producers</span>
          </nav>

          {/* Center - Logo */}
          <div className="text-3xl font-light text-olive-dark tracking-wider italic">
            KLEIA
          </div>

          {/* Right - CTA */}
          <Button 
            onClick={onWaitlistClick}
            className="bg-olive-dark text-cream hover:bg-olive-medium text-sm px-6 py-2 font-medium rounded-sm transition-all duration-300"
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};