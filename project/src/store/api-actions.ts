import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import {Film} from '../types/film';
import {loadFilms, setDataLoadingStatus, setError} from './action';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import { store } from '.';

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
      dispatch(setError((error as Error).message));
    } finally {
      dispatch(setDataLoadingStatus(false));
      dispatch(clearErrorAction());
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
