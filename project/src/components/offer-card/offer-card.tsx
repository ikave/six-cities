import { memo, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { capitalizeFirstLetter, convertRatingToWidth } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOfferStatus } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-data/selectors';
import { CardClassType, OfferType } from '../../types';
import { AppRoute, AuthStatus } from '../router/enums';
import { ToggleFavoriteButton } from '../toggle-favorite-button';

type PropsType = {
  offer: OfferType;
  setActiveCardId?: (id: number | null) => void;
  classes?: CardClassType;
  className?: string;
};

const OfferCard = ({
  offer,
  setActiveCardId,
  classes,
  className,
}: PropsType) => {
  const {
    type,
    rating,
    isPremium,
    isFavorite,
    id,
    price,
    title,
    previewImage,
  } = offer;
  const [isAddedToFavorite, setIsAddedToFavorite] =
    useState<boolean>(isFavorite);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);
  const offerType = capitalizeFirstLetter(type);
  const ratingWidth = convertRatingToWidth(rating);

  const handleButtonClick = useCallback(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(changeOfferStatus({ id, status: Number(!isAddedToFavorite) }));
      setIsAddedToFavorite(!isAddedToFavorite);
    } else {
      navigate(AppRoute.Login);
    }
  }, [authStatus, dispatch, id, isAddedToFavorite, navigate]);

  const mouseEnterHandler = () => {
    if (setActiveCardId) {
      setActiveCardId(id);
    }
  };

  const mouseLeaveHandler = () => {
    if (setActiveCardId) {
      setActiveCardId(null);
    }
  };

  const cardClasses = cn('place-card', className);

  return (
    <article
      className={cardClasses}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}

      <div
        className={`place-card__image-wrapper ${
          classes ? classes?.imageWrapper : ''
        }`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className='place-card__image'
            src={previewImage}
            width='260'
            height='200'
            alt=''
          />
        </Link>
      </div>
      <div className='place-card__info'>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{offerType}</p>
      </div>
    </article>
  );
};

export default memo(OfferCard);
