import {AppRoute, AuthorizationStatus} from '../../../../../const';
import {Link, useNavigate} from 'react-router-dom';
import {Film} from '../../../../../types/film';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/redux';
import {getAuthorizationStatus} from '../../../../../store/user-process/selectors';
import {getFavoriteFilms} from '../../../../../store/films-data/selectors';
import {changeIsFavoriteStatusAction} from '../../../../../store/api-actions';
import {useState} from 'react';

type FilmCardButtonsProps = {
  film: Film,
  isShowAddReviewButton?: boolean
}


function FilmCardButtons({film, isShowAddReviewButton}: FilmCardButtonsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites = useAppSelector(getFavoriteFilms);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState(favorites.some((favorite) => favorite.id === film.id));


  const handleIsFavoriteToggle = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeIsFavoriteStatusAction({filmId: film.id, currentStatus: currentStatus}));
      setCurrentStatus(!currentStatus);
    }

    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <div className="film-card__buttons">
      <Link to={AppRoute.Player.replace(':id', String(film.id))} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button" onClick={handleIsFavoriteToggle}>
        {currentStatus
          ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg> }
        <span>My list</span>
        <span className="film-card__count">{favorites.length}</span>
      </button>
      {authorizationStatus === AuthorizationStatus.Auth && isShowAddReviewButton && <Link to={AppRoute.AddReview.replace(':id', String(film.id))} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
