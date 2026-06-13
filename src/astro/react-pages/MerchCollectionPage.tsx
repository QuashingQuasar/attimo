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

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="mb-4"
              style={{
                fontFamily: "Beverly Drive, serif",
                color: "#1B4229",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "0.04em",
              }}
            >
              Merch
            </h1>
            <p
              className="mx-auto"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#1B4229",
                opacity: 0.6,
                fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                maxWidth: "560px",
                lineHeight: 1.6,
              }}
            >
              Goods for people who take their olive oil seriously.
            </p>
          </div>

          {products.length === 0 ? (
            <p
              className="text-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6 }}
            >
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {products.map((p) => {
                const node = p.node;
                const img = node.images?.edges?.[0]?.node;
                const price = node.priceRange?.minVariantPrice;
                const soldOut = !node.variants.edges.some((v) => v.node.availableForSale);
                return (
                  <Link key={node.id} to={`/merch/${node.handle}`} className="group flex flex-col">
                    <div
                      className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-5"
                      style={{ backgroundColor: "#1B4229" }}
                    >
                      {img && (
                        <img
                          src={img.url}
                          alt={img.altText ?? node.title}
                          className="w-full h-full object-cover relative z-[2] transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      {soldOut && (
                        <div className="absolute bottom-0 right-0 z-10 px-4 pb-4">
                          <span
                            style={{
                              fontFamily: "UDC Working Man Sans, sans-serif",
                              letterSpacing: "0.1em",
                              color: "#CDDB2D",
                              backgroundColor: "#1B4229",
                              textTransform: "uppercase",
                              padding: "4px 10px",
                              borderRadius: 6,
                              fontSize: "0.8rem",
                            }}
                          >
                            Sold Out
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
                          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {node.title}
                      </h3>
                      {price && (
                        <p
                          style={{
                            fontFamily: "UDC Working Man Sans, sans-serif",
                            color: "#1B4229",
                            fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                            letterSpacing: "0.03em",
                          }}
                        >
                          {formatPrice(parseFloat(price.amount), DEFAULT_LOCALE, 2)}
                        </p>
                      )}
                    </div>
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
