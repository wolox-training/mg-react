import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import customInput from '../Fields';
import { required, minLength, isMail } from '../Validation';

import styles from './styles.modules.scss';

class LoginForm extends Component {
  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Field
          name="useremail"
          component={customInput}
          type="text"
          label="Mail"
          validate={[required, isMail]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
