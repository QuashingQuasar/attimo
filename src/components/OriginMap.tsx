import iberiaMap from "@/assets/iberia-map.png";

export const OriginMap = () => {
  return (
    <div className="h-full w-full relative group transition-transform duration-300 hover:scale-[1.2] origin-bottom-right">
      <div className="rounded-xl overflow-hidden h-full w-full">
        <img 
          src={iberiaMap} 
          alt="Map of Iberian Peninsula showing Alentejo, Portugal" 
          className="w-full h-full object-cover block rounded-2xl opacity-75 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};
