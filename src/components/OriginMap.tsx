import mapImage from '@/assets/alentejo-map.png';

export const OriginMap = () => {
  return (
    <div className="rounded-xl border border-olive-dark overflow-hidden h-full bg-olive-dark relative">
      <img 
        src={mapImage} 
        alt="Alentejo region map" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div 
        className="absolute top-3 right-3 px-3 py-1.5 rounded-md z-10"
        style={{
          backgroundColor: 'rgba(27, 66, 41, 0.95)',
        }}
      >
        <div 
          className="font-semibold uppercase tracking-wide text-center"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(0.75rem, 0.9vw, 1rem)',
          }}
        >
          ORIGIN
        </div>
        <div
          className="font-bold mt-0.5"
          style={{
            color: '#CDDB2D',
            fontFamily: 'UDC Working Man Sans, sans-serif',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.3rem)',
          }}
        >
          Alentejo, Portugal
        </div>
      </div>
    </div>
  );
};
