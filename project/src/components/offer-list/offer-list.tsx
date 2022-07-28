import { useEffect, useState } from 'react';
import { OfferType } from '../../types';
import { OfferCard } from '../offer-card';

type PropsType = {
  offersList: OfferType[];
};

const OfferList = ({ offersList }: PropsType) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    // "activeCard" добавил в зависимости что бы не ругался линтер
  }, [activeCard]);

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offersList.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onMouseOver={setActiveCard} />
      ))}
    </div>
  );
};
export default OfferList;
