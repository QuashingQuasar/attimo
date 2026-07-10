import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ProductPage from "./ProductPage";
import type { ProductFormat } from "@/components/FormatSelector";
import type { ShopifyProduct, SellingPlan } from "@/lib/shopify";
import type { Locale } from "@/lib/i18n/config";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

interface Props {
  handle: string;
  initialProducts?: ShopifyProduct[];
  initialSellingPlans?: SellingPlan[];
  initialBlogPosts?: BlogPost[];
  locale?: Locale;
  // Preselect a format on load (used by the dedicated 3L box landing page so
  // it renders box-first on both server and client — no hydration mismatch).
  initialFormat?: ProductFormat;
}

export default function ProductPageWrapper({ handle, initialProducts, initialSellingPlans, initialBlogPosts, locale, initialFormat }: Props) {
  if (typeof globalThis !== "undefined") {
    (globalThis as any).__ASTRO_PARAMS__ = { handle };
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ProductPage
        handle={handle}
        initialProducts={initialProducts}
        initialSellingPlans={initialSellingPlans}
        initialBlogPosts={initialBlogPosts}
        locale={locale}
        initialFormat={initialFormat}
      />
      <Sonner />
    </QueryClientProvider>
  );
}
