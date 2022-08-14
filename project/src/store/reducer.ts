import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {changeGenre} from './action';
import {Genre, Film} from '../types/film';

type State = {
  genre: Genre,
  films: Film[]
}

const initialState: State = {
  genre: 'All genres',
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});
