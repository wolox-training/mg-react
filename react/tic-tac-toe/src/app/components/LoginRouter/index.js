/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Fragment } from 'react';
=======
import React from 'react';
>>>>>>> dealing with the private route component
=======
import React, { Fragment } from 'react';
>>>>>>> Authenticate components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';
import singIn from '../../../services/AuthServices';

import AuthInfo from './components/AuthInfo';

function LoginRouter() {
  const loggedin = false;
  const handleSubmit = async values => {
    const islogged = await singIn(values);
  };

  return (
    <Router>
      <Fragment>
        <AuthInfo />
        <Switch>
          <Route path="/" component={() => (loggedin ? <Game /> : <Login onSubmit={handleSubmit} />)} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default LoginRouter;
