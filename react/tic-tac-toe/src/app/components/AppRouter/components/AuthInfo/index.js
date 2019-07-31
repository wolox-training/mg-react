import React from 'react';
import { bool, func, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { WELCOME_MSJ, SINGOUT_MSJ, LOGINFAIL_MSJ, routes } from '~constants';

import styles from './styles.module.scss';

function AuthInfo({ isAuth, onError, onClick }) {
  if (isAuth) {
    return (
      <nav className={styles.navbar}>
        <h5 className={styles.navTitle}>{WELCOME_MSJ}</h5>
        <Link className={styles.navLink} to={routes.GAME}>
          <span role="img" aria-label="controller">
            🎮
          </span>
          {routes.GAME_LABEL}
        </Link>
        <Link className={styles.navLink} to={routes.PODIUM}>
          <span role="img" aria-label="badge">
            🎖
          </span>
          {routes.PODIUM_LABEL}
        </Link>
        <button type="button" onClick={onClick} className={styles.navButton}>
          {SINGOUT_MSJ}
        </button>
      </nav>
    );
  } else if (onError) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.error}>{LOGINFAIL_MSJ}</p>
      </div>
    );
  }
  return false;
}

AuthInfo.propTypes = {
  isAuth: bool,
  onClick: func,
  onError: string
};

export default AuthInfo;
