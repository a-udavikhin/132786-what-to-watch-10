import {createSelector} from 'reselect';
import {getFilms} from './films-data/selectors';
import {getGenre} from './films-process/selectors';

export const getFilteredFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) =>
    (genre === 'All genres')
      ?
      films
      :
      films.filter((film) => film.genre === genre)
);
