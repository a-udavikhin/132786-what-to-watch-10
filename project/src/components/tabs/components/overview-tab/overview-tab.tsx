import {Film} from '../../../../types/film';
import {getStarringString, getFilmGrade, getPlural} from '../../../../utils/utils';

type OverviewTabProps = {
  currentFilm: Film
}

function OverviewTab({currentFilm}: OverviewTabProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmGrade(currentFilm.rating)}</span>
          <span className="film-rating__count">{getPlural(currentFilm.scoresCount, 'rating')}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {getStarringString(currentFilm.starring)}</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
