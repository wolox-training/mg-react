/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';

function LoginRouter() {
  const loggedin = true;
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => (loggedin ? <Game /> : <Login />)} />
      </Switch>
    </Router>
  );
}

export default LoginRouter;
