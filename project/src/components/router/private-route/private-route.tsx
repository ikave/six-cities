import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../enums';

type PropsType = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

const PrivateRoute = ({ authStatus, children }: PropsType) =>
  authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />;

export default PrivateRoute;
