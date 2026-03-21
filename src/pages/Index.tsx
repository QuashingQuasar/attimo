import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustryProblem } from "@/components/IndustryProblem";
import { HarvestProduct } from "@/components/HarvestProduct";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { KleiaWay } from "@/components/KleiaWay";

import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <IndustryProblem />
      <HarvestProduct />
      <KleiaWay />
      
      <OilComparison columnHeading="ATTIMO" polyphenolDisplay="400-900 mg/kg" />
      <Testimonials />
      
      <FAQ />
      <Footer />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
