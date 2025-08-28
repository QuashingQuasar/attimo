import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Story } from "@/components/Story";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Benefits />
      <Story />
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Index;
