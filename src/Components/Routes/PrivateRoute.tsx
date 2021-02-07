import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

interface Props extends RouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...props
}: Props) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
