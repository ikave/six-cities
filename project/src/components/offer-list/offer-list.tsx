import { useState } from 'react';
import { OfferType } from '../../types';
import Card from '../card/card';

type PropsType = {
  offersList: OfferType[];
};

const OfferList = ({ offersList }: PropsType) => {
  const [activeCard, setActiveCard] = useState<OfferType | null>(null);

  const onMouseOver = (offer: OfferType) => {
    setActiveCard(offer);
    // eslint-disable-next-line no-console
    console.log(activeCard);
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offersList.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={onMouseOver} />
      ))}
    </div>
  );
};
export default OfferList;
