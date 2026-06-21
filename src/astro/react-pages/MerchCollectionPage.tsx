import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { MerchCard } from "@/components/MerchCard";
import { MERCH_DISPLAY_ORDER } from "@/lib/merchContent";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import type { ShopifyProduct } from "@/lib/shopify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

// Garment categories for the collection filter, driven by product TAGS in
// Shopify (tag a product `hoodie`, `tee`, or `cap`). `match` is lenient so
// common variants (t-shirt, beanie…) still bucket correctly. A category's
// filter button only appears when at least one product carries its tag.
const GARMENT_CATEGORIES: Array<{ key: string; label: string; match: (t: string) => boolean }> = [
  { key: "tee", label: "Tees", match: (t) => /\btee\b|t-?shirt/i.test(t) },
  { key: "hoodie", label: "Hoodies", match: (t) => /hoodie|sweatshirt|crewneck/i.test(t) },
  { key: "cap", label: "Caps", match: (t) => /\bcap\b|\bhat\b|beanie/i.test(t) },
];
// The category keys a product belongs to, matched against its tags AND its
// title (so an untagged "… Hoodie" still buckets correctly without needing a
// tag on every product).
const categoriesOf = (p: ShopifyProduct) => {
  const haystack = [...(p.node.tags ?? []), p.node.title];
  return GARMENT_CATEGORIES.filter((c) => haystack.some((t) => c.match(t))).map((c) => c.key);
};


// /merch collection listing. English-only (default locale), fed from the
// Shopify "Merch" product type (build-time fetch). Cards are the shared
// MerchCard so the PDP "More merch" section stays identical.
function MerchGrid({ products }: { products: ShopifyProduct[] }) {
  const [activeCat, setActiveCat] = useState<string | null>(null);

  // Only surface filter buttons for categories that actually have products
  // (so "Caps" appears the moment a cap is tagged). Hide the bar entirely
  // unless there are at least two categories to choose between.
  const presentCats = GARMENT_CATEGORIES.filter((c) =>
    products.some((p) => categoriesOf(p).includes(c.key)),
  );
  const showFilters = presentCats.length >= 2;

  // Display order: group by garment category in GARMENT_CATEGORIES order
  // (tees, then hoodies, then caps), untagged last. Stable sort preserves each
  // group's existing relative order.
  const rankOf = (p: ShopifyProduct) => {
    const idxs = categoriesOf(p).map((c) => GARMENT_CATEGORIES.findIndex((g) => g.key === c));
    return idxs.length ? Math.min(...idxs) : GARMENT_CATEGORIES.length;
  };
  const orderIndex = (p: ShopifyProduct) => {
    const i = MERCH_DISPLAY_ORDER.indexOf(p.node.handle);
    return i === -1 ? 999 : i;
  };
  const ordered = [...products].sort(
    (a, b) => rankOf(a) - rankOf(b) || orderIndex(a) - orderIndex(b),
  );

  const visibleProducts =
    showFilters && activeCat
      ? ordered.filter((p) => categoriesOf(p).includes(activeCat))
      : ordered;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header forceScrolled locale={DEFAULT_LOCALE} />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-8">
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Store header — title + inline category filters, then subheader. */}
          <div className="mb-10 md:mb-14">
            <div className="flex flex-wrap items-baseline gap-x-7 gap-y-3">
            <h1
              style={{
                fontFamily: "UDC Working Man Sans, sans-serif",
                color: "#1B4229",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Extra Virgin Merch
            </h1>
            {showFilters && (
              <div className="flex items-baseline gap-4 md:gap-5">
                {[{ key: null as string | null, label: "All" }, ...presentCats].map((cat) => {
                  const active = activeCat === cat.key;
                  return (
                    <button
                      key={cat.key ?? "all"}
                      type="button"
                      onClick={() => setActiveCat(cat.key)}
                      className={`transition-opacity ${
                        active ? "opacity-100" : "opacity-50 hover:opacity-80"
                      }`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "#1B4229",
                        fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                        fontWeight: active ? 600 : 400,
                        borderBottom: active ? "2px solid #1B4229" : "2px solid transparent",
                        paddingBottom: 2,
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            )}
            </div>
            <p
              className="mt-4"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                color: "#1B4229",
                opacity: 0.6,
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                lineHeight: 1.6,
              }}
            >
              All products unisex. Fit varies by style, check the size guides for fit and
              measurements.
            </p>
          </div>

          {products.length === 0 ? (
            <p style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1B4229", opacity: 0.6 }}>
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {visibleProducts.map((p) => (
                <MerchCard key={p.node.id} product={p} />
              ))}
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
