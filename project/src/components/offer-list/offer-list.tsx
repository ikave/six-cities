import { memo } from 'react';
import cn from 'classnames';
import { OfferType } from '../../types';
import { OfferCard } from '../offer-card';

type PropsType = {
  offersList: OfferType[];
  setActiveCardId?: (id: number | null) => void;
  className?: string;
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
}: PropsType) => {
  const offerListClasses = cn('places__list', className);

  return (
    <div className={offerListClasses}>
      {offersList.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setActiveCardId={setActiveCardId}
          classes={cardClasses}
          className='cities__card'
        />
      ))}
    </div>
  );
};

export default memo(OfferList);
