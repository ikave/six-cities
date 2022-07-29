import { OfferType } from '../../types';
import { OfferCard } from '../offer-card';

type PropsType = {
  offersList: OfferType[];
  onMouseOver: (id: number) => void;
};

const OfferList = ({ offersList, onMouseOver }: PropsType) => (
  <div className='cities__places-list places__list tabs__content'>
    {offersList.map((offer) => (
      <OfferCard key={offer.id} offer={offer} onMouseOver={onMouseOver} />
    ))}
  </div>
);

export default OfferList;
