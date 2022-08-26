import { Marker } from 'leaflet';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import { defaultCustomIcon, currentCustomIcon } from './const';
import useMap from '../../hooks/useMap';
import { LocationType, OfferType } from '../../types';
import { City } from '../../constants';
import useMapLocation from '../../hooks/useMapLocation';

type PropsType = {
  activeCardId?: number | null;
  offers: OfferType[];
  currentOffer: OfferType | null;
  activeCity: City;
  cityLocation: LocationType;
  className?: string;
};

export const Map = ({
  activeCardId,
  offers,
  currentOffer,
  activeCity,
  cityLocation,
  className,
}: PropsType) => {
  const mapRef = useRef(null);
  const markersRef = useRef<Marker[]>([]);

  const prevCityRef = useRef<City>(City.Paris);

  const map = useMap(mapRef, cityLocation);

  const mapClasses = cn('map', className);

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
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        map.setView({ lat: location.latitude, lng: location.longitude }, 13);

        marker.setIcon(currentCustomIcon).addTo(map);
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
            .addTo(map);
        });
    }
  }, [activeCardId, map, offers]);

  return (
    <section className={mapClasses}>
      <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>
    </section>
  );
};
