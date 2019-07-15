import React, { Component } from 'react';
import cx from 'classnames';

class customInput extends Component {
  getValidityClassName = meta => {
    const { touched, valid } = meta;

    if (touched) {
      return valid ? 'valid' : 'invalid';
    }
    return 'active';
  };

  render() {
    const { label, input, type, meta } = this.props;
    const { dirty, error, touched, active } = meta;
    return (
      <div className={cx('custom-input-container', { dirty }, this.getValidityClassName(meta))}>
        <input {...input} type={type} className={cx('custom-input')} />
        <label className={cx('custom-label')}>{label}</label>
        {error && touched && !active && <div className={cx('feedback-text', 'error-text')}>{error}</div>}
      </div>
    );
  }
}

export default customInput;
