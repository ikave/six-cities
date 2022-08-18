import { Map } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import { Cities } from '../constants';
import { LocationType } from '../types';

const useMapLocation = (
  prevCityRef: MutableRefObject<Cities>,
  activeCity: Cities,
  cityLocation: LocationType,
  map: Map | null
): void => {
  useEffect(() => {
    if (prevCityRef.current !== activeCity && map) {
      prevCityRef.current = activeCity;

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
