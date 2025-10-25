export const OriginMap = () => {
  return (
    <div className="rounded-xl overflow-hidden h-full relative transition-transform duration-300 hover:scale-[1.3] origin-bottom-right">
      <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" style={{ borderRadius: '16px', background: '#0f2c1f' }}>
        {/* Rounded background */}
        <rect x="0" y="0" width="1200" height="400" rx="16" fill="#0f2c1f"/>

        {/* Context map (Iberian Peninsula outline) */}
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/9/97/Blank_map_of_Iberia.svg"
          x="120" y="-40" width="960" height="480"
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: 0.45, filter: 'invert(64%) sepia(15%) saturate(400%) hue-rotate(80deg) brightness(95%)' }}
        />

        {/* Alentejo marker (Évora approx. lon/lat: -7.9076, 38.5667) */}
        <circle cx="470" cy="225" r="5" fill="#fff"/>
        <line x1="470" y1="225" x2="560" y2="175" stroke="#fff" strokeWidth="3"/>

        {/* Label */}
        <text x="575" y="170" fill="#fff" fontSize="34" fontWeight="800">Alentejo, Portugal</text>
      </svg>
    </div>
  );
};
