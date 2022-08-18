import { AddCommentForm } from '../../components/add-comment-form';
import { Header } from '../../components/header';
import { Map } from '../../components/map';
import { ReviewList } from '../../components/review-list';
import { OfferList } from '../../components/offer-list';
import { CARD_CLASSES } from '../../constants';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import {
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOfferNearbyAction,
} from '../../store/api-actions';
import { AuthStatus } from '../../components/router/enums';
import { convertRatingToWidth } from '../../helpers';

export const Room = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const offer = useAppSelector((state) => state.currentOffer);
  const reviews = useAppSelector((state) => state.currentOfferComments);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const nearby = useAppSelector((state) => state.nearbyOffers);
  const activeCity = useAppSelector((state) => state.currentCity);

  useEffect(() => {
    dispatch(fetchOfferAction(Number(id)));
    dispatch(fetchOfferCommentsAction(Number(id)));
    dispatch(fetchOfferNearbyAction(Number(id)));
  }, [dispatch, id]);

  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {offer &&
                offer.images.slice(0, 6).map((image) => (
                  <div className='property__image-wrapper' key={image}>
                    <img className='property__image' src={image} alt='' />
                  </div>
                ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {offer?.isPremium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}

              <div className='property__name-wrapper'>
                <h1 className='property__name'>{offer?.title}</h1>
                <button
                  className='property__bookmark-button button'
                  type='button'
                >
                  <svg
                    className='property__bookmark-icon'
                    width='31'
                    height='33'
                  >
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span
                    style={{
                      width: offer ? convertRatingToWidth(offer.rating) : '80%',
                    }}
                  />
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {offer?.rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {offer?.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer?.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {offer?.goods.map((good) => (
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
                      src={offer?.host.avatarUrl}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>
                    {offer?.host.name}
                  </span>
                  <span className='property__user-status'>
                    {offer?.host.isPro}
                  </span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>{offer?.description}</p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot;{' '}
                  <span className='reviews__amount'>
                    {reviews ? reviews.length : 0}
                  </span>
                </h2>
                <ReviewList reviews={reviews} />
                {authStatus === AuthStatus.Auth && <AddCommentForm />}
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <Map
              currentOffer={offer}
              offers={nearby}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
              activeCity={activeCity}
            />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <OfferList
              className='near-places__list'
              offersList={nearby}
              cardClasses={CARD_CLASSES.near}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
            />
          </section>
        </div>
      </main>
    </div>
  );
};
