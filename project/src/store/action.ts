import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/film';

export const changeGenre = createAction<Genre>('changeGenre');
