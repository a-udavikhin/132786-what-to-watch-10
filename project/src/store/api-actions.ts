import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const';
import {Film, FilmDetailed} from '../types/film';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user';
import {AuthData} from '../types/auth-data';
import {handleError} from '../services/handle-error';
import {ReviewEntry} from '../types/review';
import {CommentData} from '../types/comment-data';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}123`);

    return data;
  }
);

export const fetchFilmDetailsAction = createAsyncThunk<FilmDetailed, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmDetails',
  async (filmId, {dispatch, extra: api}) => {
    const {data: info} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    const {data: similar} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    const {data: reviews} = await api.get<ReviewEntry[]>(`${APIRoute.Comments}/${filmId}`);

    return {info, similar, reviews};
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);

    return data;
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
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  }
);
