import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export const Header = ({ onWaitlistClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu - Mobile/Tablet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-olive-dark border-olive-medium">
              <nav className="flex flex-col space-y-6 mt-8 text-lg text-white font-light" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                <span 
                  className="hover:text-white/80 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Our story
                </span>
                <span 
                  className="hover:text-white/80 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Quality
                </span>
                <span 
                  className="hover:text-white/80 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Producers
                </span>
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    onWaitlistClick();
                  }}
                  className="hover:bg-white/10 text-sm px-6 py-2 font-medium rounded-full transition-all duration-300 border border-white/20 mt-4"
                  style={{ fontFamily: 'Space Grotesk, monospace', backgroundColor: '#CDDB2D', color: '#494F35' }}
                >
                  Join waitlist
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Left - Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm text-white font-light" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Our story</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Quality</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Producers</span>
          </nav>

          {/* Right - CTA (Desktop only) */}
          <Button 
            onClick={onWaitlistClick}
            className="hidden lg:block hover:bg-white/10 text-sm px-6 py-2 font-medium rounded-full transition-all duration-300 border border-white/20"
            style={{ fontFamily: 'Space Grotesk, monospace', backgroundColor: '#CDDB2D', color: '#494F35' }}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};