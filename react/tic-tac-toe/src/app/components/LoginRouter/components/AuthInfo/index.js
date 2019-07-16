import React from 'react';
import { bool, func } from 'prop-types';

function AuthInfo({ islogged, onClick }) {
  return islogged ? (
    <p>
      Welcome{' '}
      <button type="button" onClick={onClick}>
        {' '}
        Sing Out
      </button>
    </p>
  ) : (
    <p />
  );
}

AuthInfo.propTypes = {
  islogged: bool.isRequired,
  onClick: func.isRequired
};

export default AuthInfo;
