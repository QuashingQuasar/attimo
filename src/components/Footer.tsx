import attimoLogo from '@/assets/attimo-footer-logo.svg?url';
import { DEFAULT_LOCALE, localizeHref, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface FooterProps {
  locale?: Locale;
}

const InstagramIcon = () => (
  <a href="https://www.instagram.com/attimo.oil" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity inline-flex">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B3E58C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  </a>
);

export const Footer = ({ locale = DEFAULT_LOCALE }: FooterProps = {}) => {
  const t = getDict(locale);
  const shippingHref = localizeHref("/shipping", locale);
  const ambassadorsHref = localizeHref("/ambassadors", locale);

  const headingStyle: React.CSSProperties = {
    fontFamily: "UDC Working Man Sans, sans-serif",
    color: "#FFFAEA",
    letterSpacing: "0.12em",
    fontSize: "0.8rem",
    textTransform: "uppercase",
  };
  const linkClass = "hover:underline transition-colors";
  const linkStyle: React.CSSProperties = { fontFamily: "Space Grotesk, sans-serif", color: "#B3E58C", fontSize: "0.875rem" };

  // Grouped link columns. The /high-polyphenol-olive-oil hub is English-only for
  // now, so it's shown only on EN markets; add localized variants here when the
  // FR/DE hub pages exist.
  const shopLinks = [
    { label: "Coratina", href: localizeHref("/product/coratina", locale) },
    { label: "Picual", href: localizeHref("/product/picual", locale) },
    { label: "Nocellara", href: localizeHref("/product/nocellara", locale) },
    ...(locale.lang === "en"
      ? [
          { label: "High-Polyphenol Olive Oil", href: "/high-polyphenol-olive-oil" },
          { label: "Early Harvest Olive Oil", href: "/early-harvest-olive-oil" },
        ]
      : []),
    { label: t.nav.merch, href: "/merch" },
  ];
  const learnLinks = [
    { label: t.footer.blog, href: "/blog" },
    { label: t.nav.quiz, href: localizeHref("/quiz", locale) },
    { label: t.footer.ambassadors, href: ambassadorsHref },
  ];
  const companyLinks = [
    { label: t.footer.shipping, href: shippingHref },
    { label: t.footer.contact, href: "/contact" },
    { label: t.footer.manageOrders, href: "https://shop.attimo-oil.com/account" },
    { label: t.footer.privacy, href: "/privacy" },
    { label: t.footer.terms, href: "/terms" },
  ];

  const Column = ({ heading, links }: { heading: string; links: { label: string; href: string }[] }) => (
    <div>
      <h4 className="mb-4" style={headingStyle}>{heading}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={linkClass} style={linkStyle}>{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="py-14 md:py-20 lg:py-24 px-6" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <img src={attimoLogo} alt="ATTIMO" className="h-14 w-auto self-start" />
            <InstagramIcon />
          </div>

          <Column heading={t.footer.shop} links={shopLinks} />
          <Column heading={t.footer.learn} links={learnLinks} />
          <Column heading={t.footer.company} links={companyLinks} />
        </div>

        <div className="border-t pt-6" style={{ borderColor: '#B3E58C' }}>
          <p className="text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#B3E58C' }}>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
