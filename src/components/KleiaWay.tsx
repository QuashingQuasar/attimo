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
        
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {approachSteps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-olive-dark rounded-full flex items-center justify-center">
                <step.icon size={32} className="text-cream" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-medium text-olive-dark mb-6">
                {step.title}
              </h3>
              
              {/* Description */}
              <div className="text-lg text-olive-medium leading-relaxed font-light">
                <p className="mb-2">{step.subtitle}</p>
                <p className="font-medium text-olive-dark">{step.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};