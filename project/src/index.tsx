import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFilmsAction} from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchFilmsAction());

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
    <Provider store={store}>
      <ErrorMessage />
      <App
        promoFilm ={{
          title: Settings.PROMO_FILM.TITLE,
          genre: Settings.PROMO_FILM.GENRE,
          year: Settings.PROMO_FILM.YEAR
        }}
      />
    </Provider>
  </React.StrictMode>,
);
