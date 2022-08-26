import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import { getSortedOffersByType } from '../../store/app-data/selectors';
import { getCurrentCity } from '../../store/app-process/selectors';
import { OfferList } from '../../components/offer-list';
import { CARD_CLASSES } from '../../constants';
import { PlacesSortForm } from '../places-sort-form';
import { memo } from 'react';

type PropsType = {
  className?: string;
  setActiveCardId: (id: number | null) => void;
};

const Places = ({ className, setActiveCardId }: PropsType) => {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getSortedOffersByType);

  const placesClasses = cn('places', className);

  return (
    <section className={placesClasses}>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offers.length} places to stay in {currentCity}
      </b>
      <PlacesSortForm />
      <OfferList
        className='cities__places-list tabs__content'
        offersList={offers}
        setActiveCardId={setActiveCardId}
        cardClasses={CARD_CLASSES.cities}
      />
    </section>
  );
};

export default memo(Places);
