import React, { Component } from 'react';
import { func } from 'prop-types';

import LoginForm from './components/LoginForm';

class Login extends Component {
  handleSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

Login.propTypes = {
  onSubmit: func.isRequired
};

export default Login;
