import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {changeGenre} from '../../store/action';
import {Film} from '../../types/film';

type GenreListProps = {
    filmsData: Film[]
}

function GenreList({filmsData}: GenreListProps): JSX.Element {
  const genres: Set<string> = new Set(['All genres', ...filmsData.map(((film) => film.genre))]);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {[...genres].map((genre) => (
        <li key={`li-${genre}`} className={`catalog__genres-item ${genre === currentGenre && 'catalog__genres-item--active'}`}>
          <a onClick={() => dispatch(changeGenre(genre))} className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
