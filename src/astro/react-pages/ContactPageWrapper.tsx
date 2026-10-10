import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ContactPage from "./ContactPage";
import type { Locale } from "@/lib/i18n/config";

const queryClient = new QueryClient();

export default function ContactPageWrapper({ locale }: { locale?: Locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactPage locale={locale} />
      <Sonner />
    </QueryClientProvider>
  );
}
