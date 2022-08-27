import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {filmsProcess} from '../../store/films-process/films-process';
import {getGenre} from '../../store/films-process/selectors';
import {Film} from '../../types/film';
import {memo} from 'react';

type GenreListProps = {
    filmsData: Film[]
}

function GenreList({filmsData}: GenreListProps): JSX.Element {
  const genres: Set<string> = new Set(['All genres', ...filmsData.map(((film) => film.genre))]);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);

  return (
    <ul className="catalog__genres-list">
      {[...genres].map((genre) => (
        <li key={`li-${genre}`} className={`catalog__genres-item ${genre === currentGenre && 'catalog__genres-item--active'}`}>
          <a onClick={() => dispatch(filmsProcess.actions.changeGenre(genre))} className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default memo(GenreList);
