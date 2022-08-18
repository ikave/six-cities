import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';
import { getToken } from './token';

const BACKEND_URL = 'https://10.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (responce) => responce,
    (error: AxiosError) => {
      if (error.response) {
        setError(error.response.data.error);
        clearErrorAction();
      }
      throw error;
    }
  );

  return api;
};
