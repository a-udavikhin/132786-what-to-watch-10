import {fetchFilmDetailsAction, fetchFilmsAction, fetchPromoFilmAction, sendReviewAction, fetchFavoriteFilmsAction, changeIsFavoriteStatusAction, logoutAction} from '../api-actions';
import {NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';

const initialState: FilmsData = {
  error: null,
  films: [],
  favoriteFilms: [],
  promoFilm: null,
  currentFilm: null,
  isFilmsLoading: false,
  isPromoFilmLoading: false,
  isFilmDetailsLoading: false
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearFavoriteFilms: (state) => {
      state.favoriteFilms = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      .addCase(fetchFilmDetailsAction.pending, (state) => {
        state.isFilmDetailsLoading = true;
      })
      .addCase(fetchFilmDetailsAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isFilmDetailsLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(changeIsFavoriteStatusAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteFilms = state.favoriteFilms.find((film) => film.id === action.payload.id) ? state.favoriteFilms : [...state.favoriteFilms,action.payload];
        }
        if (!action.payload.isFavorite) {
          state.favoriteFilms = state.favoriteFilms.filter((film) => film.id !== action.payload.id);
        }
      })
      .addCase(changeIsFavoriteStatusAction.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      .addCase(sendReviewAction.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.favoriteFilms = [];
      });
  }
});
