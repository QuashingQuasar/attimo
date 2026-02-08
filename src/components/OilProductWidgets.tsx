import { Link } from "react-router-dom";
import bottleImage from "@/assets/attimo-bottle-final.jpg";
import { OliveLeaf } from "./OliveLeaf";

const oils = [
  {
    name: "Coratina",
    subtitle: "Intense & Peppery",
    origin: "Alentejo, Portugal",
    handle: "galega-from-alentejo",
    image: bottleImage,
    tagline: "For the bold. A peppery kick that lingers.",
  },
  {
    name: "Picual",
    subtitle: "Bold & Herbaceous",
    origin: "Jaén, Spain",
    handle: "picual",
    image: bottleImage,
    tagline: "Fresh grass and green tomato on the nose.",
  },
  {
    name: "Nocellara",
    subtitle: "Round & Nutty",
    origin: "Sicily, Italy",
    handle: "nocellara",
    image: bottleImage,
    tagline: "Almond and golden pear. Smooth every day.",
  },
];

export const OilProductWidgets = () => {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: '#1B4229' }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #B3E58C 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: '1400px' }}>
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              color: '#FFFAEA',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '0.05em',
            }}
          >
            Three Groves, Three Characters
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#B3E58C',
              opacity: 0.8,
              fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
              lineHeight: 1.7,
            }}
          >
            Single-variety oils from select groves across the Mediterranean.
            <br className="hidden md:block" />
            Discover which one suits your palate.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {oils.map((oil) => (
            <Link
              key={oil.handle}
              to={`/product/${oil.handle}`}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: '#FFFAEA',
                boxShadow: '0 4px 30px -8px rgba(0,0,0,0.3)',
              }}
            >
              {/* Image */}
              <div className="w-full aspect-[3/4] overflow-hidden relative">
                <img
                  src={oil.image}
                  alt={`${oil.name} olive oil bottle`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom of image */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background: 'linear-gradient(to top, #FFFAEA 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Text content */}
              <div className="px-6 pb-7 pt-2 flex flex-col items-center text-center -mt-4 relative z-10">
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'Beverly Drive, serif',
                    color: '#1B4229',
                    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {oil.name}
                </h3>

                <p
                  className="uppercase tracking-[0.15em] mb-3"
                  style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    color: '#1B4229',
                    fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)',
                    opacity: 0.5,
                  }}
                >
                  {oil.subtitle} · {oil.origin}
                </p>

                <p
                  className="mb-5 italic"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#1B4229',
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.15rem)',
                    opacity: 0.7,
                    lineHeight: 1.5,
                  }}
                >
                  "{oil.tagline}"
                </p>

                <span
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: '#1B4229',
                    color: '#CDDB2D',
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)',
                    letterSpacing: '0.1em',
                  }}
                >
                  DISCOVER
                  <OliveLeaf className="w-2.5 h-4" fill="#CDDB2D" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="mt-16 md:mt-24 rounded-2xl px-8 py-10 md:py-14 text-center relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(205, 219, 45, 0.08)',
            border: '1px solid rgba(205, 219, 45, 0.15)',
          }}
        >
          {/* Decorative leaves */}
          <div className="absolute top-4 left-6 opacity-20">
            <OliveLeaf className="w-6 h-10" fill="#CDDB2D" />
          </div>
          <div className="absolute bottom-4 right-6 opacity-20 rotate-180">
            <OliveLeaf className="w-6 h-10" fill="#CDDB2D" />
          </div>

          <p
            className="mb-2"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#B3E58C',
              fontSize: 'clamp(0.85rem, 1vw, 1rem)',
              opacity: 0.6,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            60 seconds · 5 questions
          </p>

          <h3
            className="mb-3"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              color: '#FFFAEA',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)',
            }}
          >
            Not sure which oil is for you?
          </h3>

          <p
            className="mb-8 max-w-lg mx-auto italic"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#B3E58C',
              fontSize: 'clamp(1rem, 1.3vw, 1.3rem)',
              opacity: 0.8,
              lineHeight: 1.6,
            }}
          >
            Take our palate quiz and we'll match you with the oil that fits your taste, kitchen, and lifestyle.
          </p>

          <Link
            to="/quiz"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              backgroundColor: '#CDDB2D',
              color: '#1B4229',
              fontSize: 'clamp(0.9rem, 1.1vw, 1.15rem)',
              letterSpacing: '0.08em',
              fontWeight: 600,
            }}
          >
            Find Your Oil
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
