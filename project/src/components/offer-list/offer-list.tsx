import { OfferType } from '../../types';
import { OfferCard } from '../offer-card';

type PropsType = {
  offersList: OfferType[] | null;
  setActiveCardId?: (id: number | null) => void;
  className?: string;
  activeCardId?: number | null;
  cardClasses?: {
    card: string;
    imageWrapper: string;
  };
};

const OfferList = ({
  offersList,
  setActiveCardId,
  className,
  cardClasses,
  activeCardId,
}: PropsType) => (
  <div className={`places__list ${className ? className : ''}`}>
    {offersList &&
      offersList.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setActiveCardId={setActiveCardId}
          classes={cardClasses}
          activeCardId={activeCardId}
        />
      ))}
  </div>
);

export default OfferList;
