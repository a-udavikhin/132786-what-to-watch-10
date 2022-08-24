import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {Film} from '../types/film';
import {loadFilms, setAuthorizationStatus, setCurrentFilmData, setIsFilmsLoading, setIsFilmDetailsLoading, setError} from './action';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {store} from '.';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user';
import {AuthData} from '../types/auth-data';
import {handleError} from '../services/handle-error';
import {ReviewEntry} from '../types/review';
import {CommentData} from '../types/comment-data';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(setIsFilmsLoading(true));
      dispatch(loadFilms(data));
    } catch(error) {
      handleError((error as Error).message);
    } finally {
      dispatch(setIsFilmsLoading(false));
    }
  }
);

export const fetchFilmDetailsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmDetails',
  async (filmId, {dispatch, extra: api}) => {
    try {
      dispatch(setIsFilmDetailsLoading(true));
      const {data: info} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      const {data: similar} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
      const {data: reviews} = await api.get<ReviewEntry[]>(`${APIRoute.Comments}/${filmId}`);
      dispatch(setCurrentFilmData({info, similar, reviews}));
    } catch(error) {
      handleError((error as Error).message);
    } finally {
      dispatch(setIsFilmDetailsLoading(false));
    }
  }
);

export const sendReviewAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendReview',
  async({filmId, comment, rating}, {dispatch, extra: api}) => {
    try {
      await api.post(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    } catch(error) {
      handleError((error as Error).message);
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
