import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppRoute, AuthStatus } from '../components/router/enums';
import { ERROR_SHOW_TIMEOUT } from '../constants';
import { APIRoute } from '../services/consts';
import { saveToken } from '../services/token';
import { LoginData, OfferType } from '../types';
import { AppDispatch, State } from '../types/state';
import {
  changeAuthStatus,
  getOffersByCity,
  loadComments,
  loadingStatus,
  loadNearby,
  loadOffer,
  loadOffers,
  redirectToRoute,
  setError,
  setSityLocation,
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
    dispatch(setSityLocation());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    dispatch(loadingStatus(false));
  }
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('checkAuthStatus', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(changeAuthStatus(AuthStatus.Auth));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch(changeAuthStatus(AuthStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  LoginData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('login', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const {
      data: { token },
    } = await api.post(APIRoute.Login, {
      email,
      password,
    });
    saveToken(token);
    dispatch(changeAuthStatus(AuthStatus.Auth));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('loguot', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dispatch(changeAuthStatus(AuthStatus.NoAuth));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});

export const fetchOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get(`${APIRoute.Offers}/${id}`);
    dispatch(loadOffer(data));
  } catch (error) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
});

export const fetchOfferCommentsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
});

export const fetchOfferNearbyAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadNearby(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
});

export const clearErrorAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
  }
>('clearError', (_arg, { dispatch }) => {
  setTimeout(() => {
    dispatch(setError(null));
  }, ERROR_SHOW_TIMEOUT);
});
