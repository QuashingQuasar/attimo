const labValues = [
  {
    label: "Polyphenols",
    value: "904",
    unit: "mg/kg",
    standard: "standard: ≈ 180 mg/kg",
    description: "Natural antioxidants that give olive oil its health benefits.",
  },
  {
    label: "Acidity",
    value: "0.16",
    unit: "%",
    standard: "standard: < 0.8%",
    description: "Lower acidity means fresher olives and higher quality.",
  },
  {
    label: "Peroxides",
    value: "6.3",
    unit: "meq/kg",
    standard: "standard: < 20 meq/kg",
    description: "Shows how fresh the oil is. Low peroxide = less oxidation and longer shelf life.",
  },
  {
    label: "Oleic Acid",
    value: "74.9",
    unit: "%",
    standard: "standard: ~67%",
    description: "A healthy fat that protects the oil and supports heart health. The higher, the better.",
  },
];

export const ProductLabTrust = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h2
              className="font-beverly font-bold text-olive-dark mb-4 tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}
            >
              You deserve food you can trust — and trace.
            </h2>
            <p
              className="text-olive-medium leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, monospace',
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
              }}
            >
              That's why we third-party lab-test every batch of our olive oil on
              key quality markers and share the results with you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {labValues.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: '#1B4229' }}
              >
                <div
                  className="px-5 py-3"
                  style={{ backgroundColor: '#1B4229' }}
                >
                  <span
                    className="font-semibold uppercase tracking-wider"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 'clamp(0.8rem, 0.95vw, 1rem)',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="p-5 space-y-2" style={{ backgroundColor: '#FFFAEA' }}>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-bold text-olive-dark"
                      style={{
                        fontFamily: 'UDC Working Man Sans, sans-serif',
                        fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)',
                      }}
                    >
                      {item.value}
                    </span>
                    <span
                      className="text-olive-dark/80"
                      style={{ fontSize: 'clamp(0.9rem, 1vw, 1.1rem)' }}
                    >
                      {item.unit}
                    </span>
                  </div>
                  <p
                    className="text-olive-light"
                    style={{
                      fontFamily: 'Space Grotesk, monospace',
                      fontSize: 'clamp(0.75rem, 0.85vw, 0.9rem)',
                    }}
                  >
                    {item.standard}
                  </p>
                  <p
                    className="text-olive-medium leading-relaxed"
                    style={{
                      fontFamily: 'Space Grotesk, monospace',
                      fontSize: 'clamp(0.85rem, 1vw, 1.05rem)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
