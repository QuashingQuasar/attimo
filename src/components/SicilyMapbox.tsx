import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiZ2lsbGVzZGMxMSIsImEiOiJjbWg2OWJpemMwaTc3MmxwZzZoZmFwZHE4In0.rymFhv1fJxyZ-8mu93LF8g";

interface SicilyMapboxProps {
  className?: string;
  interactive?: boolean;
}

export const SicilyMapbox = ({ className = "", interactive = false }: SicilyMapboxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [12.8, 37.85],
      zoom: 7.2,
      interactive,
      attributionControl: false,
      pitch: 0,
    });

    const m = map.current;

    m.on("load", () => {
      // Marker for Trapani / Belice Valley
      const markerEl = document.createElement("div");
      markerEl.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;">
          <div style="background:#ECA948;color:#1B4229;font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:600;padding:4px 10px;border-radius:6px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.3);">
            Belice Valley
          </div>
          <div style="width:2px;height:8px;background:#ECA948;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#ECA948;border:2px solid #1B4229;"></div>
        </div>
      `;

      new mapboxgl.Marker({ element: markerEl, anchor: "bottom" })
        .setLngLat([12.95, 37.78])
        .addTo(m);

      // Marker for Trapani
      const trapaniEl = document.createElement("div");
      trapaniEl.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;">
          <div style="background:rgba(255,250,234,0.9);color:#1B4229;font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:500;padding:3px 8px;border-radius:4px;white-space:nowrap;">
            Trapani
          </div>
          <div style="width:2px;height:6px;background:rgba(255,250,234,0.9);"></div>
          <div style="width:6px;height:6px;border-radius:50%;background:rgba(255,250,234,0.9);"></div>
        </div>
      `;

      new mapboxgl.Marker({ element: trapaniEl, anchor: "bottom" })
        .setLngLat([12.51, 38.02])
        .addTo(m);
    });

    return () => {
      m.remove();
      map.current = null;
    };
  }, [interactive]);

  return (
    <div
      ref={mapContainer}
      className={`rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: 300 }}
    />
  );
};
