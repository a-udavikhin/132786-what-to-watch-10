import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {Film} from '../types/film';

export const changeGenre = createAction<string>('films/changeGenre');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmList = createAction('films/resetFilmList');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setError = createAction<string | null>('app/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
