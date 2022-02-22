import React from 'react';
import { useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  const location = useLocation();

  return (
    <Route {...rest}>
      {user ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
}
