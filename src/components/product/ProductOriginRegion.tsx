import { SicilyMapbox } from "@/components/SicilyMapbox";

interface ProductOriginRegionProps {
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
}

export const ProductOriginRegion = ({ backgroundColor = '#1B4229', headingColor = '#ECA948', textColor = '#FFFAEA' }: ProductOriginRegionProps) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <SicilyMapbox className="w-full max-w-[400px] aspect-square" />
          </div>
          <div className="space-y-6">
            <h2 className="font-bold tracking-tight" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", color: headingColor, fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
              Harvested and Cold-Pressed in Sicily
            </h2>
            <p className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: textColor, fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
              ATTIMO Nocellara is directly sourced from a small farm in Belice on Sicily's west coast, where people have been making olive oil since before the Romans.
              <br /><br />
              Here, chalky soil and dry summers stress the olive trees, causing fruits to stay small with concentrated flavour. The coast keeps the nights cool, which slows the accumulation of the more aggressive phenolic compounds. Harvested early, the result is an oil that is high in polyphenols but gentle in character — softer and rounder than anything produced further inland.
            </p>
          </div>
        </div>
      </div>
    </section>);
};
