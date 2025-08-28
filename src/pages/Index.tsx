import { useState } from "react";
import { Hero } from "@/components/Hero";
import { KleiaWay } from "@/components/KleiaWay";
import { IndustryProblem } from "@/components/IndustryProblem";
import { QualityComparison } from "@/components/QualityComparison";
import { LabValues } from "@/components/LabValues";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <KleiaWay />
      <IndustryProblem />
      <QualityComparison />
      <LabValues />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
