import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import navbarLogo from "@/assets/navbar-logo-latest.svg";
import coratinaImage from "@/assets/bottle-coratina.jpg";
import picualImage from "@/assets/bottle-picual.jpg";
import nocellaraImage from "@/assets/bottle-nocellara.jpg";
import { CartDrawer } from "./CartDrawer";

const shopProducts = [
  { name: "Coratina d'Italia", flavor: "Bold & Punchy", handle: "galega-from-alentejo", image: coratinaImage },
  { name: "Picual de España", flavor: "Green & Grassy", handle: "picual", image: picualImage },
  { name: "Nocellara d'Italia", flavor: "Gentle & Fruity", handle: "nocellara", image: nocellaraImage },
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
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setShopOpen(true);
    requestAnimationFrame(() => setDropdownVisible(true));
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownVisible(false);
      setShopOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-6 ${(isScrolled || shopOpen) ? 'shadow-lg' : 'bg-transparent'}`}
      style={{ backgroundColor: (isScrolled || shopOpen) ? '#1B4229' : 'transparent', transition: 'box-shadow 0.3s ease' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/v2">
              <img src={navbarLogo} alt="ATTIMO" className="h-8 md:h-10 lg:h-12 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            <div className="relative hidden md:block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="text-white hover:opacity-80 transition-opacity text-base md:text-lg font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Shop
              </button>
            </div>
            <Link to="/blog" className="hidden md:block text-white hover:opacity-80 transition-opacity text-base md:text-lg font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Blog
            </Link>
            <CartDrawer />
          </div>
        </div>
      </div>

      {shopOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 shadow-2xl overflow-hidden"
          style={{
            backgroundColor: '#1B4229',
            opacity: dropdownVisible ? 1 : 0,
            maxHeight: dropdownVisible ? '90vh' : '0px',
            transition: 'opacity 0.25s ease, max-height 0.3s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto px-12 py-10" style={{ maxWidth: '1400px' }}>
            <div className="grid grid-cols-3 gap-10">
              {shopProducts.map((product) => (
                <Link key={product.handle} to={`/product/${product.handle}`} onClick={() => setShopOpen(false)} className="flex flex-col items-center gap-5 group">
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 scale-[1.25] group-hover:scale-[1.28]" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: '2rem', letterSpacing: '0.03em' }}>
                      {product.name}
                    </span>
                    <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: '1.25rem', letterSpacing: '0.1em' }}>
                      {product.flavor}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
