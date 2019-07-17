import React from 'react';
import { bool, func } from 'prop-types';

import styles from './styles.module.scss';

function AuthInfo({ isAuth, onClick }) {
  return isAuth ? (
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
  isAuth: bool,
  onClick: func
};

export default AuthInfo;
