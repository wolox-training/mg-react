import React from 'react';

<<<<<<< HEAD
import styles from './styles.module.scss';

function customInput({ label, input, type, meta }) {
  const { error, touched, active } = meta;
  return (
    <div className={styles.customInputContainer}>
      <input {...input} type={type} className={styles.customInput} />
      <label className={styles.customLabel}>{label}</label>
      {error && touched && !active && <span className={styles.errorText}>{error}</span>}
    </div>
  );
=======
class customInput extends Component {
  getValidityClassName = meta => {
    const { touched, valid } = meta;

    if (touched && !valid) {
      return 'invalid';
    }
    if (touched && valid) {
      return 'valid';
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
>>>>>>> code refactoring, Coding submit function in a superior component
}

export default customInput;
