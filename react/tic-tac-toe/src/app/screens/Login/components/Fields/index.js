import React, { Component } from 'react';
import cx from 'classnames';

class customInput extends Component {
  getValidityClassName = meta => {
    const { active, touched, invalid, valid, asyncValidating } = meta;

    if (active) {
      return 'active';
    }
    if (touched && invalid) {
      return 'invalid';
    }
    if (touched && valid) {
      return 'valid';
    }
    if (asyncValidating) {
      return 'async-validating';
    }
    return '';
  };

  render() {
    const { label, input, type, meta } = this.props;
    const { dirty, error, touched, active } = meta;
    return (
      <div className={cx('custom-input-container', { dirty }, this.getValidityClassName(meta))}>
        <input {...input} type={type} className={cx('custon-input')} />
        <label>{label}</label>
        {error && touched && !active && <div className={cx('feedback-text', 'error-text')}>{error}</div>}
      </div>
    );
  }
}

export default customInput;
