import {useRef, useEffect, useState} from 'react';
import { Film } from '../../types/film';

type VideoPlayerProps = {
  noSound: boolean,
  film: Film
}

function VideoPlayer({noSound, film}: VideoPlayerProps): JSX.Element {
  //const [/*isLoading*/, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);


  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    //videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    //videoRef.current.addEventListener('mouseenter', () => setIsPlaying(!isPlaying));
    if (isPlaying) {
      videoRef.current.play();
    }

    videoRef.current.pause();

  });

  return (
    <div onMouseEnter = {() => setIsPlaying(!isPlaying)} className="small-film-card__image">
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
