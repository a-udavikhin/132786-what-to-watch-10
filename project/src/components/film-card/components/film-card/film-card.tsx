import Header from '../../../header/header';
import {Film} from '../../../../types/film';
import FilmCardDescription from './../components/film-card-description/film-card-description';

type FilmCardProps = {
  film: Film
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className='film-card__head' />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>

          <FilmCardDescription film={film} />
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
