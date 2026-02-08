import { Link } from "react-router-dom";
import bottleImage from "@/assets/attimo-bottle-final.jpg";

const oils = [
  {
    name: "Coratina",
    subtitle: "Intense & Peppery",
    origin: "Alentejo, Portugal",
    handle: "galega-from-alentejo",
    image: bottleImage,
  },
  {
    name: "Picual",
    subtitle: "Bold & Herbaceous",
    origin: "Jaén, Spain",
    handle: "picual",
    image: bottleImage,
  },
  {
    name: "Nocellara",
    subtitle: "Round & Nutty",
    origin: "Sicily, Italy",
    handle: "nocellara",
    image: bottleImage,
  },
];

export const OilProductWidgets = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <h2
          className="text-center mb-4 tracking-[0.15em]"
          style={{
            fontFamily: 'Beverly Drive Right, serif',
            color: '#1B4229',
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
          }}
        >
          Our Collection
        </h2>
        <p
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#1B4229',
            opacity: 0.7,
            fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
          }}
        >
          Three single-variety oils, each with its own character. Discover which one suits your palate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {oils.map((oil) => (
            <Link
              key={oil.handle}
              to={`/product/${oil.handle}`}
              className="group flex flex-col items-center text-center rounded-2xl p-6 pb-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(27, 66, 41, 0.04)',
                border: '1px solid rgba(27, 66, 41, 0.08)',
              }}
            >
              <div className="w-full aspect-[3/4] mb-6 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={oil.image}
                  alt={`${oil.name} olive oil bottle`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3
                className="tracking-[0.1em] mb-1"
                style={{
                  fontFamily: 'Beverly Drive Right, serif',
                  color: '#1B4229',
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                }}
              >
                {oil.name}
              </h3>

              <p
                className="mb-1"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#1B4229',
                  fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                  opacity: 0.8,
                }}
              >
                {oil.subtitle}
              </p>

              <p
                className="mb-4"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#1B4229',
                  fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
                  opacity: 0.5,
                }}
              >
                {oil.origin}
              </p>

              <span
                className="mt-auto inline-flex items-center gap-1 transition-colors duration-300 group-hover:opacity-100"
                style={{
                  fontFamily: 'UDC Working Man Sans, sans-serif',
                  color: '#1B4229',
                  fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                  opacity: 0.6,
                  letterSpacing: '0.08em',
                }}
              >
                Discover →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
