import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustryProblem } from "@/components/IndustryProblem";
import { HarvestProduct } from "@/components/HarvestProduct";
import { KleiaWay } from "@/components/KleiaWay";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { Testimonials } from "@/components/Testimonials";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BrandIconGrid } from "@/components/BrandIconGrid";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <IndustryProblem />
      <BrandIconGrid />
      <HarvestProduct />
      <Testimonials />
      <hr className="section-separator" />
      <KleiaWay />
      <PolyphenolComparison />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
