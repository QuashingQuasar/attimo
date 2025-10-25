import mapImage from '@/assets/alentejo-map-light.png';

export const OriginMap = () => {
  return (
    <div className="rounded-xl border border-olive-dark overflow-hidden h-full bg-cream relative transition-transform duration-300 hover:scale-[1.3] origin-bottom-right">
      <img 
        src={mapImage} 
        alt="Alentejo region map" 
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
    </div>
  );
};
