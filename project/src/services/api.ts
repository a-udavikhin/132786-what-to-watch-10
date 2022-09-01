import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {store} from '../store';
import {userProcess} from '../store/user-process/user-process';
import {getToken} from './token';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT_MS = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT_MS,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) =>
    {
      if (error.response?.data.error && error.response.status === 401) {
        store.dispatch(userProcess.actions.setError(error.response.data.error));
      }

      throw error;
    }
  );


  return api;
};
