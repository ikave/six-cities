import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants';
import useMap from '../../hooks/useMap';
import { OfferType } from '../../types';

type PropsType = {
  activeCardId: number | null;
  offersList: OfferType[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const Map = ({ activeCardId, offersList }: PropsType) => {
  const defaultCityLocation = offersList[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCityLocation);

  useEffect(() => {
    if (map) {
      offersList.forEach(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(id === activeCardId ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, activeCardId, offersList]);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
};
