import { Header } from '../../components/header';
import { OfferList } from '../../components/offer-list';
import { OfferType } from '../../types';
import { Map } from '../../components/map';
import { useState } from 'react';
import { CARD_CLASSES } from '../../constants';

type PropsType = {
  numberOfRentalOffers: number;
  offersList: OfferType[];
};

export const Main = ({ numberOfRentalOffers, offersList }: PropsType) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#1'>
                  <span>Paris</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#1'>
                  <span>Cologne</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#1'>
                  <span>Brussels</span>
                </a>
              </li>
              <li className='locations__item'>
                <a
                  className='locations__item-link tabs__item tabs__item--active'
                  href='#1'
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#1'>
                  <span>Hamburg</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#1'>
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {numberOfRentalOffers} places to stay in Amsterdam
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
                offersList={offersList}
                onMouseOver={setActiveCardId}
                cardClasses={CARD_CLASSES.cities}
                activeCardId={activeCardId}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  activeCardId={activeCardId}
                  offersList={offersList}
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
