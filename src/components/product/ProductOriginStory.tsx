interface ProductOriginStoryProps {
  content: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{ title: string; description: string; icon: string; video?: string }>;
  };
}

export const ProductOriginStory = ({ content }: ProductOriginStoryProps) => {
  const { headline, quickRef, features } = content;

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
              {headline}
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

          {/* Feature tiles — KleiaWay-style 3×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:h-[750px]">
            {/* Row 1, Col 1 — Text tile */}
            <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h4
                  className="font-bold mb-6"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    color: '#B3E58C',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)',
                  }}
                >
                  {features[0]?.title.toUpperCase()}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'Space Grotesk, monospace',
                    color: '#B3E58C',
                    fontSize: 'clamp(1rem, 1.3vw, 1.5rem)',
                  }}
                >
                  {features[0]?.description}
                </p>
              </div>
            </div>

            {/* Row 1, Col 2 — Video tile */}
            <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={features[0]?.video || "/videos/content-video-1.mp4"} type="video/mp4" />
              </video>
            </div>

            {/* Row 1, Col 3 — Text tile */}
            <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h4
                  className="font-bold mb-6"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    color: '#B3E58C',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)',
                  }}
                >
                  {features[1]?.title.toUpperCase()}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'Space Grotesk, monospace',
                    color: '#B3E58C',
                    fontSize: 'clamp(1rem, 1.3vw, 1.5rem)',
                  }}
                >
                  {features[1]?.description}
                </p>
              </div>
            </div>

            {/* Row 2, Col 1 — Video tile */}
            <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={features[1]?.video || "/videos/kleia-way-video-3.mp4"} type="video/mp4" />
              </video>
            </div>

            {/* Row 2, Col 2 — Text tile */}
            <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h4
                  className="font-bold mb-6"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    color: '#B3E58C',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)',
                  }}
                >
                  {features[2]?.title.toUpperCase()}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'Space Grotesk, monospace',
                    color: '#B3E58C',
                    fontSize: 'clamp(1rem, 1.3vw, 1.5rem)',
                  }}
                >
                  {features[2]?.description}
                </p>
              </div>
            </div>

            {/* Row 2, Col 3 — Video tile */}
            <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={features[2]?.video || "/videos/kleia-way-video.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
