import { SicilyMapbox } from "@/components/SicilyMapbox";

export const ProductOriginRegion = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <SicilyMapbox className="w-full max-w-[400px] aspect-square" />
          </div>
          <div className="space-y-6">
            <h2 className="font-beverly font-bold tracking-tight" style={{ color: '#ECA948', fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
              Harvested and Pressed in Sicily   
            </h2>
            <p className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFAEA', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
              





ATTIMO Nocellara is directly sourced from a small farm in the Belice valley, on the west coast of Sicily. Here, in the Belice valley, people have been making olive oil since before the Romans. Limestone soil and dry summers stress the olive trees, causing fruits to stay small with concentrated flavour.                         
            
            
            
            </p>
          </div>
        </div>
      </div>
    </section>);};