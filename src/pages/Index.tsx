import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustryProblem } from "@/components/IndustryProblem";
import { HarvestProduct } from "@/components/HarvestProduct";
import { KleiaWay } from "@/components/KleiaWay";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <IndustryProblem />
      <HarvestProduct />
      <KleiaWay />
      <hr className="section-separator" />
      <OilComparison />
      <Testimonials />
      <PolyphenolComparison />
      <FAQ />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
