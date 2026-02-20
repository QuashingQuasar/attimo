import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OilProductWidgets } from "@/components/OilProductWidgets";
import { IndustryProblem } from "@/components/IndustryProblem";

import { WaitlistCTA } from "@/components/WaitlistCTA";
import { KleiaWay } from "@/components/KleiaWay";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

const IndexV2 = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-y-scroll h-screen" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <OilProductWidgets />
      <IndustryProblem />
      
      <KleiaWay />
      
      <OilComparison />
      <Testimonials />
      <PolyphenolComparison />
      <FAQ />
      <Footer />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default IndexV2;
