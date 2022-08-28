import {Film} from '../../../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../const';
import PreviewPlayer from '../../../video-player/preview-player/preview-player';

type FilmCardSmallProps = {
    film: Film,
}

function FilmCardSmall({film}: FilmCardSmallProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <PreviewPlayer noSound film={film} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCardSmall;
