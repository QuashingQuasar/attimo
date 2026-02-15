interface ProductLabTrustProps {
  content: {
    heading: string;
    subheading: string;
    values: Array<{
      label: string;
      value: string;
      unit: string;
      standard: string;
      description: string;
    }>;
  };
}

export const ProductLabTrust = ({ content }: ProductLabTrustProps) => {
  const { heading, subheading, values: labValues } = content;
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h2
              className="font-working-man font-bold text-olive-dark mb-4 tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}
            >
              {heading}
            </h2>
            <p
              className="text-olive-medium leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, monospace',
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
              }}
            >
              {subheading}
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
