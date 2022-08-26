import { useEffect } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortedOffersByType } from '../../store/app-data/selectors';
import { fetchOffersAction } from '../../store/api-actions';

import { Header } from '../../components/header';
import { CityTabs } from '../../components/city-tabs';
import { Cities } from '../../components/cities';

export const Main = () => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getSortedOffersByType);

  const mainClasses = cn('page__main', 'page__main--index', {
    'page__main--index-empty': !offers.length,
  });

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className={mainClasses}>
        <h1 className='visually-hidden'>Cities</h1>
        <CityTabs />
        <Cities />
      </main>
    </div>
  );
};
