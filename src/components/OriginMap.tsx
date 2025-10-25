import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const OriginMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTQ3djVsYjUwcmx5Mm1xNzFoNXlrenpmIn0.YxL0Hv8LvJe6Hx9KDPbvNg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-7.9, 38.5], // Alentejo coordinates
      zoom: 6,
      interactive: false,
      attributionControl: false,
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add a marker for Alentejo
      new mapboxgl.Marker({
        color: '#CDDB2D',
        scale: 0.8,
      })
        .setLngLat([-7.9, 38.5])
        .addTo(map.current);

      // Add custom styling to make borders green
      map.current.setPaintProperty('admin-0-boundary', 'line-color', '#7FB069');
      map.current.setPaintProperty('admin-1-boundary', 'line-color', '#7FB069');
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="rounded-xl border border-olive-dark overflow-hidden h-full bg-olive-dark relative">
      <div ref={mapContainer} className="absolute inset-0" />
      <div 
        className="absolute top-3 right-3 px-3 py-1.5 rounded-md"
        style={{
          backgroundColor: 'rgba(27, 66, 41, 0.95)',
        }}
      >
        <div 
          className="font-semibold uppercase tracking-wide text-center"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(0.75rem, 0.9vw, 1rem)',
          }}
        >
          ORIGIN
        </div>
        <div
          className="font-bold mt-0.5"
          style={{
            color: '#CDDB2D',
            fontFamily: 'UDC Working Man Sans, sans-serif',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.3rem)',
          }}
        >
          Alentejo, Portugal
        </div>
      </div>
    </div>
  );
};
