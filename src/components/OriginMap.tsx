export const OriginMap = () => {
  return (
    <div className="rounded-xl overflow-hidden h-full relative transition-transform duration-300 hover:scale-[1.3] origin-bottom-right">
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"
           className="w-full h-full">
        {/* context: Portugal + Spain outline (faint) */}
        <g fill="none" stroke="#58d68d" strokeOpacity="0.35" strokeWidth="1">
          {/* placeholder path for Spain */}
          <path d="M 100 100 L 700 100 L 700 500 L 100 500 Z" />
          {/* placeholder path for Portugal outline */}
          <path d="M 150 120 L 300 120 L 300 480 L 150 480 Z" />
        </g>

        {/* highlight: Alentejo region */}
        <g fill="none" stroke="#7CFFB2" strokeWidth="2">
          {/* placeholder path for Alentejo */}
          <path d="M 200 200 L 320 200 L 320 400 L 200 400 Z" />
        </g>

        {/* marker & leader line */}
        <circle cx="260" cy="300" r="4" fill="#ffffff" />
        <line x1="260" y1="300" x2="340" y2="240" stroke="#ffffff" strokeWidth="2" />
        <text x="350" y="235" fontSize="22" fontWeight="700" fill="#ffffff" alignmentBaseline="middle">
          Alentejo, Portugal
        </text>
      </svg>
    </div>
  );
};
