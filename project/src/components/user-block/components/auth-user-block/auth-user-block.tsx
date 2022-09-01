import {AppRoute} from '../../../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';
import {getUserData} from '../../../../store/user-process/selectors';

function AuthUserBlock(): JSX.Element {

  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to={AppRoute.Root}
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
            Sign Out
        </Link>
      </li>
    </ul>
  );
}

export default AuthUserBlock;
