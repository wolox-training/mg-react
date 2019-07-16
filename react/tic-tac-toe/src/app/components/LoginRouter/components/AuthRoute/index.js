import React from 'react';
import { bool, func, node } from 'prop-types';
import { Route } from 'react-router-dom';

import Login from '../../../../screens/Login';

function AuthRoute({ islogged, onSubmit, component: Component }) {
  return islogged ? <Route path="/" component={Component} /> : <Login onSubmit={onSubmit} />;
}

AuthRoute.propTypes = {
  islogged: bool.isRequired,
  component: node,
  onSubmit: func
};

export default AuthRoute;
