import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool } from 'prop-types';

function PrivateRoute({ isAuth, islogged, ...rest }) {
  return islogged && isAuth ? <Route {...rest} /> : <Redirect to="/login" />;
}

PrivateRoute.propTypes = {
  isAuth: bool,
  islogged: bool
};

export default PrivateRoute;
