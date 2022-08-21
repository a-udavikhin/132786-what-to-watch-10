import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms, resetFilmList, showMoreFilms, setError, setAuthorizationStatus, setCurrentFilmData, incDataLoadingRequests, decDataLoadingRequests} from './action';
import {Film, FilmDetailed} from '../types/film';
import {AuthorizationStatus, FILMS_PER_PAGE} from '../const';

type State = {
  genre: string,
  films: Film[],
  filmsToDisplay: number,
  dataLoadingRequests: number,
  error: string | null,
  authorizationStatus: AuthorizationStatus,
  currentFilm: FilmDetailed | null
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  filmsToDisplay: FILMS_PER_PAGE,
  dataLoadingRequests: 0,
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
    .addCase(incDataLoadingRequests, (state) => {
      state.dataLoadingRequests += 1;
    })
    .addCase(decDataLoadingRequests, (state) => {
      state.dataLoadingRequests -= 1;
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
