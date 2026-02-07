const features = [
  {
    title: "Intense & Peppery",
    description: "Its high polyphenol content gives the olive oil an intense, peppery kick — a sign of real, fresh EVOO.",
    icon: "/icons/mortar.svg",
  },
  {
    title: "Early Harvest",
    description: "Harvested in October when the olives are green, hard, and very high in polyphenols.",
    icon: "/icons/branch-2.svg",
  },
  {
    title: "Galega Olives",
    description: "A Portuguese variety known for its delicate, grassy flavour and exceptional polyphenol content.",
    icon: "/icons/olive.svg",
  },
];

export const ProductOriginStory = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero statement */}
          <div className="mb-16 mx-auto text-center">
            <p
              className="font-beverly font-bold text-olive-dark tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: 1.2 }}
            >
              Galega from Alentejo is 100% Extra Virgin, high in polyphenols — crafted with the purpose to bring you olive oil with powerful antioxidants known for their health benefits. Perfect for anyone looking to give their health a boost.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const bgColors = ['#B3E58C', '#CDDB2D', '#EBDD21'];
              return (
                <div
                  key={index}
                  className="rounded-3xl p-8 flex flex-col justify-between min-h-[340px]"
                  style={{ backgroundColor: bgColors[index] }}
                >
                  <div className="space-y-4">
                    <h3
                      className="font-bold text-olive-dark"
                      style={{
                        fontFamily: 'UDC Working Man Sans, sans-serif',
                        fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-olive-dark/80 leading-relaxed"
                      style={{
                        fontFamily: 'Space Grotesk, monospace',
                        fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)',
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-[80px] h-[80px] object-contain"
                      style={{
                        filter:
                          'invert(14%) sepia(23%) saturate(1471%) hue-rotate(98deg) brightness(95%) contrast(92%)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
