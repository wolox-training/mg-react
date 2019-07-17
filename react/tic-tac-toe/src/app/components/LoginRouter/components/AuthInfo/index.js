import React from 'react';
import { bool, func } from 'prop-types';

import styles from './styles.module.scss';

function AuthInfo({ islogged, onClick }) {
  return islogged ? (
    <p className={styles.container}>
      Welcome Buddy{' '}
      <button type="button" onClick={onClick} className={styles.button}>
        {' '}
        Sing Out
      </button>
    </p>
  ) : (
    <div className={styles.errorContainer}>
      <p className={styles.error}>Login Failed!</p>
    </div>
  );
}

AuthInfo.propTypes = {
  islogged: bool.isRequired,
  onClick: func.isRequired
};

export default AuthInfo;
