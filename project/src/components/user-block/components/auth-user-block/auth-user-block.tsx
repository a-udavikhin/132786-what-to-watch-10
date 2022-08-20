import {AppRoute} from '../../../../const';
import {Link} from 'react-router-dom';
import {store} from '../../../../store';
import {logoutAction} from '../../../../store/api-actions';

function AuthUserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to={AppRoute.Root}
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            store.dispatch(logoutAction());
          }}
        >
            Sign Out
        </Link>
      </li>
    </ul>
  );
}

export default AuthUserBlock;
