import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class Login extends Component {
  handleSubmit = values => values;

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
