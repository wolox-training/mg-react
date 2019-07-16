<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { shape, func, bol } from 'prop-types';

import Game from '../../screens/Game';
import actionsCreator from '../../../redux/login/actions';
=======
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../../screens/Login';
import singIn from '../../../services/AuthServices';
>>>>>>> code refactoring, Coding submit function in a superior component
=======
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { shape, func } from 'prop-types';

import Game from '../../screens/Game';
import actionsCreator from '../../../redux/login/actions';
>>>>>>> adding react-redux interaction

import AuthInfo from './components/AuthInfo';
import AuthRoute from './components/AuthRoute';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adding react-redux interaction
class LoginRouter extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values);
<<<<<<< HEAD
  };

  handleClick = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { islogged, isAuth } = this.props;
    return (
      <Router>
        <Fragment>
          {islogged && <AuthInfo isAuth={isAuth} onClick={this.handleClick} />}
          <Switch>
            <AuthRoute component={Game} onSubmit={this.handleSubmit} isAuth={isAuth} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
=======
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
>>>>>>> code refactoring, Coding submit function in a superior component
=======
  };

  handleClick = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { islogged } = this.props;
    return (
      <Router>
        <Fragment>
          {islogged && <AuthInfo islogged={islogged} onClick={this.handleClick} />}
          <Switch>
            <AuthRoute component={Game} onSubmit={this.handleSubmit} islogged={islogged} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
>>>>>>> adding react-redux interaction
}

LoginRouter.propTypes = {
  login: func.isRequired,
  logout: func.isRequired,
<<<<<<< HEAD
  isAuth: bol,
=======
>>>>>>> adding react-redux interaction
  islogged: shape({})
};

const mapStateToProps = store => ({
<<<<<<< HEAD
  islogged: store.login.islogged,
  isAuth: store.login.isAuth
=======
  islogged: store.login.islogged
>>>>>>> adding react-redux interaction
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values)),
  logout: () => dispatch(actionsCreator.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRouter);
