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

const quickRef = [
  { label: "VARIETY", value: "100% Galega" },
  { label: "ORIGIN", value: "Alentejo, Portugal" },
  { label: "FLAVOR", value: "Intense & Peppery" },
  { label: "USE", value: "drizzle over fresh foods" },
  { label: "STORE", value: "away from light and heat" },
];

export const ProductOriginStory = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero statement */}
          <div className="mb-16 text-center">
            <p
              className="font-beverly font-bold text-olive-dark tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.2 }}
            >
              Galega from Alentejo is 100% Extra Virgin, high in polyphenols — crafted with the purpose to bring you olive oil with powerful antioxidants known for their health benefits. Perfect for anyone looking to give their health a boost.
            </p>
          </div>

          {/* Quick-reference bar */}
          <div className="mb-16 py-5 px-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-3 border-y border-olive-dark/20">
            {quickRef.map((item, i) => (
              <span key={i} className="flex items-center gap-x-2">
                <span
                  className="text-olive-dark/50 tracking-[0.15em]"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: '0.7rem',
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-olive-dark"
                  style={{
                    fontFamily: 'Beverly Drive Right, cursive',
                    fontSize: '1rem',
                  }}
                >
                  {item.value}
                </span>
                {i < quickRef.length - 1 && (
                  <span className="text-olive-dark/25 mx-2">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Feature cards — label editorial style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-olive-dark/15 rounded-2xl overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-10 flex flex-col items-center text-center gap-5 ${
                  index < features.length - 1 ? 'border-b md:border-b-0 md:border-r border-olive-dark/15' : ''
                }`}
              >
                <img
                  src={feature.icon}
                  alt=""
                  className="w-[56px] h-[56px] object-contain"
                  style={{
                    filter:
                      'invert(14%) sepia(23%) saturate(1471%) hue-rotate(98deg) brightness(95%) contrast(92%)',
                  }}
                />
                <h3
                  className="text-olive-dark"
                  style={{
                    fontFamily: 'Beverly Drive Right, cursive',
                    fontSize: 'clamp(1.3rem, 1.5vw, 1.6rem)',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-olive-dark/70 tracking-wide leading-relaxed max-w-[260px]"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
