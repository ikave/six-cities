import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../services/consts';
import { saveToken } from '../services/token';
import { LoginData, OfferType, ReviewType, UserType } from '../types';

export const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);

  return data;
});

export const fetchFavoritOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('data/fetchFavoritOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Favorites);

  return data;
});

export const fetchOfferAction = createAsyncThunk<
  OfferType,
  number,
  {
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { extra: api }) => {
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);

  return data;
});

export const fetchOfferCommentsAction = createAsyncThunk<
  ReviewType[],
  number,
  {
    extra: AxiosInstance;
  }
>('data/fetchOfferComments', async (id, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);

  return data;
});

export const addOfferCommentAction = createAsyncThunk<
  ReviewType[],
  {
    id: number;
    comment: string;
    rating: number;
  },
  {
    extra: AxiosInstance;
  }
>('data/addOfferComment', async ({ id, comment, rating }, { extra: api }) => {
  const { data } = await api.post<ReviewType[]>(`${APIRoute.Comments}/${id}`, {
    comment,
    rating,
  });

  return data;
});

export const fetchOfferNearbyAction = createAsyncThunk<
  OfferType[],
  number,
  {
    extra: AxiosInstance;
  }
>('data/fetchOfferNearby', async (id, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(
    `${APIRoute.Offers}/${id}/nearby`
  );

  return data;
});

export const changeOfferStatus = createAsyncThunk<
  OfferType,
  { id: number; status: number },
  {
    extra: AxiosInstance;
  }
>('data/changeOfferStatus', async ({ id, status }, { extra: api }) => {
  const { data } = await api.post<OfferType>(
    `${APIRoute.Favorites}/${id}/${status}`
  );

  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserType,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAuthStatus', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserType>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserType,
  LoginData,
  {
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<UserType>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);

  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/loguot', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
});
