import React from 'react';
import { func } from 'prop-types';

import LoginForm from './components/LoginForm';

function Login({ onSubmit }) {
  return <LoginForm onSubmit={onSubmit} />;
}

Login.propTypes = {
  onSubmit: func.isRequired
};

export default Login;
