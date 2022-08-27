import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks/redux';
import {getFilms} from '../../store/films-data/selectors';

function MyListScreen(): JSX.Element {
  const filmsData = useAppSelector(getFilms);

  return (
    <div className="user-page">

      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList filmsData={filmsData}/>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
