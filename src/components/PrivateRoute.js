import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const willRedirect = !isLoggedIn && !isRefreshing;
  return willRedirect ? <Navigate to="redirectTo" /> : Component;
};
