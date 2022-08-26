import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthStatus } from '../components/router/enums';
import { APIRoute } from '../services/consts';
import { saveToken } from '../services/token';
import { LoginData, OfferType } from '../types';
import { AppDispatch, State } from '../types/state';
import {
  changeAuthStatus,
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
