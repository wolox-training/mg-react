import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Game from '~screens/Game';

import actionsCreator from '~redux/login/actions';

import PrivateRoute from '~utils/PrivateRoute';

import { loadState } from '~services/localStorage';

import AuthRoute from './components/AuthRoute';
import AuthInfo from './components/AuthInfo';

class AppRouter extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values);
  };

  handleClick = () => {
    const { logout } = this.props;
    logout();
  };

  componentDidMount() {
    const data = loadState();
    if (data) {
      this.props.setauth(data);
    }
  }

  render() {
    const { islogged, isAuth } = this.props;
    return (
      <Router>
        <Fragment>
          <AuthInfo isAuth={isAuth} islogged={islogged} onClick={this.handleClick} />
          <PrivateRoute path="/podium" component={Podium} isAuth={isAuth} islogged={islogged} />
          <PrivateRoute path="/game" component={Game} isAuth={isAuth} islogged={islogged} />
          <Route path="/login" component={AuthRoute} />
          <Route exact path="/" component={AuthRoute} />
        </Fragment>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  isAuth: bool,
  islogged: bool,
  login: func,
  logout: func,
  setauth: func
};

const mapStateToProps = store => ({
  islogged: store.login.islogged,
  isAuth: store.login.isAuth
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values)),
  logout: () => dispatch(actionsCreator.logout()),
  setauth: token => dispatch(actionsCreator.setauth(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
