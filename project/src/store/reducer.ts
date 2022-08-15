import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, getAllOffers, getOffersByCity } from './action';
import { Cities } from '../constants';
import { OfferType } from '../types';

type StateProps = {
  currentCity: Cities;
  offers: OfferType[];
  offersByCurrentCity: OfferType[];
};

const initialState: StateProps = {
  currentCity: Cities.Paris,
  offers: [],
  offersByCurrentCity: [],
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
    });
});
