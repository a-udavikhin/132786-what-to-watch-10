import {createSelector} from 'reselect';
import {getFilms} from './films-data/selectors';
import {getGenre} from './films-process/selectors';
import {State} from '../types/state';

export const filterFilms = createSelector(
  [getFilms, getGenre, (state: State, filmId?: number) => filmId],
  (films, genre, filmId?) =>
  {
    let filteredFilms = (genre === 'All genres')
      ?
      films
      :
      films.filter((film) => film.genre === genre);

    if (filmId) {
      filteredFilms = filteredFilms.filter((film) => film.id !== filmId);
    }

    return filteredFilms;
  }
);
