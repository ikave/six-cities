import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../services/consts';
import { OfferType } from '../types';
import { AppDispatch, State } from '../types/state';
import {
  getOffersByCity,
  loadingStatus,
  loadOffers,
  sortOffers,
} from './action';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(getOffersByCity());
    dispatch(sortOffers());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    dispatch(loadingStatus(false));
  }
});
