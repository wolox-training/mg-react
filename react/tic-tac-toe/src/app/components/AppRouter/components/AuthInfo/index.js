import React from 'react';
import { bool, func } from 'prop-types';

import { WELCOME_MSJ, SINGOUT_MSJ, LOGINFAIL_MSJ } from '../../../../../constants';

import styles from './styles.module.scss';

function AuthInfo({ isAuth, islogged, onClick }) {
  if (islogged) {
    return isAuth ? (
      <p className={styles.container}>
        {WELCOME_MSJ}
        <button type="button" onClick={onClick} className={styles.button}>
          {SINGOUT_MSJ}
        </button>
      </p>
    ) : (
      <div className={styles.errorContainer}>
        <p className={styles.error}>{LOGINFAIL_MSJ}</p>
      </div>
    );
  }
  return false;
}

AuthInfo.propTypes = {
  isAuth: bool,
  islogged: bool,
  onClick: func
};

export default AuthInfo;
