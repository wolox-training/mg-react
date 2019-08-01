import React from 'react';
import Spinner from 'react-spinkit';

function LoadingComponent(WrappedComponent) {
  return function loading({ onLoading, ...props }) {
    return onLoading ? <Spinner name="ball-scale-ripple" color="green" /> : <WrappedComponent {...props} />;
  };
}

export default LoadingComponent;
