import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool, string } from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from '~constants';

import Game from '~screens/Game';

import Podium from '~screens/Podium';

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
      this.props.setAuth(data);
    }
  }

  render() {
    const { onError, isAuth } = this.props;
    return (
      <Router>
        <Fragment>
          <AuthInfo isAuth={isAuth} onError={onError} onClick={this.handleClick} />
          <Switch>
            <PrivateRoute path={routes.PODIUM} component={Podium} isAuth={isAuth} />
            <PrivateRoute path={routes.GAME} component={Game} isAuth={isAuth} />
            <Route path="/" component={AuthRoute} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  login: func.isRequired,
  logout: func.isRequired,
  setAuth: func.isRequired,
  isAuth: bool,
  onError: string
};

const mapStateToProps = store => ({
  onError: store.auth.isloginError,
  isAuth: store.auth.islogin,
  onLoading: store.auth.isloginLoading
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values)),
  logout: () => dispatch(actionsCreator.logout()),
  setAuth: token => dispatch(actionsCreator.setToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
