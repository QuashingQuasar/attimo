import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import navbarLogo from "@/assets/navbar-logo-latest.svg";
import { CartDrawer } from "./CartDrawer";
interface HeaderProps {
  onWaitlistClick: () => void;
  forceScrolled?: boolean;
}
export const Header = ({
  onWaitlistClick,
  forceScrolled = false,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-scroll');
    const handleScroll = () => {
      const scrollY = scrollContainer?.scrollTop || window.scrollY;
      setIsScrolled(forceScrolled || scrollY > 50);
    };
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'bg-transparent'}`} style={isScrolled ? {
    backgroundColor: '#1B4229'
  } : undefined}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Left on all screens */}
          <div className="flex items-center">
            <img src={navbarLogo} alt="ATTIMO" className="h-8 md:h-10 lg:h-12 w-auto" />
          </div>

          {/* Right side - Navigation and CTA */}
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            {/* Harvest 2025 link - Hidden on mobile */}
            <button 
              onClick={onWaitlistClick}
              className="hidden md:block text-white hover:opacity-80 transition-opacity text-base md:text-lg font-medium"
              style={{ fontFamily: 'Space Grotesk, monospace' }}
            >
              New Harvest
            </button>

            {/* Cart Drawer */}
            <CartDrawer />

            {/* Shop CTA - Visible on all screens */}
            <Button 
              onClick={() => {
                const productSection = document.getElementById('harvest-product');
                if (productSection) {
                  productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="hover:bg-white/10 text-sm md:text-base px-6 md:px-8 py-3 font-medium rounded-full transition-all duration-300 border border-white/20" 
              style={{
                fontFamily: 'Space Grotesk, monospace',
                backgroundColor: '#CDDB2D',
                color: '#494F35'
              }}
            >
              Shop
            </Button>
          </div>
        </div>
      </div>
    </header>;
};