import {AuthorizationStatus} from '../const';
import {store} from '../store';
import {Film, FilmDetailed} from '../types/film';
import {UserData} from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  error: string | null,
  userData: UserData | null,
  authorizationStatus: AuthorizationStatus,
  isAuthCheckProcessing: boolean
}

export type FilmsData = {
  error: string | null,
  films: Film[],
  favoriteFilms: Film[],
  promoFilm: Film | null,
  currentFilm: FilmDetailed | null,
  isFilmsLoading: boolean,
  isPromoFilmLoading: boolean,
  isFilmDetailsLoading: boolean
}

export type FilmsProcess = {
  genre: string,
  filmsToDisplay: number
}
