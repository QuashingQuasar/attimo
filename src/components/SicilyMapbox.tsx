import { useEffect, useRef, useState } from "react";

const NE_110M_URL =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson";

// Simple Mercator projection
function project(lon: number, lat: number, cx: number, cy: number, zoom: number): [number, number] {
  const x = (lon - cx) * zoom;
  const latRad = (lat * Math.PI) / 180;
  const cyRad = (cy * Math.PI) / 180;
  const y = -(Math.log(Math.tan(latRad / 2 + Math.PI / 4)) - Math.log(Math.tan(cyRad / 2 + Math.PI / 4))) * (180 / Math.PI) * zoom;
  return [x, y];
}

function coordsToPath(
  coords: number[][],
  cx: number,
  cy: number,
  zoom: number
): string {
  return coords
    .map((c, i) => {
      const [x, y] = project(c[0], c[1], cx, cy, zoom);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ") + " Z";
}

function geometryToPaths(
  geometry: any,
  cx: number,
  cy: number,
  zoom: number
): string[] {
  const paths: string[] = [];
  if (geometry.type === "Polygon") {
    for (const ring of geometry.coordinates) {
      paths.push(coordsToPath(ring, cx, cy, zoom));
    }
  } else if (geometry.type === "MultiPolygon") {
    for (const polygon of geometry.coordinates) {
      for (const ring of polygon) {
        paths.push(coordsToPath(ring, cx, cy, zoom));
      }
    }
  }
  return paths;
}

interface SicilyMapboxProps {
  className?: string;
}

export const SicilyMapbox = ({ className = "" }: SicilyMapboxProps) => {
  const [paths, setPaths] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Map center and zoom
  const cx = 14.5;
  const cy = 39.5;
  const zoom = 18;

  // SVG viewBox dimensions
  const vw = 500;
  const vh = 350;

  useEffect(() => {
    fetch(NE_110M_URL)
      .then((r) => r.json())
      .then((geojson) => {
        const allPaths: string[] = [];
        for (const feature of geojson.features) {
          allPaths.push(...geometryToPaths(feature.geometry, cx, cy, zoom));
        }
        setPaths(allPaths);
      })
      .catch(console.error);
  }, []);

  // Sicily label position (pointing down-left, ~150° clockwise)
  const [mx, my] = project(13.3, 37.85, cx, cy, zoom);
  // Belice Valley marker
  const [bx, by] = project(12.95, 37.65, cx, cy, zoom);

  return (
    <div ref={containerRef} className={`rounded-2xl overflow-hidden ${className}`} style={{ minHeight: 280, backgroundColor: "#1B4229" }}>
      <svg
        viewBox={`${-vw / 2} ${-vh / 2} ${vw} ${vh}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: "block" }}
      >
        <rect x={-vw / 2} y={-vh / 2} width={vw} height={vh} fill="#1B4229" />

        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#ECA948"
            strokeWidth={4}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}

        {/* Single Belice Valley label */}
        <line
          x1={bx}
          y1={by}
          x2={bx + 58}
          y2={by - 10}
          stroke="#ECA948"
          strokeWidth={1.2}
          opacity={0.9}
        />
        <circle cx={bx} cy={by} r={3} fill="#ECA948" />
        <text
          x={bx + 62}
          y={by - 14}
          fill="#ECA948"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize={11}
          fontWeight={700}
          textAnchor="start"
        >
          Belice Valley
        </text>
      </svg>
    </div>
  );
};
