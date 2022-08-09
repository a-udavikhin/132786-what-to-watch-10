import {useRef, useEffect, useState} from 'react';
import { Film } from '../../types/film';
import {AUTO_PLAY_DELAY_MS} from '../../const';

type VideoPlayerProps = {
  noSound: boolean,
  film: Film
}

function VideoPlayer({noSound, film}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerHoverTimer, setPlayerHoverTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  function playerMouseEnterHandler(): void {
    if (!isPlaying && !isLoading) {
      setPlayerHoverTimer(setTimeout(() => setIsPlaying(true), AUTO_PLAY_DELAY_MS));

    }
  }

  function playerMouseLeaveHandler(): void {
    setIsPlaying(false);
    clearTimeout(Number(playerHoverTimer));
  }

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
    }

    if (!isPlaying) {
      videoRef.current.load();
    }

  }, [isPlaying]);

  return (
    <div onMouseEnter={playerMouseEnterHandler} onMouseLeave={playerMouseLeaveHandler} className="small-film-card__image">
      <video
        src={film.src}
        ref={videoRef}
        width="280"
        height="175"
        muted={noSound}
        poster={film.previewSrc}
      >
      </video>
    </div>
  );
}

export default VideoPlayer;
