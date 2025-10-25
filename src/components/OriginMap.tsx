import iberiaMap from "@/assets/iberia-map.png";

export const OriginMap = () => {
  return (
    <div className="rounded-xl overflow-hidden h-full relative transition-transform duration-300 hover:scale-[1.3] origin-bottom-right">
      <img 
        src={iberiaMap} 
        alt="Map of Iberian Peninsula showing Alentejo, Portugal" 
        className="w-full h-auto block rounded-2xl"
      />
    </div>
  );
};
