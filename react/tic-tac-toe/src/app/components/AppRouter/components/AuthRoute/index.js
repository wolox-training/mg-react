import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../../../../screens/Login';
import actionsCreator from '../../../../../redux/login/actions';

class AuthRoute extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values);
  };

  render() {
    const { islogged, isAuth } = this.props;
    return islogged && isAuth ? (
      <Redirect from="/login" to="/game" />
    ) : (
      <Login onSubmit={this.handleSubmit} />
    );
  }
}

AuthRoute.propTypes = {
  isAuth: bool,
  islogged: bool,
  login: func
};

const mapStateToProps = store => ({
  islogged: store.login.islogged,
  isAuth: store.login.isAuth
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsCreator.login(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
