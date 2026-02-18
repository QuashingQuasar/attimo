import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import navbarLogo from "@/assets/navbar-logo-latest.svg";
import bottleImage from "@/assets/attimo-bottle-final.jpg";
import { CartDrawer } from "./CartDrawer";

const shopProducts = [
  { name: "Coratina", handle: "galega-from-alentejo", image: bottleImage },
  { name: "Picual", handle: "picual", image: bottleImage },
  { name: "Nocellara", handle: "nocellara", image: bottleImage },
];

interface HeaderProps {
  onWaitlistClick: () => void;
  forceScrolled?: boolean;
}
export const Header = ({
  onWaitlistClick,
  forceScrolled = false,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [shopOpen, setShopOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'bg-transparent'}`}
      style={isScrolled ? { backgroundColor: '#1B4229' } : undefined}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={navbarLogo} alt="ATTIMO" className="h-8 md:h-10 lg:h-12 w-auto" />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            {/* Shop dropdown */}
            <div ref={shopRef} className="relative hidden md:block">
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="text-white hover:opacity-80 transition-opacity text-base md:text-lg font-medium"
                style={{ fontFamily: 'Space Grotesk, monospace' }}
              >
                Shop
              </button>

              {shopOpen && (
                <div
                  className="absolute top-full right-0 mt-4 rounded-2xl shadow-2xl p-5 z-50 flex gap-5"
                  style={{ backgroundColor: '#1B4229', minWidth: '420px' }}
                >
                  {shopProducts.map((product) => (
                    <Link
                      key={product.handle}
                      to={`/product/${product.handle}`}
                      onClick={() => setShopOpen(false)}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div
                        className="w-28 h-36 rounded-xl overflow-hidden"
                        style={{ backgroundColor: 'rgba(255,250,234,0.08)' }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Beverly Drive, serif',
                          color: '#FFFAEA',
                          fontSize: '1rem',
                        }}
                      >
                        {product.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* New Harvest link */}
            <button
              onClick={onWaitlistClick}
              className="hidden md:block text-white hover:opacity-80 transition-opacity text-base md:text-lg font-medium"
              style={{ fontFamily: 'Space Grotesk, monospace' }}
            >
              New Harvest
            </button>

            {/* Cart Drawer */}
            <CartDrawer />

            {/* Shop CTA button */}
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
                color: '#494F35',
              }}
            >
              Shop
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
