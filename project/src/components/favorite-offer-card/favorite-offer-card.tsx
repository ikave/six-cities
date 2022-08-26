import { useState } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, convertRatingToWidth } from '../../helpers';
import { useAppDispatch } from '../../hooks';
import { changeOfferStatus } from '../../store/api-actions';
import { OfferType } from '../../types';
import { AppRoute } from '../router/enums';
import { ToggleFavoriteButton } from '../toggle-favorite-button';

type PropsType = {
  offer: OfferType;
};

const FavoriteOfferCard = ({
  offer: {
    type,
    rating,
    isPremium,
    price,
    title,
    previewImage,
    id,
    isFavorite,
  },
}: PropsType) => {
  const [isAddedToFavorite, setIsAddedToFavorite] =
    useState<boolean>(isFavorite);
  const dispatch = useAppDispatch();
  const offerType = capitalizeFirstLetter(type);
  const ratingWidth = convertRatingToWidth(rating);

  const handleButtonClick = () => {
    dispatch(changeOfferStatus({ id, status: Number(!isAddedToFavorite) }));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (
    <article className='favorites__card place-card'>
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${id}`}>
          <img
            className='place-card__image'
            src={previewImage}
            width='150'
            height='110'
            alt=''
          />
        </Link>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <ToggleFavoriteButton
            isFavorite={isFavorite}
            onClick={handleButtonClick}
            className='place-card__bookmark-button'
          />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: ratingWidth }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{offerType}</p>
      </div>
    </article>
  );
};

export default FavoriteOfferCard;
