import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import navbarLogo from "@/assets/navbar-logo-latest.svg";
interface HeaderProps {
  onWaitlistClick: () => void;
}
export const Header = ({
  onWaitlistClick
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-scroll');
    const handleScroll = () => {
      const scrollY = scrollContainer?.scrollTop || window.scrollY;
      setIsScrolled(scrollY > 50);
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
              className="hidden md:block text-white hover:opacity-80 transition-opacity text-2xl font-medium"
              style={{ fontFamily: 'Space Grotesk, monospace' }}
            >
              Harvest 2025
            </button>

            {/* Cart Icon */}
            <a id="nav-cart-link" href="https://shop.attimo-oil.com/cart" className="text-white hover:opacity-80 transition-opacity" aria-label="Shopping cart" rel="noopener noreferrer">
              <ShoppingCart className="h-10 w-10 md:h-12 md:w-12" />
            </a>

            {/* Shop CTA - Visible on all screens */}
            <Button 
              onClick={() => {
                const productSection = document.getElementById('harvest-product');
                if (productSection) {
                  productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="hover:bg-white/10 text-xl md:text-2xl px-8 md:px-12 py-4 font-medium rounded-full transition-all duration-300 border border-white/20" 
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