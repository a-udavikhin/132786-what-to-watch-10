import {useState} from 'react';
import {Film} from '../../types/film';
import {Review} from '../../types/review';
import {REVIEWS_PER_COL} from '../../const';

type TabsProps = {
  film: Film,
  filmReviews: Review[]
}

type Tab = {
  tabName: string,
  markup: JSX.Element
}

function Tabs({film, filmReviews}: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const reviewsCols = Math.ceil(filmReviews.length / (REVIEWS_PER_COL || 1));
  const reviewsMarkup = filmReviews.map((review , index) => (
    <div key={review.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.date.toISOString()}>{review.date.toLocaleString('en', {month: 'long', day: 'numeric', year:'numeric'})}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  ));

  const colsMarkup: JSX.Element[] = [];

  for (let i = 0; i < reviewsCols; i++) {
    colsMarkup.push(
      <div key={`col-${i}`} className="film-card__reviews-col">
        {reviewsMarkup.slice((i * REVIEWS_PER_COL), (i * REVIEWS_PER_COL) + REVIEWS_PER_COL)}
      </div>
    );
  }

  const tabsData: Tab[] = [
    {
      tabName: 'overview',
      markup:(
        <>
          <div className="film-rating">
            <div className="film-rating__score">8,9</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">240 ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&quot;s friend and protege.</p>

            <p>Gustave prides himself on providing first-class service to the hotel&quot;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&quot;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

            <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

            <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
          </div>
        </>)
    },
    {
      tabName: 'details',
      markup:(
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">Wes Anderson</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
        Bill Murray, <br />
        Edward Norton, <br />
        Jude Law, <br />
        Willem Dafoe, <br />
        Saoirse Ronan, <br />
        Tony Revoloru, <br />
        Tilda Swinton, <br />
        Tom Wilkinson, <br />
        Owen Wilkinson, <br />
        Adrien Brody, <br />
        Ralph Fiennes, <br />
        Jeff Goldblum
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">1h 39m</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">Comedy</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">2014</span>
            </p>
          </div>
        </div>)},
    {
      tabName: 'reviews',
      markup:(
        <div className="film-card__reviews film-card__row">
          {colsMarkup}
        </div>
      )
    },
  ];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsData.map((tab) => (
            <li key={tab.tabName} className={`film-nav__item ${tab.tabName === activeTab ? 'film-nav__item--active' : ''}`}>
              <a onClick={() => setActiveTab(tab.tabName)} className="film-nav__link">{`${tab.tabName[0].toUpperCase()}${tab.tabName.slice(1)}`}</a>
            </li>
          ))}
        </ul>
      </nav>
      {tabsData.find((tab) => tab.tabName === activeTab)?.markup}
    </div>
  );
}

export default Tabs;
