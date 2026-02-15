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


          {/* Feature tiles — KleiaWay-style 3×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:h-[850px]">
            {/* Row 1, Col 1 — Text tile */}
            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: '#1B4229' }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: '#ECA948',
                    WebkitMaskImage: `url(${features[0]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[0]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: 'clamp(1.6rem, 2vw, 2.2rem)',
                    color: '#ECA948',
                  }}
                >
                  {features[0]?.title}
                </h3>
                <p
                  className="tracking-wide leading-relaxed max-w-[300px]"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: '1.15rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#ECA948',
                  }}
                >
                  {features[0]?.description}
                </p>
              </div>
            </div>

            {/* Row 1, Col 2 — Video tile */}
            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
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
            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: '#1B4229' }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: '#ECA948',
                    WebkitMaskImage: `url(${features[1]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[1]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: 'clamp(1.6rem, 2vw, 2.2rem)',
                    color: '#ECA948',
                  }}
                >
                  {features[1]?.title}
                </h3>
                <p
                  className="tracking-wide leading-relaxed max-w-[300px]"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: '1.15rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#ECA948',
                  }}
                >
                  {features[1]?.description}
                </p>
              </div>
            </div>

            {/* Row 2, Col 1 — Video tile */}
            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
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
            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: '#1B4229' }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: '#ECA948',
                    WebkitMaskImage: `url(${features[2]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[2]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: 'clamp(1.6rem, 2vw, 2.2rem)',
                    color: '#ECA948',
                  }}
                >
                  {features[2]?.title}
                </h3>
                <p
                  className="tracking-wide leading-relaxed max-w-[300px]"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: '1.15rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#ECA948',
                  }}
                >
                  {features[2]?.description}
                </p>
              </div>
            </div>

            {/* Row 2, Col 3 — Video tile */}
            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
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
