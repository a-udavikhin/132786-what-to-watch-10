import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  PROMO_FILM : {
    TITLE: 'The Grand Budapest Hotel',
    GENRE: 'Drama',
    YEAR: '2014'
  }
};

root.render(
  <React.StrictMode>
    <App
      promoFilm ={{
        title: Settings.PROMO_FILM.TITLE,
        genre: Settings.PROMO_FILM.GENRE,
        year: Settings.PROMO_FILM.YEAR
      }}
      filmsData = {films}
    />
  </React.StrictMode>,
);
