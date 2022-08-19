import {Film} from '../../types/film';
import {useParams, Link} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../const';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import UserBlock from '../../components/user-block/user-block';

type AddReviewScreenProps = {
  filmsData: Film[]
}

function AddReviewScreen({filmsData}: AddReviewScreenProps): JSX.Element {
  const {id} = useParams();
  const reviewedFilm = filmsData.find((film) => film.id === Number(id));

  if (!reviewedFilm) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Root} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film.replace(':id', String(reviewedFilm.id))} className="breadcrumbs__link">{reviewedFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
