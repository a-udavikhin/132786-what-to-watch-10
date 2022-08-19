import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {Film} from '../types/film';
import {loadFilms, setAuthorizationStatus, setDataLoadingStatus, setError} from './action';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {store} from '.';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {handleError} from '../services/handle-error';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(`${APIRoute.Films}`);
      dispatch(setDataLoadingStatus(true));
      dispatch(loadFilms(data));
    } catch(error) {
      handleError((error as Error).message);
    } finally {
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch(error) {
      handleError((error as Error).message);
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);
