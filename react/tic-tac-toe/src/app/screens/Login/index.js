<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
>>>>>>> code refactoring, Coding submit function in a superior component
import { func } from 'prop-types';

import LoginForm from './components/LoginForm';

<<<<<<< HEAD
function Login({ onSubmit }) {
  return <LoginForm onSubmit={onSubmit} />;
=======
class Login extends Component {
  handleSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
>>>>>>> code refactoring, Coding submit function in a superior component
}

Login.propTypes = {
  onSubmit: func.isRequired
};

export default Login;
