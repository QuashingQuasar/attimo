import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import FeaturedOilSelector from "./_FeaturedOilSelector";

/* ────────────────────────────────────────────────────────────────────────
   SANDBOX — featured-oil selector shown IN CONTEXT.
   Reuses the REAL Header + Hero + Footer from the live homepage and drops the
   experimental FeaturedOilSelector where the OilProductWidgets section sits,
   so the selector can be judged inside the actual homepage UI.
   Nothing here is wired into the real homepage; delete src/pages/lab/ to remove.
   ──────────────────────────────────────────────────────────────────────── */
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

function Inner({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      {/* ↓ the experiment, in the slot OilProductWidgets normally occupies */}
      <FeaturedOilSelector />
      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function FeaturedOilHome({ locale }: { locale?: Locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Inner locale={locale} />
    </QueryClientProvider>
  );
}
