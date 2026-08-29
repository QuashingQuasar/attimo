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
import { TRIO_CONFIG } from "@/lib/trioBundle";
import { DUO_CONFIG } from "@/lib/duoBundle";

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
  { name: "Harvest '25 Full Collection", handle: "trio", image: "/trio-collection.webp", sub: "3 × 500 ml" },
  { name: "Harvest '25 Italian Duo", handle: "duo", image: "/duo-collection.webp", sub: "2 × 500 ml" },
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

  // Localized bundle display names, sourced from each bundle's framing so the
  // dropdown matches the PDP titles across locales.
  const bundleName: Record<string, string> = {
    trio: (TRIO_CONFIG.framing[locale.lang] ?? TRIO_CONFIG.framing.en).title,
    duo: (DUO_CONFIG.framing[locale.lang] ?? DUO_CONFIG.framing.en).title,
  };

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
          <div className="mx-auto px-6 md:px-10 py-4 md:py-6" style={{ maxWidth: '820px' }}>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6">
              {shopProducts.map((product) => (
                <Link key={product.handle} to={localizeHref(`/product/${product.handle}`, locale)} onClick={() => setShopOpen(false)} className="flex md:flex-col items-center gap-4 md:gap-5 group">
                  <div className="w-28 h-28 md:w-full md:aspect-[6/7] md:h-auto rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0" style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center transition-transform duration-500 scale-[1.05] group-hover:scale-[1.08]" />
                  </div>
                  <div className="flex flex-col md:items-center gap-0.5 md:gap-1">
                    <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: 'clamp(0.9rem, 1.15vw, 1.1rem)', letterSpacing: '0.03em' }}>
                      {product.name}
                    </span>
                    <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: 'clamp(0.72rem, 0.85vw, 0.95rem)', letterSpacing: '0.1em' }}>
                      {t.products.flavour[product.handle]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bundles — vertical cards matching the single-unit cards above */}
            <div className="mt-7 md:mt-8">
              <p className="uppercase mb-4 text-center md:text-left" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: 'rgba(255,250,234,0.65)', fontSize: '1.1rem', letterSpacing: '0.14em' }}>
                {t.bundle.sectionHeading}
              </p>
              {/* 2 cards at single-card width (w-2/3, grid-cols-2), left-aligned
                  under the first two singles. Same card markup as the singles. */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-6 md:w-2/3">
                {shopBundles.map((b) => (
                  <Link key={b.handle} to={localizeHref(`/product/${b.handle}`, locale)} onClick={() => setShopOpen(false)} className="flex md:flex-col items-center gap-4 md:gap-5 group">
                    <div className="w-28 h-28 md:w-full md:aspect-[6/7] md:h-auto rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0" style={{ backgroundColor: 'rgba(255,250,234,0.06)' }}>
                      <img src={b.image} alt={bundleName[b.handle]} className="w-full h-full object-cover object-center transition-transform duration-500 scale-[1.05] group-hover:scale-[1.08]" />
                    </div>
                    <div className="flex flex-col md:items-center gap-0.5 md:gap-1">
                      <span style={{ fontFamily: 'Beverly Drive, serif', color: '#FFFAEA', fontSize: 'clamp(0.9rem, 1.15vw, 1.1rem)', letterSpacing: '0.03em' }}>
                        {bundleName[b.handle]}
                      </span>
                      <span className="uppercase" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#B3E58C', fontSize: 'clamp(0.72rem, 0.85vw, 0.95rem)', letterSpacing: '0.1em' }}>
                        {b.sub}
                      </span>
                    </div>
                  </Link>
                ))}
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
