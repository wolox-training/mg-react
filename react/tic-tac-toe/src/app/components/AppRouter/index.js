import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Game from '../../screens/Game';
import actionsCreator from '../../../redux/login/actions';
import PrivateRoute from '../../../utils/PrivateRoute';

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

  render() {
    const { islogged, isAuth } = this.props;
    return (
      <Router>
        <Fragment>
          <AuthInfo isAuth={isAuth} islogged={islogged} onClick={this.handleClick} />
          <Switch>
            <Route path="/login" component={AuthRoute} />
            <PrivateRoute path="/game" component={Game} isAuth={isAuth} islogged={islogged} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  isAuth: bool,
  islogged: bool,
  login: func,
  logout: func
};

const mapStateToProps = store => ({
  islogged: store.login.islogged,
  isAuth: store.login.isAuth
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values)),
  logout: () => dispatch(actionsCreator.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
