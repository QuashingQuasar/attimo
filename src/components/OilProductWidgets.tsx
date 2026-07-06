import { useEffect, useRef, useState } from "react";
import { Link } from "@/lib/router-stub";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";
import { DEFAULT_LOCALE, formatPrice, localizeHref, shopifyContextForLocale, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { fetchProducts } from "@/lib/shopify";
import { resolveShopifyHandle, getProductContent } from "@/lib/productContent";
import { CORATINA_3L_IMAGE, CORATINA_3L_HANDLE } from "@/lib/coratina3L";

const oilDefs = [
  {
    name: "Coratina",
    nameDetail: "d'Italia",
    flavor: "Bold & Punchy",
    origin: "Puglia, Italy",
    flag: "🇮🇹",
    handle: "coratina" as const,
    image: coratinaImage,
    tagline: "A hit of healthy polyphenols",
  },
  {
    name: "Picual",
    nameDetail: "de España",
    flavor: "Green & Grassy",
    origin: "Jaén, Spain",
    flag: "🇪🇸",
    handle: "picual" as const,
    image: picualImage,
    tagline: "All-round goodness",
  },
  {
    name: "Nocellara",
    nameDetail: "d'Italia",
    flavor: "Gentle & Fruity",
    origin: "Sicily, Italy",
    flag: "🇮🇹",
    handle: "nocellara" as const,
    image: nocellaraImage,
    tagline: "Effortlessly likeable",
  },
];

interface OilProductWidgetsProps {
  locale?: Locale;
  /** Override the section heading (default: the homepage shop heading). */
  heading?: string;
  /** Override the section subtitle. */
  subtitle?: string;
  /** Anchor id for the section (default "oil-collection"). */
  sectionId?: string;
  /**
   * When provided, renders a chartreuse polyphenol badge on each card (keyed by
   * URL handle). Used by the high-polyphenol hub to present the range ranked by
   * polyphenol content. Undefined on the homepage → no badge, unchanged layout.
   */
  polyphenols?: Partial<Record<"coratina" | "picual" | "nocellara", string>>;
  /** Override the heading font (default Beverly Drive script). */
  headingFontFamily?: string;
  /** Show the per-bottle tagline line under the price (default true). */
  showTagline?: boolean;
  /** Override the quiz prompt line above the quiz CTA. */
  quizPrompt?: string;
}

export const OilProductWidgets = ({
  locale = DEFAULT_LOCALE,
  heading,
  subtitle,
  sectionId = "oil-collection",
  polyphenols,
  headingFontFamily = "Beverly Drive, serif",
  showTagline = true,
  quizPrompt,
}: OilProductWidgetsProps = {}) => {
  const t = getDict(locale);
  // Per-handle Shopify availability. `undefined` = not yet loaded or unknown
  // (treat as available — never accidentally hide an in-stock product).
  const [availability, setAvailability] = useState<Record<string, boolean>>({});
  // Coratina is also sold as a 3L bag-in-box. The card carries a small size
  // selector; picking 3L updates the shown price and deep-links into the PDP
  // with the box format preselected (?format=box).
  const [coratinaSize, setCoratinaSize] = useState<"bottle" | "box">("bottle");
  const coratinaBoxPrice = locale.prices.coratina3L ?? 89;
  // Once the visitor picks a size on the card, stop auto-switching it.
  const coratinaSizeTouched = useRef(false);

  useEffect(() => {
    let cancelled = false;
    fetchProducts(10, undefined, shopifyContextForLocale(locale))
      .then((products) => {
        if (cancelled) return;
        const map: Record<string, boolean> = {};
        for (const p of products) {
          const inStock = p.node.variants.edges.some(
            (v) => v.node.availableForSale,
          );
          map[p.node.handle] = inStock;
        }
        setAvailability(map);
      })
      .catch((err) => {
        console.warn("[OilProductWidgets] availability fetch failed:", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // When the Coratina bottle is sold out but the 3L box is in stock, default
  // the card to the box (unless the visitor already picked a size).
  useEffect(() => {
    if (coratinaSizeTouched.current) return;
    const bottleAvail = availability[resolveShopifyHandle("coratina")];
    const boxAvail = availability[CORATINA_3L_HANDLE];
    if (bottleAvail === false && boxAvail !== false) {
      setCoratinaSize("box");
    }
  }, [availability]);

  const coratinaBoxAvailable = availability[CORATINA_3L_HANDLE] ?? true;

  const oils = oilDefs.map((o) => {
    const shopifyHandle = resolveShopifyHandle(o.handle);
    // Default to true so a fetch failure leaves cards looking normal.
    const isAvailable = availability[shopifyHandle] ?? true;
    // Per-product shipping notice (e.g. "Ships in 5–7 days" for products on
    // restock). Sourced from productContent.ts so PDP and home card stay in
    // sync — undefined means the product ships normally.
    const shippingNotice = getProductContent(o.handle, locale).shippingNotice;
    // The Coratina card reflects the SELECTED format's stock — the 3L box is in
    // stock even when the 500ml bottle is sold out, so the box view hides the
    // out-of-stock labels.
    const effectiveAvailable =
      o.handle === "coratina" && coratinaSize === "box"
        ? coratinaBoxAvailable
        : isAvailable;
    return {
      ...o,
      price: locale.prices[o.handle],
      isAvailable,
      effectiveAvailable,
      shippingNotice,
    };
  });
  return (
    <section id={sectionId}
    className="snap-start pt-14 md:pt-20 pb-10 md:pb-14 lg:pb-20 px-4 md:px-6 relative overflow-hidden scroll-mt-0"
    style={{ backgroundColor: "hsl(var(--section-light))" }}>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          "radial-gradient(circle at 1px 1px, #1B4229 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />


      <div className="relative z-10 mx-auto" style={{ maxWidth: "1400px", zoom: 0.79 }}>
        <div className="text-center mb-14 md:mb-20">
          <h2
            className="mb-4 mx-auto collection-heading-mobile-width"
            style={{
              fontFamily: headingFontFamily,
              color: "#1B4229",
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              letterSpacing: "0.05em"
            }}>{heading ?? t.oilCollection.heading}
          </h2>
          <p
            className="mx-auto text-center collection-subtitle-mobile-width collection-subtitle-mobile-size"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              opacity: 0.5,
              fontSize: "clamp(1.4rem, 1.8vw, 1.8rem)",
              lineHeight: 1.7,
              maxWidth: "800px"
            }}>{subtitle ?? t.oilCollection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-10">
          {oils.map((oil) =>
          <Link
            key={oil.handle}
            to={
              oil.handle === "coratina" && coratinaSize === "box"
                ? `${localizeHref("/product/coratina", locale)}?format=box`
                : localizeHref(`/product/${oil.handle}`, locale)
            }
            className="group flex flex-col">

              <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-7 max-w-[85%] md:max-w-full mx-auto"
              style={{ backgroundColor: "#1B4229" }}>

                <div
                className="absolute inset-0 opacity-[0.04] z-[1]"
                style={{
                  backgroundImage:
                  "radial-gradient(ellipse at 30% 20%, #FFFAEA 0.5px, transparent 0.5px), radial-gradient(ellipse at 70% 80%, #FFFAEA 0.3px, transparent 0.3px)",
                  backgroundSize: "18px 18px, 14px 14px"
                }} />


                <div className="absolute top-0 left-0 right-0 z-10 px-3 pt-3 md:px-4 md:pt-4 lg:px-5 lg:pt-5 flex justify-between items-start">
                  <span
                  className="oil-card-label whitespace-nowrap"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                    {oil.flag} {oil.origin.toUpperCase()}
                  </span>
                  <span
                  className="oil-card-label whitespace-nowrap"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                    {oil.handle === "coratina" && coratinaSize === "box"
                      ? t.product.formatBoxVolume
                      : t.oilCollection.size}
                  </span>
                </div>


                {(() => {
                  const showBox = oil.handle === "coratina" && coratinaSize === "box";
                  return (
                    <img
                      src={showBox ? CORATINA_3L_IMAGE : oil.image}
                      alt={showBox ? `${oil.name} 3L bag-in-box` : `${oil.name} olive oil bottle`}
                      // Both fill the tile with object-cover; the box gets a
                      // lighter zoom than the bottle so the whole box stays in
                      // frame while still reading large.
                      className={`w-full h-full object-cover relative z-[2] transition-transform duration-700 ${
                        showBox
                          ? "scale-[1.15] group-hover:scale-[1.18]"
                          : "scale-[1.25] group-hover:scale-[1.28]"
                      }`}
                    />
                  );
                })()}

                {!oil.effectiveAvailable && (
                  <div className="absolute bottom-0 right-0 z-10 px-3 pb-3 md:px-4 md:pb-4 lg:px-5 lg:pb-5">
                    <span
                      className="oil-card-label whitespace-nowrap"
                      style={{
                        fontFamily: "UDC Working Man Sans, sans-serif",
                        letterSpacing: "0.1em",
                        color: "#1B4229",
                      }}
                    >
                      {t.oilCollection.backSoon}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <h3
                className="mb-1.5"
                style={{
                  fontFamily: "Beverly Drive, serif",
                  color: "#1B4229",
                  fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)",
                  letterSpacing: "0.04em"
                }}>

                  {oil.name} {oil.nameDetail}
                </h3>

                <p
                className="uppercase mb-3"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: "#1B4229",
                  fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)",
                  letterSpacing: "0.15em",
                  opacity: 0.7
                }}>

                  {t.products.flavour[oil.handle]}
                </p>

                {polyphenols?.[oil.handle] && (
                  <p
                    className="rounded-full px-4 py-1.5 mb-3 whitespace-nowrap"
                    style={{
                      fontFamily: "UDC Working Man Sans, sans-serif",
                      backgroundColor: "#1B4229",
                      color: "#CDDB2D",
                      fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)",
                      letterSpacing: "0.08em",
                    }}>
                    {polyphenols[oil.handle]} mg/kg POLYPHENOLS
                  </p>
                )}

                {oil.handle === "coratina" && (
                  <div className="flex gap-2 mb-3" role="group" aria-label={t.oilCollection.size}>
                    {(["bottle", "box"] as const).map((size) => {
                      const active = coratinaSize === size;
                      const label =
                        size === "box"
                          ? t.product.formatBoxVolume
                          : t.product.formatBottleVolume;
                      return (
                        <button
                          key={size}
                          type="button"
                          aria-pressed={active}
                          onClick={(e) => {
                            // Card is a Link — keep the chip from navigating.
                            e.preventDefault();
                            e.stopPropagation();
                            coratinaSizeTouched.current = true;
                            setCoratinaSize(size);
                          }}
                          className="rounded-full transition-all duration-200"
                          style={{
                            fontFamily: "UDC Working Man Sans, sans-serif",
                            fontSize: "clamp(1.0rem, 1.25vw, 1.25rem)",
                            letterSpacing: "0.08em",
                            padding: "0.35rem 1.1rem",
                            border: "2px solid #1B4229",
                            backgroundColor: active ? "#1B4229" : "transparent",
                            color: active ? "#CDDB2D" : "#1B4229",
                          }}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                )}

                <p
                className="mb-3"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: "#1B4229",
                  fontSize: "clamp(1.35rem, 1.8vw, 1.8rem)",
                  letterSpacing: "0.03em"
                }}>

                  {formatPrice(
                    oil.handle === "coratina" && coratinaSize === "box"
                      ? coratinaBoxPrice
                      : oil.price,
                    locale,
                  )}
                </p>

                {showTagline && (
                  <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#1B4229",
                    fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)",
                    opacity: 0.5,
                    lineHeight: 1.6
                  }}>

                    {t.products.tagline[oil.handle]}
                  </p>
                )}

                {!oil.effectiveAvailable && (
                  <span
                    className="oil-card-label whitespace-nowrap rounded-md px-3 py-1.5 mt-3"
                    style={{
                      fontFamily: "UDC Working Man Sans, sans-serif",
                      letterSpacing: "0.1em",
                      color: "#CDDB2D",
                      backgroundColor: "#1B4229",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.oilCollection.soldOut}
                  </span>
                )}
                {oil.effectiveAvailable && oil.shippingNotice && (
                  <span
                    className="oil-card-label whitespace-nowrap rounded-md px-3 py-1.5 mt-3"
                    style={{
                      fontFamily: "UDC Working Man Sans, sans-serif",
                      letterSpacing: "0.1em",
                      color: "#CDDB2D",
                      backgroundColor: "#1B4229",
                      textTransform: "uppercase",
                    }}
                  >
                    {oil.shippingNotice}
                  </span>
                )}
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-20 md:mt-28">
          <p
            className="mb-7 text-sm md:text-base lg:text-lg"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              fontSize: "clamp(1.4rem, 1.8vw, 1.8rem)",
              opacity: 0.85
            }}>

            {quizPrompt ?? t.oilCollection.quizPrompt}
          </p>
          <Link
            to={localizeHref("/quiz", locale)}
            className="text-sm md:text-base inline-flex items-center gap-3 px-12 py-5 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              backgroundColor: "#CDDB2D",
              color: "#1B4229",
              fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)",
              letterSpacing: "0.05em"
            }}>

            {t.oilCollection.quizCta}
          </Link>
        </div>
      </div>
    </section>);

};