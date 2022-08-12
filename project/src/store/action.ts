import { createAction } from '@reduxjs/toolkit';
import { Cities, SortType } from '../constants';
import { OfferType } from '../types';

export const changeCurrentCity = createAction<{ currentCity: Cities }>(
  'changeCity'
);
export const getAllOffers = createAction<{ offers: OfferType[] }>('getOffers');
export const getOffersByCity = createAction('getOffersByCity');
export const changeSortType = createAction<{ sortType: SortType }>(
  'changeSortType'
);
export const sortOffers = createAction('sortOffers');
