import {useRef, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {VIDEO_PROGRESS_UPDATE_MS} from '../../../const';
import {Film} from '../../../types/film';
import {formatPlayerTime, getVideoProgress} from '../../../utils/utils';
import Preloader from '../components/preloader/preloader';

type FilmPlayerProps = {
  film: Film,
}

function FilmPlayer({film}: FilmPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const handlePlayToggle = () => setIsPlaying((prevState) => !prevState);

  const handleFullScreenToggle = () => {
    if (document.fullscreenElement === playerRef.current) {
      document.exitFullscreen();
      return;
    }
    playerRef.current?.requestFullscreen();
  };

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    window.setInterval(() => {
      setCurrentVideoTime(Math.floor(videoRef.current?.currentTime || 0));
    }, VIDEO_PROGRESS_UPDATE_MS);

    videoRef.current.addEventListener('loadedmetadata', () => setVideoDuration(Math.floor(videoRef.current?.duration || 0)));

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    videoRef.current.addEventListener('waiting', () => setIsLoading(true));

    videoRef.current.addEventListener('playing', () => setIsLoading(false));

    if (videoDuration === currentVideoTime) {
      setIsPlaying(false);
      videoRef.current.load();
    }

    if (isPlaying) {
      videoRef.current.play();
    }

    if (!isPlaying) {
      videoRef.current.pause();
    }

  }, [isPlaying, videoRef.current, isLoading, videoDuration]);

  return (
    <div className="player" ref={playerRef}>
      {isLoading && <Preloader />}
      <video
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.previewImage}
        onClick={handlePlayToggle}
      >
      </video>

      <button onClick={() => navigate(-1)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getVideoProgress(currentVideoTime, videoDuration) || 0} max="100"></progress>
            <div className="player__toggler" style={{left: `${getVideoProgress(currentVideoTime, videoDuration) || 0}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatPlayerTime(videoDuration - currentVideoTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayToggle}
          >
            {isPlaying
              ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}

          </button>

          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenToggle}>
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

export default FilmPlayer;
