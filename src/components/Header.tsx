import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export const Header = ({ onWaitlistClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-olive-light/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left - Current Info */}
          <div className="flex items-center space-x-4 text-sm text-olive-medium">
            <span>Starting with 2024 harvest from: 🇵🇹</span>
            <span className="text-olive-light">|</span>
            <span>Curated • Lab Tested • Traceable</span>
          </div>

          {/* Center - Logo */}
          <div className="text-2xl font-bold text-olive-dark">
            KLEIA
          </div>

          {/* Right - CTA */}
          <Button 
            onClick={onWaitlistClick}
            className="bg-olive-dark text-cream hover:bg-olive-medium text-sm px-6 py-2"
          >
            Get Notified
          </Button>
        </div>
      </div>
    </header>
  );
};