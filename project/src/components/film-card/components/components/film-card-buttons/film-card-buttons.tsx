import {AppRoute, AuthorizationStatus} from '../../../../../const';
import {Link} from 'react-router-dom';
import {Film} from '../../../../../types/film';
import {useAppSelector} from '../../../../../hooks/redux';

type FilmCardButtonsProps = {
  film: Film,
  isShowAddReviewButton?: boolean
}


function FilmCardButtons({film, isShowAddReviewButton}: FilmCardButtonsProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <div className="film-card__buttons">
      <Link to={AppRoute.Player.replace(':id', String(film.id))} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </Link>
      {authorizationStatus === AuthorizationStatus.Auth && isShowAddReviewButton && <Link to={AppRoute.AddReview.replace(':id', String(film.id))} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
