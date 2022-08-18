import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthStatus } from '../components/router/enums';
import { Cities, SortType } from '../constants';
import { OfferType, ReviewType } from '../types';

export const changeCurrentCity = createAction<{ currentCity: Cities }>(
  'changeCity'
);
export const getAllOffers = createAction<{ offers: OfferType[] }>('getOffers');
export const getOffersByCity = createAction('getOffersByCity');
export const changeSortType = createAction<{ sortType: SortType }>(
  'changeSortType'
);
export const sortOffers = createAction('sortOffers');

export const loadOffers = createAction<OfferType[]>('loadOffers');

export const loadingStatus = createAction<boolean>('loadingStatus');
export const changeAuthStatus = createAction<AuthStatus>('changeAuthStatus');
export const loadOffer = createAction<OfferType>('loadOffer');
export const loadComments = createAction<ReviewType[]>('loadComments');
export const loadNearby = createAction<OfferType[]>('loadNearby');

export const setSityLocation = createAction('setSityLocation');

export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
