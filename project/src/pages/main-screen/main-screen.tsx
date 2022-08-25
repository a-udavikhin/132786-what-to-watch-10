import {PromoFilm} from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import GenreList from '../../components/genre-list/genre-list';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import ShowMore from '../../components/show-more/show-more';
import {resetFilmList} from '../../store/action';
import {useEffect} from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type MainScreenProps = {
  promoFilm: PromoFilm,
}

function MainScreen({promoFilm}: MainScreenProps): JSX.Element {
  const {films: filmsData, genre, filmsToDisplay} = useAppSelector((state) => state);
  const filteredFilms = genre === 'All genres' ? filmsData : filmsData.filter((film) => film.genre === genre);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFilmList());
  }, []);

  return (
    <>

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className='film-card__head' />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={AppRoute.Player.replace(':id', '0')} className="btn btn--play film-card__button" type="button">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList filmsData={filmsData} />

          <FilmList filmsData={filteredFilms}/>

          {filteredFilms.length > filmsToDisplay && <ShowMore />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
