import {Film} from '../../types/film';
import {useParams, Link} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute} from '../../const';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';

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
    <section className="film-card film-card--full" style={{'background': reviewedFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={reviewedFilm.backgroundImage} alt={reviewedFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
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
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={reviewedFilm.posterImage} alt={`${reviewedFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
