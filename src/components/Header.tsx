import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import navbarLogo from "@/assets/navbar-logo-latest.svg";
import { initCartLink } from "@/lib/attimoCart";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export const Header = ({ onWaitlistClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    initCartLink();
  }, []);

  useEffect(() => {
    const a = document.getElementById('nav-cart-link') as HTMLAnchorElement | null;
    if (!a) return;
    a.href = 'https://attimo-oil.myshopify.com/cart';
    a.target = '_self';

    const forceCart = (e: MouseEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      window.location.href = a.href;
    };

    a.addEventListener('click', forceCart, true);
    return () => a.removeEventListener('click', forceCart, true);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: '#1B4229' } : undefined}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Left on all screens */}
          <div className="flex items-center">
            <img src={navbarLogo} alt="KLEIA" className="h-8 md:h-10 lg:h-12 w-auto" />
          </div>

          {/* Right side - Hamburger (mobile) / Desktop Navigation and CTA */}
          <div className="flex items-center gap-8">
            {/* Hamburger Menu - Mobile/Tablet (Right) */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm text-white font-light" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Our story</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Quality</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Producers</span>
          </nav>

          {/* Cart Link */}
          <a
            id="nav-cart-link"
            href="https://attimo-oil.myshopify.com/cart"
            target="_self"
            aria-label="Cart"
            className="cart-link text-white hover:text-white/80 transition-colors"
          >
            <ShoppingCart className="h-[22px] w-[22px]" />
            <span id="cart-badge" className="cart-badge" hidden>0</span>
          </a>

          {/* CTA - Hidden on mobile, visible on tablet+ */}
          <Button 
            onClick={onWaitlistClick}
            className="hidden md:block hover:bg-white/10 text-sm px-6 py-2 font-medium rounded-full transition-all duration-300 border border-white/20"
            style={{ fontFamily: 'Space Grotesk, monospace', backgroundColor: '#CDDB2D', color: '#494F35' }}
          >
            Join waitlist
          </Button>
          </div>
        </div>
      </div>
    </header>
  );
};