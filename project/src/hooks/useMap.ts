import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { LocationType } from '../types';
import 'leaflet/dist/leaflet.css';

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  location: LocationType
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderMapRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderMapRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderMapRef.current = true;
    }
  }, [mapRef, map, location]);

  return map;
};

export default useMap;
