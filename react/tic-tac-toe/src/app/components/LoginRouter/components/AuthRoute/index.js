import React from 'react';
import { bool, func, node } from 'prop-types';
import { Route } from 'react-router-dom';

import Login from '../../../../screens/Login';

function AuthRoute({ isAuth, onSubmit, component: Component }) {
  return isAuth ? <Route path="/" component={Component} /> : <Login onSubmit={onSubmit} />;
}

AuthRoute.propTypes = {
  component: node,
  isAuth: bool,
  onSubmit: func
};

export default AuthRoute;
