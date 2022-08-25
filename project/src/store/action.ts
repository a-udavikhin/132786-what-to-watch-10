import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {Film, FilmDetailed} from '../types/film';

export const changeGenre = createAction<string>('films/changeGenre');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmList = createAction('films/resetFilmList');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const setIsFilmsLoading = createAction<boolean>('data/setIsFilmsLoading');

export const setIsFilmDetailsLoading = createAction<boolean>('data/setIsFilmDetailsLoading');

export const setError = createAction<string | null>('app/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setCurrentFilmData = createAction<FilmDetailed>('data/setCurrentFilmData');
