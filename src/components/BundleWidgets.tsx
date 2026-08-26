import { Link } from "@/lib/router-stub";
import { DEFAULT_LOCALE, formatPrice, localizeHref, type Locale } from "@/lib/i18n/config";
import { TRIO_CONFIG } from "@/lib/trioBundle";
import { DUO_CONFIG } from "@/lib/duoBundle";
import type { BundleConfig } from "@/lib/bundleTypes";

// Origin flag per oil (Coratina/Nocellara = Italy, Picual = Spain).
const FLAG: Record<string, string> = { coratina: "🇮🇹", picual: "🇪🇸", nocellara: "🇮🇹" };

interface BundleWidgetsProps {
  locale?: Locale;
  heading?: string;
  subtitle?: string;
}

// Homepage bundle row — two photo cards (trio + duo) rendered directly beneath
// the single-variety oils and above the quiz CTA. Designed to slot into the
// OilProductWidgets container (no own <section>/zoom wrapper). Card image is
// each bundle's PDP hero photo (the duo currently reuses the trio photo as a
// placeholder).
export const BundleWidgets = ({
  locale = DEFAULT_LOCALE,
  heading = "Bundles",
  subtitle = "The more the merrier.",
}: BundleWidgetsProps = {}) => {
  const bundles: BundleConfig[] = [TRIO_CONFIG, DUO_CONFIG];

  return (
    <div className="mt-24 md:mt-32">
      <div className="text-center mb-14 md:mb-16">
        <h2
          className="mb-4 mx-auto"
          style={{ fontFamily: "Beverly Drive, serif", color: "#1B4229", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "0.05em" }}
        >
          {heading}
        </h2>
        <p
          className="mx-auto text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.5, fontSize: "clamp(1.4rem, 1.8vw, 1.8rem)", lineHeight: 1.7, maxWidth: "800px" }}
        >
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 max-w-[1100px] mx-auto">
        {bundles.map((b) => {
          const price = (locale.prices[b.priceKey] as number) ?? b.singlesTotal(locale);
          const singles = b.singlesTotal(locale);
          const saving = singles - price;
          return (
            <Link key={b.contentId} to={localizeHref(`/product/${b.contentId}`, locale)} className="group flex flex-col">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-7" style={{ backgroundColor: "#1B4229" }}>
                <img
                  src={b.image}
                  alt={b.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* label — format pill, top-right (small so it reads on any photo) */}
                <div className="absolute top-0 right-0 z-10 px-4 pt-4 md:px-5 md:pt-5 flex justify-end">
                  <span
                    className="oil-card-label whitespace-nowrap rounded-md px-2.5 py-1"
                    style={{ fontFamily: "UDC Working Man Sans, sans-serif", letterSpacing: "0.1em", color: "#FFFAEA", backgroundColor: "rgba(27,66,41,0.82)" }}
                  >
                    {b.badge.toUpperCase()}
                  </span>
                </div>

                {saving > 0 && (
                  <div className="absolute bottom-0 right-0 z-10 px-4 pb-4 md:px-5 md:pb-5">
                    <span
                      className="oil-card-label whitespace-nowrap rounded-md px-3 py-1.5"
                      style={{ fontFamily: "UDC Working Man Sans, sans-serif", letterSpacing: "0.1em", color: "#1B4229", backgroundColor: "#CDDB2D", textTransform: "uppercase" }}
                    >
                      Save {formatPrice(saving, locale)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <h3 className="mb-1.5" style={{ fontFamily: "Beverly Drive, serif", color: "#1B4229", fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)", letterSpacing: "0.04em", lineHeight: 1.32 }}>
                  {b.cardTitleLines
                    ? b.cardTitleLines.map((line, i) => <span key={i} className="block">{line}</span>)
                    : b.title}
                </h3>
                <p className="uppercase mb-3 flex items-center justify-center gap-x-3 gap-y-1 flex-wrap" style={{ fontFamily: "UDC Working Man Sans, sans-serif", color: "#1B4229", fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)", letterSpacing: "0.15em", opacity: 0.7 }}>
                  {b.contents.map((v) => (
                    <span key={v.handle} className="inline-flex items-center gap-1.5">
                      {v.name.split(" ")[0]}
                      <span className="normal-case" style={{ letterSpacing: 0, fontSize: "0.9em" }}>{FLAG[v.handle]}</span>
                    </span>
                  ))}
                </p>
                <p className="flex items-baseline gap-2" style={{ fontFamily: "UDC Working Man Sans, sans-serif", color: "#1B4229", fontSize: "clamp(1.35rem, 1.8vw, 1.8rem)", letterSpacing: "0.03em" }}>
                  <span>{formatPrice(price, locale)}</span>
                  <span className="line-through" style={{ opacity: 0.4, fontSize: "0.8em" }}>{formatPrice(singles, locale)}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
