import {useParams} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useAppSelector} from '../../hooks/redux';
import {getFilms} from '../../store/films-data/selectors';
import FilmPlayer from '../../components/video-player/film-player/film-player';

function PlayerScreen(): JSX.Element {
  const {id} = useParams();
  const filmsData = useAppSelector(getFilms);
  const playerFilm = filmsData.find((film) => film.id === Number(id));

  if (!playerFilm) {
    return <NotFoundScreen />;
  }

  return (
    <FilmPlayer film={playerFilm} />
  );
}

export default PlayerScreen;
