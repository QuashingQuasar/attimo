import iberiaMap from "@/assets/iberia-map.png";

export const ProductOriginRegion = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={iberiaMap} alt="Map of Iberian Peninsula showing Alentejo, Portugal" className="w-full max-w-[400px] rounded-2xl" />
          </div>
          <div className="space-y-6">
            <h2 className="font-beverly font-bold tracking-tight" style={{ color: '#ECA948', fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
              Origin: Sicily, Italy
            </h2>
            <p className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFAEA', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
              Sicily has a rich olive oil tradition since before Roman times. Nocellara is the icon of the Belice valley, on the western half of the island around Trapani. Here the summers are dry, the soil chalky, the harvest short. The oil it produces is round and fruit-forward. the kind that makes simple food taste like it was planned that way.



            </p>
          </div>
        </div>
      </div>
    </section>);};