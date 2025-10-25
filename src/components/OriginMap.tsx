import mapImage from '@/assets/alentejo-map.png';

export const OriginMap = () => {
  return (
    <div className="rounded-xl border border-olive-dark overflow-hidden h-full bg-olive-dark relative">
      <img 
        src={mapImage} 
        alt="Alentejo region map" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
    </div>
  );
};
