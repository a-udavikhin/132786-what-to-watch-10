import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const';
import {Film} from '../types/film';
import {loadFilms, setDataLoadingStatus} from './action';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setDataLoadingStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadingStatus(false));
  }
);
