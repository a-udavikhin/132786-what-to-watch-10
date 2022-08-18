import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {changeGenre, loadFilms, resetFilmList, showMoreFilms, setDataLoadingStatus} from './action';
import {Genre, Film} from '../types/film';
import {FILMS_PER_PAGE} from '../const';

type State = {
  genre: Genre,
  films: Film[],
  filmsToDisplay: number,
  isDataLoading: boolean,
}

const initialState: State = {
  genre: 'All genres',
  films: films,
  filmsToDisplay: FILMS_PER_PAGE,
  isDataLoading: true
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
      state.films = films;
      state.filmsToDisplay = FILMS_PER_PAGE;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
