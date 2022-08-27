import {NameSpace, FILMS_PER_PAGE} from '../../const';
import {FilmsProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';

const initialState: FilmsProcess = {
  genre: 'All genres',
  filmsToDisplay: FILMS_PER_PAGE
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
      state.filmsToDisplay = FILMS_PER_PAGE;
    },
    showMoreFilms: (state) => {
      state.filmsToDisplay += FILMS_PER_PAGE;
    },
    resetFilmList: (state) => {
      state.genre = 'All genres';
      state.filmsToDisplay = FILMS_PER_PAGE;
    },
  }
});
