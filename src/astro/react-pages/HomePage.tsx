import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { BundleWidgets } from "@/components/BundleWidgets";
import { IndustryProblem } from "@/components/IndustryProblem";
import { KleiaWay } from "@/components/KleiaWay";
import { HomeLabNumbers } from "@/components/HomeLabNumbers";
import type { HomeLabOil } from "@/lib/certificates/homeNumbers";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } } });

interface InitialPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

interface InnerProps {
  initialPosts?: InitialPost[];
  labNumbers?: HomeLabOil[];
  locale?: Locale;
}

function HomePageInner({ initialPosts, labNumbers, locale = DEFAULT_LOCALE }: InnerProps) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  // Polyphenol badge under each card's flavour line, from the certificates
  // collection (via labNumbers) so the homepage carries no number of its own.
  const polyBadges = labNumbers?.length
    ? Object.fromEntries(labNumbers.filter((o) => o.total !== null).map((o) => [o.key, String(o.total)]))
    : undefined;

  return (
    <div className="relative min-h-screen" data-build="20260611" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} locale={locale} />
      <OilProductWidgets locale={locale} polyphenols={polyBadges} polyphenolStyle="line" belowGrid={<BundleWidgets locale={locale} />} />
      <IndustryProblem locale={locale} />
      <KleiaWay locale={locale} />
      <OilComparison locale={locale} />
      <Testimonials locale={locale} />
      <PolyphenolComparison
        locale={locale}
        relatedLink={{ href: "/high-polyphenol-olive-oil", label: "See the full high-polyphenol range, ranked" }}
      />
      {labNumbers && labNumbers.length > 0 && <HomeLabNumbers oils={labNumbers} locale={locale} />}
      <FAQ locale={locale} />
      <BlogSection initialPosts={initialPosts} locale={locale} />
      <Footer locale={locale} />
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <Sonner />
    </div>
  );
}

export default function HomePage({ initialPosts, labNumbers, locale }: { initialPosts?: InitialPost[]; labNumbers?: HomeLabOil[]; locale?: Locale }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePageInner initialPosts={initialPosts} labNumbers={labNumbers} locale={locale} />
    </QueryClientProvider>
  );
}
