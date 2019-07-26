import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';

import { WELCOME_MSJ, SINGOUT_MSJ, LOGINFAIL_MSJ, PODIUM_LINK, PLAY_LINK } from '~constants';

import styles from './styles.module.scss';

function AuthInfo({ isAuth, islogged, onClick }) {
  if (islogged) {
    return isAuth ? (
      <nav className={styles.navbar}>
        {WELCOME_MSJ}
        <Link className={styles.navLink} to="/game">
          <span role="img" aria-label="controller">
            🎮
          </span>
          {PLAY_LINK}
        </Link>
        <Link className={styles.navLink} to="/podium">
          <span role="img" aria-label="badge">
            🎖
          </span>
          {PODIUM_LINK}
        </Link>
        <button type="button" onClick={onClick} className={styles.navButton}>
          {SINGOUT_MSJ}
        </button>
      </nav>
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
