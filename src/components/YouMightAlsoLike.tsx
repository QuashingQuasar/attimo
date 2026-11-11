import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "@/lib/router-stub";
import coratinaImage from "@/assets/bottle-coratina.jpg?url";
import picualImage from "@/assets/bottle-picual.jpg?url";
import nocellaraImage from "@/assets/bottle-nocellara.jpg?url";
import { DEFAULT_LOCALE, localizeHref, salePrice, shopifyContextForLocale, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { OilCardCta, SOLD_OUT_IMAGE_STYLE, addBottleFromCard } from "@/components/OilCardCta";
import { resolveShopifyHandle } from "@/lib/productContent";

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
    tagline: "Loved by everyone",
  },
];


interface YouMightAlsoLikeProps {
  currentHandle?: string;
  accentColor?: string;
  locale?: Locale;
  /** Products the page already holds; seeds stock so the cards do not flash
   *  a buy button before the live check returns. */
  products?: ShopifyProduct[];
  /** Review aid (the product page's ?state= switch): show every card in stock. */
  forceAvailable?: boolean;
}

// Helper: determine if a hex color is "light" (needs dark text) or "dark" (needs light text)
const isLightColor = (hex: string): boolean => {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

const indexProducts = (products: ShopifyProduct[]) => {
  const stock: Record<string, boolean> = {};
  const byHandle: Record<string, ShopifyProduct> = {};
  for (const p of products) {
    stock[p.node.handle] = p.node.variants.edges.some((v) => v.node.availableForSale);
    byHandle[p.node.handle] = p;
  }
  return { stock, byHandle };
};

export const YouMightAlsoLike = ({ currentHandle, accentColor, locale = DEFAULT_LOCALE, products, forceAvailable = false }: YouMightAlsoLikeProps) => {
  const t = getDict(locale);
  // EN keeps the component's own copy verbatim (no regression); FR pulls the
  // shared flavour/tagline from the dictionary.
  const allOils = oilDefs.map((o) => ({
    ...o,
    // Regular price and, in a sale, the sale price; the card's button marks
    // the sale the same way the homepage cards do.
    price: locale.prices[o.handle],
    salePrice: salePrice(locale, o.handle),
    flavor: locale.lang !== "en" ? t.products.flavour[o.handle] : o.flavor,
    tagline: locale.lang !== "en" ? t.products.tagline[o.handle] : o.tagline,
  }));
  const otherOils = allOils.filter((oil) => oil.handle !== currentHandle);

  // Live availability per Shopify handle, same source as the homepage cards
  // (fetchProducts, so the FORCE_SOLD_OUT override is included). A sold-out oil
  // must NOT look purchasable here — it just links through to its own PDP.
  const seed = indexProducts(products ?? []);
  const [availability, setAvailability] = useState<Record<string, boolean>>(seed.stock);
  // The product nodes, so ADD TO CART can hand the cart the real variant.
  const [productsByHandle, setProductsByHandle] = useState<Record<string, ShopifyProduct>>(seed.byHandle);
  const addItem = useCartStore((state) => state.addItem);
  useEffect(() => {
    let cancelled = false;
    fetchProducts(10, undefined, shopifyContextForLocale(locale))
      .then((fetched) => {
        if (cancelled) return;
        const { stock, byHandle } = indexProducts(fetched);
        setAvailability(stock);
        setProductsByHandle(byHandle);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Fixed light bg so the section visually separates from BlogSection below.
  const bgColor = "#FFFAEA";
  const textColor = "#1B4229";

  return (
    <section
      className="py-14 md:py-20 lg:py-24 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}>
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          `radial-gradient(circle at 1px 1px, ${textColor} 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1400px", zoom: 0.87 }}>
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="mb-4 mx-auto"
            style={{
              fontFamily: "Beverly Drive, serif",
              color: textColor,
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              letterSpacing: "0.05em"
            }}>
            
            {t.moreVarieties}
          </h2>
        </div>

        <div
          style={{ "--swipe-bleed": "1.15rem", "--swipe-gap": "1.5rem", "--swipe-card": "78%" } as React.CSSProperties}
          className={`swipe-row-md grid grid-cols-1 gap-16 lg:gap-10 mx-auto ${
          otherOils.length === 2 ?
          "lg:grid-cols-2 max-w-[950px]" :
          "lg:grid-cols-3"}`
          }>
          
          {otherOils.map((oil) => {
          const soldOut = !forceAvailable && availability[resolveShopifyHandle(oil.handle)] === false;
          const onSale = oil.salePrice !== undefined && oil.salePrice < oil.price;
          return (
          <Link
            key={oil.handle}
            to={localizeHref(`/product/${oil.handle}`, locale)}
            className="group flex flex-col">
            
              <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-7 w-full md:max-w-[85%] mx-auto"
              style={{ backgroundColor: "#1B4229" }}>
              
                <div
                className="absolute inset-0 opacity-[0.04] z-[1]"
                style={{
                  backgroundImage:
                  "radial-gradient(ellipse at 30% 20%, #FFFAEA 0.5px, transparent 0.5px), radial-gradient(ellipse at 70% 80%, #FFFAEA 0.3px, transparent 0.3px)",
                  backgroundSize: "18px 18px, 14px 14px"
                }} />
              

                <div className="absolute top-0 left-0 right-0 z-10 px-5 pt-5 flex justify-between items-start">
                  <span
                  className="oil-card-label"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                  
                    {oil.flag} {oil.origin.toUpperCase()}
                  </span>
                  <span
                  className="oil-card-label"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    letterSpacing: "0.1em",
                    color: "#1B4229"
                  }}>
                  
                    {t.oilCollection.size}
                  </span>
                </div>

                <img
                src={oil.image}
                alt={`${oil.name} olive oil bottle`}
                className="w-full h-full object-cover relative z-[2] transition-transform duration-700 scale-[1.25] group-hover:scale-[1.28]"
                style={soldOut ? SOLD_OUT_IMAGE_STYLE : undefined} />
              
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <h3
                className="mb-1.5"
                style={{
                  fontFamily: "Beverly Drive, serif",
                  color: textColor,
                  fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)",
                  letterSpacing: "0.04em"
                }}>
                
                  {oil.name} {oil.nameDetail}
                </h3>

                <p
                className="uppercase mb-3"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  color: textColor,
                  fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)",
                  letterSpacing: "0.15em",
                  opacity: 0.7
                }}>
                
                  {oil.flavor}
                </p>

                {/* Same button and rules as the homepage cards: in stock it adds
                    the bottle and marks a sale price; sold out it is a plain
                    SOLD OUT and the card links to that oil's page. */}
                <OilCardCta
                  available={!soldOut}
                  soldOutMode="soldOut"
                  price={onSale ? oil.salePrice! : oil.price}
                  regularPrice={onSale ? oil.price : undefined}
                  locale={locale}
                  onClick={(e: MouseEvent) => {
                    if (soldOut) return;
                    const product = productsByHandle[resolveShopifyHandle(oil.handle)];
                    // Products not loaded yet: let the card link open the oil's page.
                    if (!product) return;
                    e.preventDefault();
                    e.stopPropagation();
                    addBottleFromCard({ product, price: onSale ? oil.salePrice! : oil.price, locale, addItem });
                  }} />

                <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  color: textColor,
                  fontSize: "clamp(1.18rem, 1.46vw, 1.46rem)",
                  opacity: 0.5,
                  lineHeight: 1.6
                }}>
                
                  {oil.tagline}
                </p>

              </div>
            </Link>
          );
          })}
        </div>
      </div>
    </section>);

};