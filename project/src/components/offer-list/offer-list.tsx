import { OfferType } from '../../types';
import { OfferCard } from '../offer-card';

type PropsType = {
  offersList: OfferType[];
  onMouseOver?: (id: number) => void;
  className?: string;
  activeCardId?: number | null;
  cardClasses?: {
    card: string;
    imageWrapper: string;
  };
};

const OfferList = ({
  offersList,
  onMouseOver,
  className,
  cardClasses,
  activeCardId,
}: PropsType) => (
  <div className={`places__list ${className ? className : ''}`}>
    {offersList.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onMouseOver={onMouseOver}
        classes={cardClasses}
        activeCardId={activeCardId}
      />
    ))}
  </div>
);

export default OfferList;
