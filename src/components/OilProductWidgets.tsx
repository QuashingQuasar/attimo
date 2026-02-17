import { Link } from "react-router-dom";
import bottleImage from "@/assets/attimo-bottle-final.jpg";

const oils = [
  {
    name: "Coratina",
    nameDetail: "d'Italia",
    flavor: "Bold & Punchy",
    origin: "Umbria, Italy",
    flag: "🇮🇹",
    handle: "galega-from-alentejo",
    image: bottleImage,
    tagline: "A hit of healthy polyphenols",
    price: 22,
  },
  {
    name: "Picual",
    nameDetail: "de España",
    flavor: "Green & Grassy",
    origin: "Jaén, Spain",
    flag: "🇪🇸",
    handle: "picual",
    image: bottleImage,
    tagline: "The all-rounder",
    price: 20,
  },
  {
    name: "Nocellara",
    nameDetail: "d'Italia",
    flavor: "Gentle & Fruity",
    origin: "Sicily, Italy",
    flag: "🇮🇹",
    handle: "nocellara",
    image: bottleImage,
    tagline: "Easy to like and use",
    price: 20,
  },
];

export const OilProductWidgets = () => {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--section-light))" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1B4229 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1400px" }}>
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <h2
            className="mb-4"
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              color: "#1B4229",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "0.05em",
            }}
          >
            Three Groves, Three Characters
          </h2>
          <p
            className="mx-auto text-center"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              opacity: 0.5,
              fontSize: "clamp(1.4rem, 1.8vw, 1.8rem)",
              lineHeight: 1.7,
            }}
          >
            Single-variety oils from select groves across the Mediterranean.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {oils.map((oil) => (
            <Link
              key={oil.handle}
              to={`/product/${oil.handle}`}
              className="group flex flex-col"
            >
              {/* Image card */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-7"
                style={{ backgroundColor: "#1B4229" }}
              >
                {/* Subtle texture inside card */}
                <div
                  className="absolute inset-0 opacity-[0.04] z-[1]"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 30% 20%, #FFFAEA 0.5px, transparent 0.5px), radial-gradient(ellipse at 70% 80%, #FFFAEA 0.3px, transparent 0.3px)",
                    backgroundSize: "18px 18px, 14px 14px",
                  }}
                />

                {/* Top bar: origin pill only */}
                <div className="absolute top-0 left-0 right-0 z-10 px-5 pt-5">
                  <span
                    className="px-6 py-2.5 rounded-full border"
                    style={{
                      fontFamily: "UDC Working Man Sans, sans-serif",
                      fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)",
                      letterSpacing: "0.1em",
                      color: "#FFFAEA",
                      borderColor: "rgba(255, 250, 234, 0.25)",
                      backgroundColor: "rgba(27, 66, 41, 0.6)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {oil.flag} {oil.origin.toUpperCase()}
                  </span>
                </div>

                {/* Product image */}
                <img
                  src={oil.image}
                  alt={`${oil.name} olive oil bottle`}
                  className="w-full h-full object-cover relative z-[2] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Text below card */}
              <div className="flex flex-col items-center text-center px-2">
                {/* Product name */}
                <h3
                  className="mb-1.5"
                  style={{
                    fontFamily: "Beverly Drive, serif",
                    color: "#1B4229",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {oil.name} {oil.nameDetail}
                </h3>

                {/* Flavor */}
                <p
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    color: "#1B4229",
                    fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)",
                    letterSpacing: "0.15em",
                    opacity: 0.7,
                  }}
                >
                  {oil.flavor}
                </p>

                {/* Price */}
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    color: "#1B4229",
                    fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)",
                    letterSpacing: "0.03em",
                  }}
                >
                  €{oil.price}
                </p>

                {/* Tagline */}
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "#1B4229",
                    fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)",
                    opacity: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  {oil.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="text-center mt-14 md:mt-20">
          <p
            className="mb-5"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1B4229",
              fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)",
              opacity: 0.85,
            }}
          >
            Not sure which one is for you?
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              fontFamily: "UDC Working Man Sans, sans-serif",
              backgroundColor: "#1B4229",
              color: "#CDDB2D",
              fontSize: "clamp(0.875rem, 1.1vw, 1.1rem)",
              letterSpacing: "0.05em",
            }}
          >
            Find Your Oil →
          </Link>
        </div>
      </div>
    </section>
  );
};
