import {Film} from '../../types/film';
import {useParams, Link, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Tabs from '../../components/tabs/tabs';
import FilmList from '../../components/film-list/film-list';
import {useAppSelector, useAppDispatch} from '../../hooks/redux';
import {fetchFilmDetailsAction} from '../../store/api-actions';
import UserBlock from '../../components/user-block/user-block';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import Footer from '../../components/footer/footer';

type FilmScreenProps = {
  filmsData: Film[]
}

type LocationState = {
  activeTab: string
}


function FilmScreen({filmsData}: FilmScreenProps): JSX.Element {
  const {id} = useParams();
  const locationState = useLocation().state as LocationState;

  const {currentFilm, authorizationStatus, isFilmDetailsLoading} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmDetailsAction(Number(id)));

  }, [id]);

  if (isFilmDetailsLoading) {
    return <LoadingScreen />;
  }

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  return (
    <>

      <section className="film-card film-card--full" style={{'background': currentFilm.info.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.info.backgroundImage} alt={currentFilm.info.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoute.Root} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.info.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.info.genre}</span>
                <span className="film-card__year">{currentFilm.info.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={AppRoute.Player.replace(':id', String(currentFilm.info.id))} className="btn btn--play film-card__button" type="button">
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
                {authorizationStatus === AuthorizationStatus.Auth && <Link to={AppRoute.AddReview.replace(':id', String(currentFilm.info.id))} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.info.posterImage} alt={`${currentFilm.info.name} poster`} width="218" height="327" />
            </div>

            <Tabs active={locationState?.activeTab} currentFilm={currentFilm.info} filmReviews={currentFilm.reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList filmsData={filmsData}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
