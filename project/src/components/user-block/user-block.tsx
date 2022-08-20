import {useAppSelector} from '../../hooks/redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import AuthUserBlock from './components/auth-user-block/auth-user-block';

function UserBlock(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    (authorizationStatus === AuthorizationStatus.Auth)
      ?
      <AuthUserBlock />
      :
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign In</Link>
        </li>
      </ul>
  );
}

export default UserBlock;
