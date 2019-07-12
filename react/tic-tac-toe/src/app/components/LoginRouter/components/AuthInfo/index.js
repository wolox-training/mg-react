import React from 'react';

const AuthInfo = () => {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <p>
      Wellcome <button type="button"> Sing Out</button>
    </p>
  ) : (
    <p />
  );
};

export default AuthInfo;
