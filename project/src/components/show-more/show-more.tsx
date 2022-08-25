import {useAppDispatch} from '../../hooks/redux';
import {filmsProcess} from '../../store/films-process/films-process';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={() => dispatch(filmsProcess.actions.showMoreFilms())} type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
