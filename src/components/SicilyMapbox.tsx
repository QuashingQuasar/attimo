import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiZ2lsbGVzZGMxMSIsImEiOiJjbWg2OWJpemMwaTc3MmxwZzZoZmFwZHE4In0.rymFhv1fJxyZ-8mu93LF8g";

interface SicilyMapboxProps {
  className?: string;
}

export const SicilyMapbox = ({ className = "" }: SicilyMapboxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const darkGreen = "#1B4229";
    const lineGreen = "#9aef80";

    const m = new mapboxgl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "ne-countries": {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
        },
        layers: [
          {
            id: "background",
            type: "background",
            paint: { "background-color": darkGreen },
          },
          {
            id: "country-borders",
            type: "line",
            source: "ne-countries",
            "source-layer": "country_boundaries",
            paint: {
              "line-color": lineGreen,
              "line-width": 3,
              "line-opacity": 1,
            },
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
          },
        ],
      },
      center: [14.5, 39.5],
      zoom: 4.2,
      interactive: false,
      attributionControl: false,
      maxZoom: 4.2,
      minZoom: 4.2,
    });

    mapRef.current = m;

    m.on("load", () => {
      const markerEl = document.createElement("div");
      markerEl.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;pointer-events:none;">
          <div style="color:#FFFAEA;font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;white-space:nowrap;text-shadow:0 1px 4px rgba(0,0,0,0.4);">
            Sicily, Italy
          </div>
          <div style="width:1.5px;height:28px;background:#FFFAEA;opacity:0.9;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#FFFAEA;"></div>
        </div>
      `;

      new mapboxgl.Marker({ element: markerEl, anchor: "bottom" })
        .setLngLat([13.3, 37.85])
        .addTo(m);
    });

    return () => {
      m.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className={`rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: 280 }}
    />
  );
};
