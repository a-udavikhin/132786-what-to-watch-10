import {createAction} from '@reduxjs/toolkit';
import {Genre, Film} from '../types/film';

export const changeGenre = createAction<Genre>('films/changeGenre');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmList = createAction('films/resetFilmList');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
