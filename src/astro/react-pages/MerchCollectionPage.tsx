import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Link } from "@/lib/router-stub";
import { DEFAULT_LOCALE, formatPrice } from "@/lib/i18n/config";
import type { ShopifyProduct } from "@/lib/shopify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

// /merch collection listing. English-only (default locale). Mirrors the oil
// product-card visual from OilProductWidgets but is fed from the Shopify
// "Merch" collection (build-time fetch). Merch is EUR with cents, so prices
// render with 2 decimals.
function MerchGrid({ products }: { products: ShopifyProduct[] }) {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header forceScrolled locale={DEFAULT_LOCALE} />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-8">
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Store header — left-aligned, like the reference. */}
          <div className="mb-12 md:mb-16">
            <h1
              className="mb-3"
              style={{
                fontFamily: "Beverly Drive, serif",
                color: "#1B4229",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.04em",
              }}
            >
              Merch
            </h1>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#1B4229",
                opacity: 0.55,
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                maxWidth: "520px",
                lineHeight: 1.6,
              }}
            >
              Goods for people who take their olive oil seriously.
            </p>
          </div>

          {products.length === 0 ? (
            <p style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6 }}>
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {products.map((p) => {
                const node = p.node;
                const variants = node.variants.edges.map((e) => e.node);
                const images = node.images?.edges?.map((e) => e.node) ?? [];
                const price = node.priceRange?.minVariantPrice;
                const soldOut = !variants.some((v) => v.availableForSale);

                // Hover reveals the OTHER SIDE of the same garment (e.g. the
                // back). Each variant's `.image` is that colour's FRONT mockup,
                // so the first gallery image that isn't one of those (and isn't
                // the default) is the back / alternate angle of the same item.
                const defaultImg = images[0] ?? variants[0]?.image;
                const variantFronts = new Set(
                  variants.map((v) => v.image?.url).filter(Boolean) as string[],
                );
                const hoverImg =
                  images.find(
                    (im) => im.url !== defaultImg?.url && !variantFronts.has(im.url),
                  ) ?? null;

                return (
                  <Link key={node.id} to={`/merch/${node.handle}`} className="group flex flex-col">
                    {/* Image — large, contained, transparent background so cream
                        mockups blend into the page (matches the PDP). On hover:
                        a very slight zoom + cross-fade to an alternate colour. */}
                    <div className="relative aspect-square overflow-hidden mb-4">
                      {defaultImg && (
                        <img
                          src={defaultImg.url}
                          alt={defaultImg.altText ?? node.title}
                          className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-[1.03] ${
                            hoverImg ? "group-hover:opacity-0" : ""
                          }`}
                        />
                      )}
                      {hoverImg && (
                        <img
                          src={hoverImg.url}
                          alt=""
                          aria-hidden
                          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>
                    {/* Title + price — left-aligned, small and quiet. */}
                    <h3
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#1B4229",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                      }}
                    >
                      {node.title}
                    </h3>
                    {price && (
                      <p
                        className="mt-0.5"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          color: "#1B4229",
                          opacity: 0.5,
                          fontSize: "0.95rem",
                        }}
                      >
                        {formatPrice(parseFloat(price.amount), DEFAULT_LOCALE, 2)}
                        {soldOut && <span className="ml-2">· Sold out</span>}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer locale={DEFAULT_LOCALE} />
      <Sonner />
    </div>
  );
}

export default function MerchCollectionPage({ products }: { products: ShopifyProduct[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MerchGrid products={products} />
    </QueryClientProvider>
  );
}
