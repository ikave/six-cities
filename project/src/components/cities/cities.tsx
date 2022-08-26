import { memo, useState } from 'react';
import cn from 'classnames';

import { Map } from '../map';
import { PlacesEmpty } from '../places-empty';
import { Places } from '../places';
import { Spinner } from '../spinner';

import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/app-process/selectors';
import {
  getCurrentCityLocation,
  getDataLoadedStatus,
  getSortedOffersByType,
} from '../../store/app-data/selectors';

const Cities = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const offers = useAppSelector(getSortedOffersByType);
  const currentCity = useAppSelector(getCurrentCity);
  const currentCitylocation = useAppSelector(getCurrentCityLocation);
  const isLoading = useAppSelector(getDataLoadedStatus);

  const citiesContainerClasses = cn('cities__places-container', 'container', {
    'cities__places-container--empty': !offers.length,
  });

  return (
    <div className='cities'>
      <div className={citiesContainerClasses}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {offers.length ? (
              <Places
                className='cities__places'
                setActiveCardId={setActiveCardId}
              />
            ) : (
              <PlacesEmpty />
            )}
            <div className='cities__right-section'>
              {offers.length && (
                <Map
                  currentOffer={null}
                  offers={offers}
                  activeCardId={activeCardId}
                  activeCity={currentCity}
                  cityLocation={currentCitylocation}
                  className='cities__map'
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Cities);
