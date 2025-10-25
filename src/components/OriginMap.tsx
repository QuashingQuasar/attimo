export const OriginMap = () => {
  return (
    <div className="rounded-xl overflow-hidden h-full relative transition-transform duration-300 hover:scale-[1.3] origin-bottom-right">
      <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px', background: '#0f2c1f' }}>
        <rect x="0" y="0" width="1200" height="400" rx="16" fill="#0f2c1f"/>
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/9/97/Blank_map_of_Iberia.svg"
          x="120" y="-40" width="960" height="480"
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: '.45', filter: 'invert(64%) sepia(15%) saturate(400%) hue-rotate(80deg) brightness(95%)' }}
        />
        <circle cx="470" cy="225" r="5" fill="#fff"/>
        <line x1="470" y1="225" x2="560" y2="175" stroke="#fff" strokeWidth="3"/>
        <text x="575" y="170" fill="#fff" fontSize="34" fontWeight="800">Alentejo, Portugal</text>
      </svg>
    </div>
  );
};
