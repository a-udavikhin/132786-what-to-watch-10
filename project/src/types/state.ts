import {AuthorizationStatus} from '../const';
import {store} from '../store';
import {Film, FilmDetailed} from '../types/film';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
}

export type FilmsData = {
  films: Film[],
  promoFilm: Film | null,
  currentFilm: FilmDetailed | null,
  isFilmsLoading: boolean,
  isPromoFilmLoading: boolean,
  isFilmDetailsLoading: boolean
}

export type FilmsProcess = {
  genre: string,
  error: string | null,
  filmsToDisplay: number
}
