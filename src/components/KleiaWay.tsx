import { Droplets, FlaskConical, MapPin } from "lucide-react";

const approachSteps = [
  {
    icon: Droplets,
    title: "Fresh",
    subtitle: "We give you oil from the latest harvest,",
    highlight: "because fresher = better."
  },
  {
    icon: MapPin,
    title: "Not blended", 
    subtitle: "Every bottle comes from just one region - no",
    highlight: "blends, no sneaky stuff."
  },
  {
    icon: FlaskConical,
    title: "Lab-tested",
    subtitle: "We lab-test the olive oil to ensure you get the",
    highlight: "real deal."
  }
];

export const KleiaWay = () => {
  return (
    <section className="py-24 bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-olive-dark mb-8 tracking-tight">
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-7 gap-4 max-w-7xl mx-auto h-[500px]">
          {/* Large tile - Fresh (like the woman in reference) */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-olive-dark to-olive-dark/80 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="w-16 h-16 mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <Droplets size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Fresh</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                We give you oil from the latest harvest, because fresher = better.
              </p>
            </div>
          </div>

          {/* Top left - Not Blended (like "Intense & Peppery") */}
          <div className="col-span-2 bg-gradient-to-br from-olive-dark to-olive-dark/80 rounded-2xl p-6 text-white">
            <div className="h-full flex flex-col justify-center">
              <div className="w-12 h-12 mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Not Blended</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Every bottle comes from just one region - no blends, no sneaky stuff.
              </p>
            </div>
          </div>

          {/* Top right - Placeholder for photo (like olive oil & lemon) */}
          <div className="bg-gradient-to-br from-cream to-cream/80 rounded-2xl p-6 border border-olive-light/10">
            <div className="h-full flex items-center justify-center text-olive-medium/50">
              <span className="text-sm">Photo coming soon</span>
            </div>
          </div>

          {/* Top far right - Lab Tested (like "Coratina Olives") */}
          <div className="row-span-2 bg-gradient-to-br from-olive-dark to-olive-dark/80 rounded-2xl p-6 text-white">
            <div className="h-full flex flex-col justify-center">
              <div className="w-12 h-12 mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FlaskConical size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Lab-Tested</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                We lab-test the olive oil to ensure you get the real deal.
              </p>
            </div>
          </div>

          {/* Bottom left - Placeholder for illustration (like cartoon) */}
          <div className="bg-gradient-to-br from-cream to-cream/80 rounded-2xl p-6 border border-olive-light/10">
            <div className="h-full flex items-center justify-center text-olive-medium/50">
              <span className="text-sm">Video coming soon</span>
            </div>
          </div>

          {/* Bottom right - Placeholder for photo (like olives on branch) */}
          <div className="bg-gradient-to-br from-cream to-cream/80 rounded-2xl p-6 border border-olive-light/10">
            <div className="h-full flex items-center justify-center text-olive-medium/50">
              <span className="text-sm">Photo coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};