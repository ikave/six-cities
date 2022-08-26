import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OfferType, ReviewType } from '../../types';
import { Map } from '../../components/map';
import { AppRoute, AuthStatus } from '../../components/router/enums';
import { convertRatingToWidth } from '../../helpers';
import { getAuthStatus } from '../../store/user-data/selectors';
import { getCurrentCityLocation } from '../../store/app-data/selectors';
import { getCurrentCity } from '../../store/app-process/selectors';
import { changeOfferStatus } from '../../store/api-actions';
import { ToggleFavoriteButton } from '../toggle-favorite-button';
import { Reviews } from '../reviews';
import { OFFER_DETAILS_IMAGES_MAX } from '../../constants';

type PropsType = {
  offer: OfferType;
  comments: ReviewType[];
  nearby: OfferType[];
};

const OfferDetails = ({ offer, comments, nearby }: PropsType) => {
  const {
    id,
    isPremium,
    isFavorite,
    images,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    host,
  } = offer;
  const { avatarUrl, isPro, name } = host;
  const authStatus = useAppSelector(getAuthStatus);
  const currentCitylocation = useAppSelector(getCurrentCityLocation);
  const currentCity = useAppSelector(getCurrentCity);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isAddedToFavorite, setIsAddedToFavorite] =
    useState<boolean>(isFavorite);

  const handleButtonClick = () => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(
        changeOfferStatus({ id: offer.id, status: Number(!isAddedToFavorite) })
      );
      setIsAddedToFavorite(!isAddedToFavorite);
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <section className='property'>
      <div className='property__gallery-container container'>
        <div className='property__gallery'>
          {offer &&
            images.slice(0, OFFER_DETAILS_IMAGES_MAX).map((image) => (
              <div className='property__image-wrapper' key={image}>
                <img className='property__image' src={image} alt='' />
              </div>
            ))}
        </div>
      </div>
      <div className='property__container container'>
        <div className='property__wrapper'>
          {isPremium && (
            <div className='property__mark'>
              <span>Premium</span>
            </div>
          )}

          <div className='property__name-wrapper'>
            <h1 className='property__name'>{title}</h1>
            <ToggleFavoriteButton
              className='property__bookmark-button'
              isFavorite={isAddedToFavorite}
              onClick={handleButtonClick}
            />
          </div>
          <div className='property__rating rating'>
            <div className='property__stars rating__stars'>
              <span
                style={{
                  width: convertRatingToWidth(rating),
                }}
              />
              <span className='visually-hidden'>Rating</span>
            </div>
            <span className='property__rating-value rating__value'>
              {rating}
            </span>
          </div>
          <ul className='property__features'>
            <li className='property__feature property__feature--entire'>
              {type}
            </li>
            <li className='property__feature property__feature--bedrooms'>
              {bedrooms} Bedrooms
            </li>
            <li className='property__feature property__feature--adults'>
              Max {maxAdults} adults
            </li>
          </ul>
          <div className='property__price'>
            <b className='property__price-value'>&euro;{price}</b>
            <span className='property__price-text'>&nbsp;night</span>
          </div>
          <div className='property__inside'>
            <h2 className='property__inside-title'>What&apos;s inside</h2>
            <ul className='property__inside-list'>
              {goods.map((good) => (
                <li key={good} className='property__inside-item'>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className='property__host'>
            <h2 className='property__host-title'>Meet the host</h2>
            <div className='property__host-user user'>
              <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                <img
                  className='property__avatar user__avatar'
                  src={avatarUrl}
                  width='74'
                  height='74'
                  alt='Host avatar'
                />
              </div>
              <span className='property__user-name'>{name}</span>
              <span className='property__user-status'>{isPro && 'Pro'}</span>
            </div>
            <div className='property__description'>
              <p className='property__text'>{description}</p>
            </div>
          </div>
          <Reviews id={id} comments={comments} />
        </div>
      </div>

      <Map
        currentOffer={offer}
        offers={nearby}
        activeCity={currentCity}
        cityLocation={currentCitylocation}
        className='property__map'
      />
    </section>
  );
};

export default OfferDetails;
