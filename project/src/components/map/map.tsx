import L, { Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { defaultCustomIcon, currentCustomIcon } from './const';
import useMap from '../../hooks/useMap';
import { LocationType, OfferType } from '../../types';
import { Cities } from '../../constants';
import useMapLocation from '../../hooks/useMapLocation';

type PropsType = {
  activeCardId?: number | null;
  offers: OfferType[];
  currentOffer?: OfferType;
  activeCity: Cities;
  setActiveCardId: (id: number | null) => void;
};

const getCityLocation = (
  activeCity: Cities,
  offers: OfferType[]
): LocationType => ({
  latitude: 5.2331231,
  longitude: 2.1312323,
  zoom: 13,
});
// if (offers) {
//   const [offer] = offers;

//   return {
//     latitude: offer.city.location.latitude,
//     longitude: offer.city.location.longitude,
//     zoom: offer.city.location.zoom,
//   };
// }

export const Map = ({
  activeCardId,
  offers,
  currentOffer,
  activeCity,
  setActiveCardId,
}: PropsType) => {
  const mapRef = useRef(null);
  const markersRef = useRef<Marker[]>([]);

  const cityLocation = getCityLocation(activeCity, offers);

  const prevCityRef = useRef<Cities>(Cities.Paris);

  const map = useMap(mapRef, {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  });

  useMapLocation(prevCityRef, activeCity, cityLocation, map);

  useEffect(() => {
    if (markersRef.current.length) {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    }
  }, [offers]);

  useEffect(() => {
    if (map) {
      if (currentOffer) {
        const { location } = currentOffer;
        L.circle([location.latitude, location.longitude], {
          radius: 500,
          fillOpacity: 0.5,
          fillColor: '#4481c3',
        }).addTo(map);
      }
    }
  }, [map, currentOffer]);

  useEffect(() => {
    if (map) {
      offers &&
        offers.forEach(({ location, id }) => {
          const marker = new Marker({
            lat: location.latitude,
            lng: location.longitude,
          });

          markersRef.current.push(marker);

          marker
            .setIcon(
              id === activeCardId ? currentCustomIcon : defaultCustomIcon
            )
            .addTo(map)
            .on('mouseover', () => setActiveCardId(id))
            .on('mouseout', () => setActiveCardId(null));
        });
    }
  }, [activeCardId, map, offers, setActiveCardId]);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
};
