import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/redux';
import {getAuthorizationStatus, getIsAuthCheckProcessing} from '../../store/user-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type PrivateRouteProps = {
  children: JSX.Element;
}


function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthCheckProcessing = useAppSelector(getIsAuthCheckProcessing);

  if (isAuthCheckProcessing) {
    return <LoadingScreen />;
  }

  return (authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
