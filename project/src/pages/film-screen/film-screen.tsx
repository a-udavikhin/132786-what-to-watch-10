import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FilmList from '../../components/film-list/film-list';
import {useAppSelector, useAppDispatch} from '../../hooks/redux';
import {fetchFilmDetailsAction} from '../../store/api-actions';
import {useEffect} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import Footer from '../../components/footer/footer';
import FilmCardFull from '../../components/film-card/components/film-card-full/film-card-full';
import {getCurrentFilm, getIsFilmDetailsLoading} from '../../store/films-data/selectors';

type FilmScreenProps = {
  filmsData: Film[]
}


function FilmScreen({filmsData}: FilmScreenProps): JSX.Element {
  const {id} = useParams();

  const currentFilm = useAppSelector(getCurrentFilm);
  const isFilmDetailsLoading = useAppSelector(getIsFilmDetailsLoading);

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

      <FilmCardFull filmDetailed={currentFilm}/>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList filmsData={currentFilm.similar}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
