import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

interface Props extends RouteProps {
  children: React.ReactNode;
  restricted?: boolean;
  redirectTo?: string;
}

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}: Props) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
