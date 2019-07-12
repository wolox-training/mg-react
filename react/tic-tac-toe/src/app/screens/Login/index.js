/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import singIn from '../../../services/AuthServices';

import LoginForm from './components/LoginForm';

class Login extends Component {
  handleSubmit = () => {
    // TODO
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
