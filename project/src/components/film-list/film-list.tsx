import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Genre} from '../../types/film';

type FilmListProps = {
    filmsData: Film[],
    limit?: number,
    genre?: Genre
}

function FilmList({filmsData, limit, genre}: FilmListProps): JSX.Element {
  const [/*activeFilm*/, setActiveFilm] = useState<Film | null>(null);
  const {id} = useParams();
  let filmsList = filmsData;
  if (genre) {
    filmsList = filmsList.filter((film) => (film.genre === genre && film.id !== Number(id)));
  }

  if (limit) {
    filmsList = filmsList.slice(0, limit);
  }

  return (
    <>
      {filmsList.map((film) => (
        <FilmCard
          onMouseOverHandler={() => setActiveFilm(film)}
          key={film.id}
          film={film}
        />))}
    </>
  );
}

export default FilmList;
