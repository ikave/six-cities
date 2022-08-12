import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { AppRoute, AuthStatus } from '../enums';

type PropsType = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PropsType) => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};
