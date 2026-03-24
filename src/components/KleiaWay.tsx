import { AutoplayVideo } from "@/components/AutoplayVideo";

export const KleiaWay = () => {
  const tiles = [
    { title: "ALWAYS FRESH", text: "Olive oil always from the latest harvest. Pressed within hours after picking, bottled at peak freshness.", icon: "/icons/mortar.svg" },
    { title: "SINGLE VARIETY", text: "Each bottle is from a single olive variety, unblended. What you taste is the pure expression of that cultivar and where it comes from.", icon: "/icons/olive.svg" },
    { title: "EARLY HARVEST", text: "Our olives are harvested early in season when they are highest in the polyphenols that give taste and health", icon: "/icons/branch-2.svg" },
    { title: "FROM GROVE TO TABLE", text: "We source directly from the people who make the oil. No middlemen, no blending, no shortcuts.", icon: "/icons/basket-2.svg" },
    { title: "LAB-TESTED QUALITY", text: "Every bottle is lab-tested by third parties on key quality markers you can verify for yourself.", icon: "/icons/flask.svg" },
  ];

  const videos = [
    "/videos/content-video-1.mp4",
    "/videos/kleia-way-video-3.mp4",
    "/videos/kleia-way-video.mp4",
    "/videos/harvest-2024-1.mp4",
  ];

  const renderTile = (index: number) => (
    <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229' }}>
      <div className="h-full flex flex-col justify-center items-center text-center gap-3">
        <div
          className="w-[56px] h-[48px] flex-shrink-0"
          style={{
            backgroundColor: '#B3E58C',
            WebkitMaskImage: `url(${tiles[index].icon})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${tiles[index].icon})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        />
        <h4 className="font-bold" style={{
          fontFamily: 'UDC Working Man Sans, sans-serif',
          color: '#B3E58C',
          fontSize: 'clamp(1.2rem, 1.6vw, 1.7rem)'
        }}>{tiles[index].title}</h4>
        <p className="leading-relaxed max-w-[325px]" style={{
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#B3E58C',
          fontSize: 'clamp(0.98rem, 1.15vw, 1.155rem)'
        }}>{tiles[index].text}</p>
      </div>
    </div>
  );

  const renderVideo = (index: number) => (
    <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
      <AutoplayVideo
        src={videos[index]}
        className="w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
    </div>
  );

  return (
    <section className="snap-start pt-8 md:pt-12 lg:pt-16" style={{ backgroundColor: 'hsl(var(--section-light))', paddingBottom: '30px' }}>
      <div className="container mx-auto px-6 lg:-mb-[375px]" style={{ transform: "scale(0.83)", transformOrigin: "top center" }}>
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-light mb-8 tracking-tight" style={{
            fontFamily: 'UDC Working Man Sans, sans-serif',
            color: '#1B4229',
            fontSize: 'clamp(2rem, 3.5vw, 3.75rem)'
          }}>
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 max-w-[90vw] mx-auto lg:h-[calc(100vh-200px)]">
          {/* Row 1: content - video - content */}
          {renderTile(0)}
          {renderVideo(0)}
          {renderTile(1)}

          {/* Row 2: video - content - video */}
          {renderVideo(1)}
          {renderTile(2)}
          {renderVideo(2)}

          {/* Row 3: content - video - content */}
          {renderTile(3)}
          {renderVideo(3)}
          {renderTile(4)}
        </div>
      </div>
    </section>
  );
};
