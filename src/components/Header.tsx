import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Link } from "@/lib/router-stub";
import navbarLogo from "@/assets/navbar-logo-latest.svg?url";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";
import { CartDrawer } from "./CartDrawer";
import { DEFAULT_LOCALE, localizeHref, type Locale } from "@/lib/i18n/config";

const shopProducts = [
  { name: "Coratina d'Italia", flavor: "Bold & Punchy", handle: "coratina", image: coratinaImage },
  { name: "Picual de España", flavor: "Green & Grassy", handle: "picual", image: picualImage },
  { name: "Nocellara d'Italia", flavor: "Gentle & Fruity", handle: "nocellara", image: nocellaraImage },
];

interface HeaderProps {
  /**
   * Legacy hook for the waitlist CTA — currently a no-op everywhere it's
   * passed. Optional so the component can be mounted from an Astro island
   * (functions don't cross the client-island boundary).
   */
  onWaitlistClick?: () => void;
  forceScrolled?: boolean;
  forceTransparent?: boolean;
  darkNav?: boolean;
  locale?: Locale;
}
export const Header = ({
  onWaitlistClick: _onWaitlistClick,
  forceScrolled = false,
  forceTransparent: _forceTransparent = false,
  darkNav = false,
  locale = DEFAULT_LOCALE,
}: HeaderProps) => {
  // Header is no longer sticky. Background is transparent by default so the
  // hero shows through; solid only when (a) the consuming page passes
  // forceScrolled (non-hero pages like blog/contact where transparent text
  // on cream would be unreadable) or (b) the Shop dropdown is open.
  const [shopOpen, setShopOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const solidBackground = forceScrolled || shopOpen;

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
      className={`absolute top-0 left-0 right-0 z-50 py-6 ${solidBackground ? 'shadow-lg' : 'bg-transparent'}`}
      style={{
        backgroundColor: solidBackground ? '#1B4229' : 'transparent',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={localizeHref("/", locale)}>
              <img src={navbarLogo} alt="ATTIMO" className="h-7 md:h-9 lg:h-11 w-auto" style={darkNav && !solidBackground ? { filter: 'brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(1200%) hue-rotate(100deg) brightness(0.7)' } : undefined} />
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to={`${localizeHref("/", locale)}#shop`} className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Shop
              </Link>
            </div>
            <Link to="/blog" className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Blog
            </Link>
            <Link to="/quiz" className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Quiz
            </Link>
            <CartDrawer darkIcon={darkNav && !solidBackground} locale={locale} />
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
          <div className="mx-auto px-6 md:px-12 py-5 md:py-8" style={{ maxWidth: '1200px' }}>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-8" style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
              {shopProducts.map((product) => (
                <Link key={product.handle} to={localizeHref(`/product/${product.handle}`, locale)} onClick={() => setShopOpen(false)} className="flex md:flex-col items-center gap-4 md:gap-5 group">
                  <div className="w-28 h-28 md:w-full md:aspect-[3/4] md:h-auto rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0" style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center transition-transform duration-500 scale-[1.05] group-hover:scale-[1.08]" />
                  </div>
                  <div className="flex flex-col md:items-center gap-0.5 md:gap-1">
                    <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: 'clamp(1.4rem, 2vw, 2rem)', letterSpacing: '0.03em' }}>
                      {product.name}
                    </span>
                    <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: 'clamp(0.9rem, 1vw, 1.25rem)', letterSpacing: '0.1em' }}>
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
