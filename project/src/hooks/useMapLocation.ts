import { Map } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import { City } from '../constants';
import { LocationType } from '../types';

const useMapLocation = (
  prevCityRef: MutableRefObject<City>,
  activeCity: City,
  cityLocation: LocationType,
  map: Map | null
): void => {
  useEffect(() => {
    prevCityRef.current = activeCity;

    if (map) {
      map.setView(
        {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude,
        },
        cityLocation.zoom
      );
    }
  }, [activeCity, cityLocation, map, prevCityRef]);
};

export default useMapLocation;
