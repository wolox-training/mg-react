/* eslint-disable react/jsx-no-bind */
<<<<<<< HEAD
import React, { Fragment } from 'react';
=======
import React from 'react';
>>>>>>> dealing with the private route component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';

import AuthInfo from './components/AuthInfo';

function LoginRouter() {
  const loggedin = false;
  return (
    <Router>
      <Fragment>
        <AuthInfo />
        <Switch>
          <Route path="/" component={() => (loggedin ? <Game /> : <Login />)} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default LoginRouter;
