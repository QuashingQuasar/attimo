import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QualityTicker } from "@/components/QualityTicker";
import { IndustryProblem } from "@/components/IndustryProblem";
import { IconDivider } from "@/components/IconDivider";
import { Solution } from "@/components/Solution";
import { KleiaWay } from "@/components/KleiaWay";
import { Testimonials } from "@/components/Testimonials";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <QualityTicker />
      <IndustryProblem />
      <IconDivider />
      <Solution />
      <IconDivider />
      <KleiaWay />
      <Testimonials />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
