import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {changeGenre, resetFilmList, showMoreFilms} from './action';
import {Genre, Film} from '../types/film';
import {FILMS_PER_PAGE} from '../const';

type State = {
  genre: Genre,
  films: Film[],
  filmsToDisplay: number
}

const initialState: State = {
  genre: 'All genres',
  films: films,
  filmsToDisplay: FILMS_PER_PAGE
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
    });
});
