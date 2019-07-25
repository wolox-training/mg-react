import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard, faGamepad } from '@fortawesome/free-solid-svg-icons';

import { WELCOME_MSJ, SINGOUT_MSJ, LOGINFAIL_MSJ, PODIUM_LINK, PLAY_LINK } from '~constants';

import styles from './styles.module.scss';

function AuthInfo({ isAuth, islogged, onClick }) {
  if (islogged) {
    return isAuth ? (
      <ul className={styles.container}>
        <h5>{WELCOME_MSJ}</h5>
        <li>
          <Link className={styles.link} to="/game">
            <FontAwesomeIcon icon={faChessBoard} />
            {PLAY_LINK}
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/podium">
            <FontAwesomeIcon icon={faGamepad} />
            {PODIUM_LINK}
          </Link>
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
