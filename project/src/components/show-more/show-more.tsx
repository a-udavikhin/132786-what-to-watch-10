import {useAppDispatch} from '../../hooks/redux';
import {showMoreFilms} from '../../store/action';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={() => dispatch(showMoreFilms())} type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
