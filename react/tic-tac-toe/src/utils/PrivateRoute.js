/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = false;
  return (
    <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />
  );
}

export default PrivateRoute;
