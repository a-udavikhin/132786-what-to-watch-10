import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms, resetFilmList, showMoreFilms, setError, setAuthorizationStatus, setCurrentFilmData, setIsFilmsLoading, setIsFilmDetailsLoading} from './action';
import {Film, FilmDetailed} from '../types/film';
import {AuthorizationStatus, FILMS_PER_PAGE} from '../const';

type State = {
  genre: string,
  films: Film[],
  filmsToDisplay: number,
  isFilmsLoading: boolean,
  isFilmDetailsLoading: boolean,
  error: string | null,
  authorizationStatus: AuthorizationStatus,
  currentFilm: FilmDetailed | null
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  filmsToDisplay: FILMS_PER_PAGE,
  isFilmsLoading: false,
  isFilmDetailsLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: null
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
    .addCase(setIsFilmsLoading, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setIsFilmDetailsLoading, (state, action) => {
      state.isFilmDetailsLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentFilmData, (state, action) => {
      state.currentFilm = action.payload;
    });
});
