import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { PalateQuiz } from "@/components/PalateQuiz";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

const queryClient = new QueryClient();

export default function QuizPageWrapper({ locale = DEFAULT_LOCALE }: { locale?: Locale } = {}) {
  return (
    <QueryClientProvider client={queryClient}>
      <PalateQuiz locale={locale} />
      <Sonner />
    </QueryClientProvider>
  );
}
