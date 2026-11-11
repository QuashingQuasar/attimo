import { AutoplayVideo } from "@/components/AutoplayVideo";

interface ProductOriginStoryProps {
  content: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{ title: string; description: string; icon: string; video?: string }>;
  };
  tileBackground?: string;
  tileAccent?: string;
  headlineMaxWidth?: string;
}

export const ProductOriginStory = ({ content, tileBackground, tileAccent, headlineMaxWidth }: ProductOriginStoryProps) => {
  const { headline, features } = content;
  const bg = tileBackground || "#1B4229";
  const accent = tileAccent || "#ECA948";

  // Phones: compact rows (icon left, copy right). From md: centred cards.
  // Every tile in the grid looks the same: one background, one text colour.
  const renderTile = (index: number) => (
    <div className="rounded-2xl px-5 py-5 md:px-4 md:py-6 h-full md:min-h-[250px] lg:min-h-0" style={{ backgroundColor: bg }}>
      <div className="h-full flex flex-row md:flex-col md:justify-center items-center text-left md:text-center gap-4 md:gap-3">
        <div
          className="w-[46px] h-[40px] md:w-[56px] md:h-[48px] flex-shrink-0"
          style={{
            backgroundColor: accent,
            WebkitMaskImage: `url(${features[index]?.icon})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url(${features[index]?.icon})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
        <div className="flex flex-col gap-1 md:gap-3 md:items-center">
          <h3 className="text-lg" style={{ fontFamily: "UDC Working Man Sans, sans-serif", color: accent }}>
            {features[index]?.title}
          </h3>
          <p
            className="leading-normal md:max-w-[300px] xl:max-w-[330px] md:whitespace-pre-line"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1rem, 1.1vw, 1.1rem)",
              color: accent,
            }}
          >
            {features[index]?.description}
          </p>
        </div>
      </div>
    </div>
  );

  const renderVideo = (index: number, fallback: string) => (
    <div className="rounded-2xl relative overflow-hidden h-[170px] md:h-[250px] lg:h-full lg:min-h-[190px]">
      <AutoplayVideo
        src={features[index]?.video || fallback}
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
    </div>
  );

  return (
    <section className="py-10 md:py-14 lg:py-16 xl:py-24" style={{ backgroundColor: "#FFFAEA" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="font-beverly font-bold text-olive-dark tracking-tight mx-auto text-xl lg:text-2xl xl:text-3xl"
            style={{ maxWidth: headlineMaxWidth || "67rem", lineHeight: 1.2 }}
          >
            {headline}
          </p>
        </div>

        {/* Rows take the height of their tallest tile, so longer copy and
            translations fit. Phones show two of the four clips. */}
        <div className="grid grid-cols-1 md:hidden lg:grid lg:grid-cols-3 lg:auto-rows-fr gap-3 lg:gap-4 max-w-[90vw] mx-auto">
          {renderTile(0)}
          {renderVideo(0, "/videos/content-video-1.mp4")}
          {renderTile(1)}

          <div className="hidden lg:block">{renderVideo(1, "/videos/kleia-way-video-3.mp4")}</div>
          {renderTile(2)}
          {renderVideo(2, "/videos/kleia-way-video.mp4")}

          {renderTile(3)}
          <div className="hidden lg:block">{renderVideo(3, "/videos/harvest-2024-1.mp4")}</div>
          {renderTile(4)}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4 max-w-[90vw] mx-auto">
          {renderTile(0)}
          {renderVideo(0, "/videos/content-video-1.mp4")}

          {renderVideo(1, "/videos/kleia-way-video-3.mp4")}
          {renderTile(1)}

          {renderTile(2)}
          {renderVideo(2, "/videos/kleia-way-video.mp4")}

          {renderVideo(3, "/videos/harvest-2024-1.mp4")}
          {renderTile(4)}
        </div>
      </div>
    </section>
  );
};
