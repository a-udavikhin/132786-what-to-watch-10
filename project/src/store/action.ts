import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/film';

export const changeGenre = createAction<Genre>('changeGenre');
export const showMoreFilms = createAction('showMore');
export const resetFilmList = createAction('resetFilmList');
