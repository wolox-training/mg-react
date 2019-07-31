import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '~screens/Login';

import { routes } from '~constants';

import actionsCreator from '~redux/login/actions';

class AuthRoute extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values);
  };

  render() {
    const { islogged } = this.props;
    return islogged ? (
      <Redirect from={routes.LOGIN} to={routes.GAME} />
    ) : (
      <Login onSubmit={this.handleSubmit} />
    );
  }
}

AuthRoute.propTypes = {
  islogged: bool,
  login: func
};

const mapStateToProps = store => ({
  islogged: store.auth.islogin
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
