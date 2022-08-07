import L, { Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { defaultCustomIcon, currentCustomIcon } from './const';
import useMap from '../../hooks/useMap';
import { OfferType } from '../../types';

type PropsType = {
  activeCardId?: number | null;
  offersList: OfferType[];
  currentOffer?: OfferType;
  setActiveCardId: (id: number) => void;
};

export const Map = ({
  activeCardId,
  offersList,
  currentOffer,
  setActiveCardId,
}: PropsType) => {
  const defaultCityLocation = offersList[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCityLocation);

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
      offersList.forEach(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(id === activeCardId ? currentCustomIcon : defaultCustomIcon)
          .addTo(map)
          .on('mouseover', () => setActiveCardId(id));
      });
    }
  }, [map, activeCardId, offersList, currentOffer, setActiveCardId]);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
};
