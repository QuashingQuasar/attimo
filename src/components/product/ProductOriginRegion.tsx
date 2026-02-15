import iberiaMap from "@/assets/iberia-map.png";

export const ProductOriginRegion = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="flex justify-center">
            <img
              src={iberiaMap}
              alt="Map of Iberian Peninsula showing Alentejo, Portugal"
              className="w-full max-w-[400px] rounded-2xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2
              className="font-beverly font-bold tracking-tight"
              style={{
                color: '#ECA948',
                fontSize: 'clamp(1.75rem, 3vw, 3rem)',
              }}
            >
              Origin: Alentejo, Portugal
            </h2>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, monospace',
                color: '#FFFAEA',
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
              }}
            >
              Our olive oil comes from Alentejo, the sun-drenched region in
              southern Portugal. The soil there is rich and ancient, and olive
              trees have been growing for generations. We work directly with a
              small family farm dedicated to producing world-class olive oil.
            </p>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, monospace',
                color: 'rgba(255, 250, 234, 0.8)',
                fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)',
              }}
            >
              Every bottle is traceable to its exact grove — no blending, no
              middlemen, no mystery. You know exactly where your oil comes from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
