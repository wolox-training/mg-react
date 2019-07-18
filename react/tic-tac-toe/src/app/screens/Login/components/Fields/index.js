import React from 'react';

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
}

export default customInput;
