import { createSelector } from 'reselect';
import { NameSpace, SortType } from '../../constants';
import { OfferType, ReviewType } from '../../types';
import { State } from '../../types/state';
import { getCurrentCity, getSortType } from '../app-process/selectors';

export const getOffers = (state: State): OfferType[] =>
  state[NameSpace.Data].offers;

export const getFavoriteOffers = (state: State): OfferType[] =>
  state[NameSpace.Data].favorites;

export const getCurrentOffer = (state: State): OfferType | null =>
  state[NameSpace.Data].currentOffer;

export const getOfferComments = (state: State): ReviewType[] =>
  state[NameSpace.Data].reviews;

export const getOfferNearby = (state: State): OfferType[] =>
  state[NameSpace.Data].nearby;

export const getDataLoadedStatus = (state: State): boolean =>
  state[NameSpace.Data].isLoadingData;

export const filterCurrentCityOffers = createSelector(
  [getCurrentCity, getOffers],
  (currentCity, offers) =>
    offers.filter(({ city }) => city.name === currentCity)
);

const sortOptionsByType = (offers: OfferType[], type: SortType) => {
  switch (type) {
    case SortType.Popular:
      return offers;
    case SortType.PriceHighToLow:
      return offers.slice().sort((a: OfferType, b: OfferType) => {
        if (a.price > b.price) {
          return -1;
        } else {
          return 1;
        }
      });
    case SortType.PriceLowToHigh:
      return offers.slice().sort((a: OfferType, b: OfferType) => {
        if (a.price < b.price) {
          return -1;
        } else {
          return 1;
        }
      });
    case SortType.TopRatedFirst:
      return offers.slice().sort((a: OfferType, b: OfferType) => {
        if (a.rating > b.rating) {
          return -1;
        } else {
          return 1;
        }
      });
    default:
      return offers;
  }
};

export const getSortedOffersByType = createSelector(
  [getSortType, filterCurrentCityOffers],
  (sortType, offers) => sortOptionsByType(offers, sortType)
);

const DefaultCityLocation = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

export const getCurrentCityLocation = createSelector(
  [getCurrentCity, getOffers],
  (currentCity, offers) => {
    const item = offers.find((offer) => offer.city.name === currentCity);
    if (!item) {
      return DefaultCityLocation;
    }
    return item.city.location;
  }
);
