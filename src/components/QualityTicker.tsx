export const QualityTicker = () => {
  const qualities = "PREMIUM QUALITY • DIRECT FROM GROVES • LAB TESTED • FRESH HARVEST • TRACEABLE • ARTISANAL • SMALL BATCH • ";

  return (
    <div className="bg-olive-dark py-3 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="text-cream font-bold text-sm tracking-wider">
          {qualities.repeat(10)}
        </span>
      </div>
    </div>
  );
};