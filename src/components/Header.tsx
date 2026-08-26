import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Link } from "@/lib/router-stub";
import navbarLogo from "@/assets/navbar-logo-latest.svg?url";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";
import { CartDrawer } from "./CartDrawer";
import { CurrencySelector } from "./CurrencySelector";
import { DEFAULT_LOCALE, localizeHref, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

// Proper names + origins stay verbatim across locales; the flavour descriptor
// is pulled from the shared dictionary so it translates once. `image` and
// `handle` (used for the dictionary key) are locale-independent.
const shopProducts = [
  { name: "Coratina d'Italia", handle: "coratina" as const, image: coratinaImage },
  { name: "Picual de España", handle: "picual" as const, image: picualImage },
  { name: "Nocellara d'Italia", handle: "nocellara" as const, image: nocellaraImage },
];

// Bundles shown under the three singles in the Shop dropdown. Images are the
// PDP hero shots in public/.
const shopBundles = [
  { name: "Full Collection", handle: "trio", image: "/trio-collection.png", sub: "3 × 500 ml" },
  { name: "Italian Duo", handle: "duo", image: "/duo-collection.png", sub: "2 × 500 ml" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = getDict(locale);

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
            {/* Desktop nav links — collapsed into the hamburger on mobile. */}
            <nav className="hidden md:flex items-center gap-3 md:gap-6">
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to={`${localizeHref("/", locale)}#shop`} className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t.nav.shop}
                </Link>
              </div>
              <Link to={localizeHref("/blog", locale)} className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t.nav.blog}
              </Link>
              <Link to={localizeHref("/quiz", locale)} className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t.nav.quiz}
              </Link>
              <Link to="/merch" className={`${darkNav && !solidBackground ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity text-base md:text-lg font-medium`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t.nav.merch}
              </Link>
            </nav>
            <CartDrawer darkIcon={darkNav && !solidBackground} locale={locale} />
            <CurrencySelector
              locale={locale}
              placement="down"
              triggerColor={darkNav && !solidBackground ? '#1B4229' : '#FFFFFF'}
            />
            {/* Mobile hamburger — toggles the menu below. */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              style={{ color: darkNav && !solidBackground ? '#1B4229' : '#FFFFFF' }}
            >
              {mobileOpen ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6.5" x2="21" y2="6.5" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17.5" x2="21" y2="17.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {shopOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 shadow-2xl overflow-y-auto overflow-x-hidden"
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
                      {t.products.flavour[product.handle]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bundles — vertical cards matching the single-unit cards above */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8" style={{ borderTop: '1px solid rgba(255,250,234,0.14)' }}>
              <p className="uppercase mb-6 text-center md:text-left" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: 'rgba(255,250,234,0.5)', fontSize: '0.8rem', letterSpacing: '0.14em' }}>
                Bundles
              </p>
              {/* Same scale(0.9) as the singles grid so card sizes match; the
                  2-card grid is capped at 2/3 width + centred so each card is
                  the same width as a single and the pair sits centred, not left. */}
              <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-8 md:w-2/3 md:mx-auto">
                  {shopBundles.map((b) => (
                    <Link key={b.handle} to={localizeHref(`/product/${b.handle}`, locale)} onClick={() => setShopOpen(false)} className="flex md:flex-col items-center gap-4 md:gap-5 group">
                      <div className="w-28 h-28 md:w-full md:aspect-[3/4] md:h-auto rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0" style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}>
                        <img src={b.image} alt={b.name} className="w-full h-full object-cover object-center transition-transform duration-500 scale-[1.05] group-hover:scale-[1.08]" />
                      </div>
                      <div className="flex flex-col md:items-center gap-0.5 md:gap-1">
                        <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: 'clamp(1.4rem, 2vw, 2rem)', letterSpacing: '0.03em' }}>
                          {b.name}
                        </span>
                        <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: 'clamp(0.9rem, 1vw, 1.25rem)', letterSpacing: '0.1em' }}>
                          {b.sub}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu — the three oils (like the desktop Shop dropdown) plus the
          page links, opened by the hamburger. */}
      {mobileOpen && (
        <div
          className="md:hidden absolute left-0 right-0 top-full z-50 shadow-2xl"
          style={{ backgroundColor: '#1B4229' }}
        >
          <nav className="flex flex-col px-6 py-4">
            {shopProducts.map((product) => (
              <Link
                key={product.handle}
                to={localizeHref(`/product/${product.handle}`, locale)}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 py-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-11 h-11 rounded-md object-cover flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}
                />
                <span className="flex flex-col">
                  <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: '1.3rem', letterSpacing: '0.02em' }}>
                    {product.name}
                  </span>
                  <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                    {t.products.flavour[product.handle]}
                  </span>
                </span>
              </Link>
            ))}
            {[
              { label: t.nav.blog, to: localizeHref("/blog", locale) },
              { label: t.nav.quiz, to: localizeHref("/quiz", locale) },
              { label: t.nav.merch, to: "/merch" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-white text-lg font-medium"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
