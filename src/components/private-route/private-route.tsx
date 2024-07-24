import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  page: string;
}

function PrivateRoute({authorizationStatus, children, page}: PrivateRouteProps): JSX.Element {

  switch (page) {
    case AppRoute.Login:
      return authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Favorites} /> : children;
    default:
      return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
  }
}

export default PrivateRoute;
