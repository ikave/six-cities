import { Header } from '../../components/header';
import { OfferList } from '../../components/offer-list';
import { Map } from '../../components/map';
import { useEffect, useState } from 'react';
import { CARD_CLASSES } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityList } from '../../components/city-list';
import { getOffersByCity } from '../../store/action';

export const Main = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offersByCurrentCity);
  const currentCity = useAppSelector((state) => state.currentCity);

  useEffect(() => {
    dispatch(getOffersByCity());
  }, [dispatch, currentCity]);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <CityList />
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {offers.length} places to stay in {currentCity}
              </b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList
                className='cities__places-list'
                offersList={offers}
                setActiveCardId={setActiveCardId}
                cardClasses={CARD_CLASSES.cities}
                activeCardId={activeCardId}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  offers={offers}
                  activeCardId={activeCardId}
                  setActiveCardId={setActiveCardId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
