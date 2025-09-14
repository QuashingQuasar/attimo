import { OliveLeaf } from './OliveLeaf';

export const QualityTicker = () => {
  const qualities = [
    "PREMIUM QUALITY",
    "DIRECT FROM GROVES", 
    "LAB TESTED",
    "FRESH HARVEST",
    "TRACEABLE",
    "ARTISANAL",
    "SMALL BATCH"
  ];

  return (
    <div className="bg-accent py-6 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="text-olive-dark font-working-man-light font-bold text-2xl tracking-wider">
          {Array(10).fill(null).map((_, i) => (
            <span key={i}>
              {qualities.map((quality, index) => (
                <span key={index} className="inline-flex items-center">
                  {quality}
                  {index < qualities.length - 1 && (
                    <OliveLeaf className="w-3 h-5 mx-4" fill="currentColor" />
                  )}
                  {index === qualities.length - 1 && (
                    <OliveLeaf className="w-3 h-5 mx-4" fill="currentColor" />
                  )}
                </span>
              ))}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};