import { Header } from '../../components/header';
import { OfferList } from '../../components/offer-list';
import { Map } from '../../components/map';
import { useEffect, useState } from 'react';
import { CARD_CLASSES } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityList } from '../../components/city-list';
import { getOffersByCity, sortOffers } from '../../store/action';
import { SortOptions } from '../../components/sort-options';

export const Main = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [sortActive, setSortActive] = useState(false);
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.sortedOffers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const sortType = useAppSelector((state) => state.sortType);

  const sortClickHandler = () => {
    setSortActive(!sortActive);
  };

  useEffect(() => {
    dispatch(getOffersByCity());
    dispatch(sortOffers());
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
                <span
                  className='places__sorting-type'
                  tabIndex={0}
                  onClick={sortClickHandler}
                >
                  {sortType}
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <SortOptions
                  sortActive={sortActive}
                  setSortActive={setSortActive}
                />
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
