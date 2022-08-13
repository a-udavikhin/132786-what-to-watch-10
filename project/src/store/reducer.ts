import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {changeGenre} from './action';

const initialState = {
  genre: 'All genres',
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});
