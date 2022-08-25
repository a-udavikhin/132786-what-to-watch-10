import {NameSpace} from '../../const';
import {Film, FilmDetailed} from '../../types/film';
import {State} from '../../types/state';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;

export const getPromoFilm = (state: State): (Film | null) => state[NameSpace.Data].promoFilm;

export const getCurrentFilm = (state: State): (FilmDetailed | null) => state[NameSpace.Data].currentFilm;

export const getIsFilmsLoading = (state: State): boolean => state[NameSpace.Data].isFilmsLoading;

export const getIsPromoFilmLoading = (state: State): boolean => state[NameSpace.Data].isPromoFilmLoading;

export const getIsFilmDetailsLoading = (state: State): boolean => state[NameSpace.Data].isFilmDetailsLoading;

