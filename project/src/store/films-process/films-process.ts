import {NameSpace, FILMS_PER_PAGE, TIMEOUT_SHOW_ERROR} from '../../const';
import {fetchFilmsAction} from '../api-actions';
import {FilmsProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';

const initialState: FilmsProcess = {
  genre: 'All genres',
  error: null,
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
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      setTimeout(
        () => {state.error = null;},
        TIMEOUT_SHOW_ERROR,
      );
    },

  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      });
  }
});
