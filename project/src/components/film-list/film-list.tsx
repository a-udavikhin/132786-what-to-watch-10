import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import {SIMILAR_FILMS_LIMIT} from '../../const';

type FilmListProps = {
  filmsData: Film[]
}

function FilmList({filmsData}: FilmListProps): JSX.Element {
  const [/*activeFilm*/, setActiveFilm] = useState<Film | null>(null);
  const {id} = useParams();

  const {filmsToDisplay} = useAppSelector((state) => state);

  let filmsOutput = filmsData;

  if (id) {
    filmsOutput = filmsOutput.filter((film) => film.id !== Number(id));
    filmsOutput = filmsOutput.slice(0, SIMILAR_FILMS_LIMIT);
  }

  if (!id) {
    filmsOutput = filmsOutput.slice(0, filmsToDisplay);
  }

  return (
    <div className="catalog__films-list">
      {filmsOutput.map((film) => (
        <FilmCard
          onMouseOverHandler={() => setActiveFilm(film)}
          key={film.id}
          film={film}
        />))}
    </div>
  );
}

export default FilmList;
