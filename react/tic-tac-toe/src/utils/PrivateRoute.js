import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool } from 'prop-types';

function PrivateRoute({ isAuth, ...rest }) {
  return isAuth ? <Route {...rest} /> : <Redirect to="/" />;
}

PrivateRoute.propTypes = {
  isAuth: bool,
  islogged: bool
};

export default PrivateRoute;
