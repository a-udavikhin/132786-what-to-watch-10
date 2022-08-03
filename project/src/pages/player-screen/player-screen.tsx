import {Film} from '../../types/film';
import {useParams, Link} from 'react-router-dom';
import {AppRoute, MOCK_VIDEO_SRC} from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type PlayerScreenProps = {
  filmsData: Film[]
}

function PlayerScreen({filmsData}: PlayerScreenProps): JSX.Element {
  const {id} = useParams();
  const playerFilm = filmsData.find((film) => film.id === Number(id));

  if (!playerFilm) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      <video src={MOCK_VIDEO_SRC} className="player__video" poster={playerFilm.previewSrc}></video>

      <Link to={AppRoute.Root} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{playerFilm.title}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
