import {fetchFilmDetailsAction, fetchFilmsAction, fetchPromoFilmAction, sendReviewAction} from '../api-actions';
import {NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';

const initialState: FilmsData = {
  error: null,
  films: [],
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
      .addCase(sendReviewAction.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      });
  }
});
