import iberiaMap from "@/assets/iberia-map.png";
import { useState } from "react";

export const OriginMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`h-full w-full relative group transition-transform duration-300 origin-bottom-right cursor-pointer hover:scale-[1.6] ${
        isExpanded ? 'scale-[1.6]' : ''
      }`}
      onClick={handleToggle}
    >
      <div className="rounded-xl overflow-hidden h-full w-full">
        <img 
          src={iberiaMap} 
          alt="Map of Iberian Peninsula showing Alentejo, Portugal" 
          className={`w-full h-full object-cover block rounded-2xl opacity-75 transition-opacity duration-300 group-hover:opacity-100 ${
            isExpanded ? 'opacity-100' : ''
          }`}
        />
      </div>
    </div>
  );
};
