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
            <h2 className="font-bold tracking-tight" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", color: '#ECA948', fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
              Origin: Sicily, Italy
            </h2>
            <p className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFAEA', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
              Nocellara is home to the Belice valley on the west coast of Sicily, where people have been making olive oil since Greek times. Here, limestone soil and dry summers stress the olive trees, causing fruits to stay small with concentrated flavour. We work directly with a small farm dedicated to making elite olive oil just outside of Trapani.                         
            </p>
          </div>
        </div>
      </div>
    </section>);};