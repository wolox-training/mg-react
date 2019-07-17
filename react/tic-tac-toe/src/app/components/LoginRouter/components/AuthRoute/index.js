import React from 'react';
import { bool, func, node } from 'prop-types';
import { Route } from 'react-router-dom';

import Login from '../../../../screens/Login';

function AuthRoute({ islogged, onSubmit, component: Component }) {
  return islogged ? <Route path="/" component={Component} /> : <Login onSubmit={onSubmit} />;
}

AuthRoute.propTypes = {
  component: node,
  islogged: bool,
  onSubmit: func
};

export default AuthRoute;
