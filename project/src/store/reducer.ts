import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms, resetFilmList, showMoreFilms, setDataLoadingStatus, setError} from './action';
import {Film} from '../types/film';
import {FILMS_PER_PAGE} from '../const';

type State = {
  genre: string,
  films: Film[],
  filmsToDisplay: number,
  isDataLoading: boolean,
  error: string | null
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  filmsToDisplay: FILMS_PER_PAGE,
  isDataLoading: true,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsToDisplay = FILMS_PER_PAGE;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsToDisplay += FILMS_PER_PAGE;
    })
    .addCase(resetFilmList, (state) => {
      state.genre = 'All genres';
      state.filmsToDisplay = FILMS_PER_PAGE;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
