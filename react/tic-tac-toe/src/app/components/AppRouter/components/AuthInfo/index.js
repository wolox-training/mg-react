import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';

import { WELCOME_MSJ, SINGOUT_MSJ, LOGINFAIL_MSJ } from '../../../../../constants';

import styles from './styles.module.scss';

function AuthInfo({ isAuth, islogged, onClick }) {
  if (islogged) {
    return isAuth ? (
      <ul className={styles.container}>
        {WELCOME_MSJ}
        <li className={styles.link}>
          <Link to="/game">Play</Link>
        </li>
        <li className={styles.link}>
          <Link to="/podium">Scores</Link>
        </li>
        <button type="button" onClick={onClick} className={styles.button}>
          {SINGOUT_MSJ}
        </button>
      </ul>
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
