import { createReducer } from '@reduxjs/toolkit';
import {
  changeCurrentCity,
  changeSortType,
  getAllOffers,
  getOffersByCity,
  sortOffers,
  loadOffers,
  loadingStatus,
  changeAuthStatus,
  loadOffer,
  loadComments,
  loadNearby,
  setSityLocation,
} from './action';
import { Cities, SortType } from '../constants';
import { LocationType, OfferType, ReviewType } from '../types';
import { AuthStatus } from '../components/router/enums';

type StateProps = {
  currentCity: Cities;
  offers: OfferType[];
  offersByCurrentCity: OfferType[];
  sortType: SortType;
  sortedOffers: OfferType[];
  isLoading: boolean;
  authorizationStatus: AuthStatus;
  currentOffer: OfferType | undefined;
  currentOfferComments: ReviewType[] | null;
  nearbyOffers: OfferType[];
  error: string | null;
  cityLocation: LocationType | null;
};

const initialState: StateProps = {
  currentCity: Cities.Paris,
  offers: [],
  offersByCurrentCity: [],
  sortType: SortType.Popular,
  sortedOffers: [],
  isLoading: true,
  authorizationStatus: AuthStatus.NoAuth,
  currentOffer: undefined,
  currentOfferComments: null,
  nearbyOffers: [],
  error: null,
  cityLocation: null,
};

const sortOptionsByType = (offers: OfferType[], type: SortType) => {
  switch (type) {
    case SortType.Popular:
      return offers;
    case SortType.PriceHighToLow:
      return offers.sort((a: OfferType, b: OfferType) => {
        if (a.price > b.price) {
          return -1;
        } else {
          return 1;
        }
      });
    case SortType.PriceLowToHigh:
      return offers.sort((a: OfferType, b: OfferType) => {
        if (a.price < b.price) {
          return -1;
        } else {
          return 1;
        }
      });
    case SortType.TopRatedFirst:
      return offers.sort((a: OfferType, b: OfferType) => {
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

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(getAllOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(getOffersByCity, (state) => {
      state.offersByCurrentCity = state.offers.filter(
        ({ city }) => city.name === state.currentCity
      );
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sortType;
    })
    .addCase(sortOffers, (state) => {
      state.sortedOffers = sortOptionsByType(
        state.offersByCurrentCity,
        state.sortType
      );
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.currentOfferComments = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setSityLocation, (state) => {
      // eslint-disable-next-line no-console
      console.log(state.offersByCurrentCity[0].city);
      state.cityLocation = state.offersByCurrentCity[0].city.location;
    });
});
