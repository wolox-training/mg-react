import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import customInput from '../Fields';
import { required, minLength, isMail } from '../Validation';

import styles from './styles.module.scss';

function LoginForm({ handleSubmit, pristine }) {
  return (
    <form onSubmit={handleSubmit} className={styles.login}>
      <Field name="email" component={customInput} type="text" label="Mail" validate={[required, isMail]} />
      <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <button type="submit" disabled={pristine} className={styles.submit}>
        Login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  pristine: func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
