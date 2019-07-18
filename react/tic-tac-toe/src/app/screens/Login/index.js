import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class Login extends Component {
  // TODO handleSubmit = () => {};

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
