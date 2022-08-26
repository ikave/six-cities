import { useEffect } from 'react';
import cn from 'classnames';

import { Header } from '../../components/header';
import { FavoriteOfferList } from '../../components/favorite-offer-list';
import { Footer } from '../../components/footer';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/app-data/selectors';

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);

  const pageClasses = cn('page', {
    'page--favorites-empty': !favorites.length,
  });

  const mainClasses = cn('page__main page__main--favorites', {
    'page__main--favorites-empty': !favorites.length,
  });

  useEffect(() => {
    dispatch(fetchFavoritOffersAction());
  }, [dispatch]);

  return (
    <div className={pageClasses}>
      <Header />
      <main className={mainClasses}>
        <div className='page__favorites-container container'>
          {favorites.length ? (
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <FavoriteOfferList favorites={favorites} />
            </section>
          ) : (
            <section className='favorites favorites--empty'>
              <h1 className='visually-hidden'>Favorites (empty)</h1>
              <div className='favorites__status-wrapper'>
                <b className='favorites__status'>Nothing yet saved.</b>
                <p className='favorites__status-description'>
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
