import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type FilmListProps = {
    limit?: number
}

function FilmList({limit}: FilmListProps): JSX.Element {
  const [/*activeFilm*/, setActiveFilm] = useState<Film | null>(null);
  const {id} = useParams();

  const {genre, films} = useAppSelector((state) => state);

  let filteredFilms = genre === 'All genres' ? films : films.filter((film) => film.genre === genre);

  if (id) {
    filteredFilms = filteredFilms.filter((film) => film.id !== Number(id));
  }

  if (limit) {
    filteredFilms = filteredFilms.slice(0, limit);
  }

  return (
    <>
      {filteredFilms.map((film) => (
        <FilmCard
          onMouseOverHandler={() => setActiveFilm(film)}
          key={film.id}
          film={film}
        />))}
    </>
  );
}

export default FilmList;
