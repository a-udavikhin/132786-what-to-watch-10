import {Film} from '../../../../../types/film';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

type FilmCardDescriptionProps = {
  film: Film,
  isShowAddReviewButton?: boolean,
}

function FilmCardDescription({film, isShowAddReviewButton}: FilmCardDescriptionProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <FilmCardButtons film={film} isShowAddReviewButton />
    </div>
  );
}

export default FilmCardDescription;
