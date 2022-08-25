import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import ShowMore from '../../components/show-more/show-more';
import {resetFilmList} from '../../store/action';
import {useEffect} from 'react';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/components/film-card/film-card';
import {fetchPromoFilmAction} from './../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen(): JSX.Element {
  const {films: filmsData, genre, filmsToDisplay, promoFilm, isFilmsLoading} = useAppSelector((state) => state);
  const filteredFilms = genre === 'All genres' ? filmsData : filmsData.filter((film) => film.genre === genre);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchPromoFilmAction());
    dispatch(resetFilmList());
  }, []);

  if (!promoFilm || isFilmsLoading) {
    return <LoadingScreen />;
  }

  return (
    <>

      <FilmCard film={promoFilm ?? filmsData[0]} />

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
