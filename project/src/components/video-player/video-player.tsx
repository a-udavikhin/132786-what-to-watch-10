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
    videoRef.current.addEventListener('mouseover', () => setIsPlaying(!isPlaying));
    console.log(videoRef.current);

    if (isPlaying) {
      videoRef.current.play();
    }

  }, [isPlaying]);

  return (
    <video
      key={`${film.src} - ${film.id}`}
      src={film.src}
      ref={videoRef}
      width="280"
      height="175"
      muted={noSound}
      onClick = {() => setIsPlaying(!isPlaying)}
      poster={film.previewSrc}
    >
    </video>
  );
}

export default VideoPlayer;
