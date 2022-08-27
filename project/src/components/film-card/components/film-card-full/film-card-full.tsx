import Header from '../../../header/header';
import {FilmDetailed} from '../../../../types/film';
import {useLocation} from 'react-router-dom';
import FilmCardDescription from './../components/film-card-description/film-card-description';
import Tabs from '../../../tabs/tabs';
import { memo } from 'react';

type FilmCardFullProps = {
  filmDetailed: FilmDetailed
}

type LocationState = {
  activeTab: string
}

function FilmCardFull({filmDetailed}: FilmCardFullProps): JSX.Element {
  const locationState = useLocation().state as LocationState;

  return (
    <section className="film-card film-card--full" style={{'background': filmDetailed.info.backgroundColor}}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={filmDetailed.info.backgroundImage} alt={filmDetailed.info.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className='film-card__head' />

        <div className="film-card__wrap">
          <FilmCardDescription film={filmDetailed.info} isShowAddReviewButton/>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={filmDetailed.info.posterImage} alt={`${filmDetailed.info.name} poster`} width="218" height="327" />
          </div>

          <Tabs active={locationState?.activeTab} currentFilm={filmDetailed.info} filmReviews={filmDetailed.reviews}/>
        </div>
      </div>
    </section>
  );
}

export default memo(FilmCardFull);
