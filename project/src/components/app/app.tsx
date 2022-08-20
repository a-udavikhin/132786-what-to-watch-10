import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {PromoFilm} from '../../types/film';
import {useAppSelector} from '../../hooks/redux';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppProps = {
  promoFilm: PromoFilm,
}

function App({promoFilm}: AppProps): JSX.Element {
  const {authorizationStatus,isDataLoading, films: filmsData} = useAppSelector((state) => state);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen promoFilm={promoFilm} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus} >
              <MyListScreen filmsData={filmsData} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen filmsData={filmsData} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus} >
              <AddReviewScreen filmsData={filmsData} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen filmsData={filmsData} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
