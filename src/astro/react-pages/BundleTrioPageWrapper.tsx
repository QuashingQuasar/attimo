import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import BundleProductPage from "./BundleProductPage";
import { TRIO_CONFIG } from "@/lib/trioBundle";
import type { Locale } from "@/lib/i18n/config";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

interface Props {
  locale?: Locale;
  initialAvailable?: boolean;
  initialAltAvailable?: boolean;
}

export default function BundleTrioPageWrapper({
  locale,
  initialAvailable,
  initialAltAvailable,
}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <BundleProductPage
        cfg={TRIO_CONFIG}
        locale={locale}
        initialAvailable={initialAvailable}
        initialAltAvailable={initialAltAvailable}
      />
      <Sonner />
    </QueryClientProvider>
  );
}
