export const Solution = () => {
  const labTiles = [
    {
      key: "polyphenols",
      label: "POLYPHENOLS",
      value: "904",
      unit: "mg/kg",
      avg: "avg. ~180mg/kg",
      description: "antioxidants that give EVOO its special health benefits",
    },
    {
      key: "oleic-acid",
      label: "OLEIC ACID",
      value: "74.9%",
      unit: "",
      avg: "avg. ~67%",
      description: "healthy fats that protect the oil and your health, higher = better",
    },
    {
      key: "peroxides",
      label: "PEROXIDES",
      value: "6.3",
      unit: "meq/kg",
      avg: "avg. ~20meq/kg",
      description: "lower = fresher oil, less oxidation and longer shelf life",
    },
    {
      key: "acidity",
      label: "ACIDITY",
      value: "0.16%",
      unit: "",
      avg: "avg. ~0.8%",
      description: "lower = fresher olives and higher quality",
    },
  ] as const;

  return (
    <section aria-labelledby="lab-values" className="py-24 bg-[hsl(var(--olive-dark)/0.07)]">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-10">
          <p id="lab-values" className="text-sm uppercase tracking-wider text-cream/80">
            Lab Verified
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {labTiles.map((tile) => (
            <article
              key={tile.key}
              className="rounded-2xl bg-cream p-8 shadow-sm border border-olive-light/15"
            >
              <div className="text-xs font-semibold text-olive-medium uppercase tracking-wide mb-2">
                {tile.label}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-olive-dark leading-none">
                {tile.value}
                {tile.unit && <span className="text-2xl md:text-3xl ml-1 text-olive-dark/90">{tile.unit}</span>}
              </div>
              <div className="text-sm text-olive-light mt-1">{tile.avg}</div>
              <p className="mt-4 text-sm leading-relaxed text-olive-medium/90" style={{ fontFamily: 'Space Grotesk, monospace' }}>{tile.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-cream/80 text-sm">Certified: November 2024</p>
      </div>
    </section>
  );
};
