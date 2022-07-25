import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
      promoFilmTitle={Settings.PROMO_FILM.TITLE}
      promoFilmGenre={Settings.PROMO_FILM.GENRE}
      promoFilmYear={Settings.PROMO_FILM.YEAR}
    />
  </React.StrictMode>,
);
