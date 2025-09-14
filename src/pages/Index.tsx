import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustryProblem } from "@/components/IndustryProblem";
import { HarvestProduct } from "@/components/HarvestProduct";
import { KleiaWay } from "@/components/KleiaWay";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { PolyphenolStory } from "@/components/PolyphenolStory";
import { PolyphenolTimeline } from "@/components/PolyphenolTimeline";
import { PolyphenolScroll } from "@/components/PolyphenolScroll";
import { PolyphenolCarousel } from "@/components/PolyphenolCarousel";
import { Testimonials } from "@/components/Testimonials";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <IndustryProblem />
      <HarvestProduct />
      <KleiaWay />
      <PolyphenolComparison />
      <PolyphenolStory />
      <PolyphenolTimeline />
      <PolyphenolScroll />
      <PolyphenolCarousel />
      <Testimonials />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
