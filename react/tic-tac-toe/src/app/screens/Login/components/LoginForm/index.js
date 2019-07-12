import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import customInput from '../Fields';
import { required, minLength, isMail, validate } from '../Validation';

import './styles.modules.scss';

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="login">
      <Field name="email" component={customInput} type="text" label="Mail" validate={[required, isMail]} />
      <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <button type="submit" className="submit">
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);
