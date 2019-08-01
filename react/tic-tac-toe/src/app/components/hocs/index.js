import React from 'react';
import Spinner from 'react-spinkit';

function higherOrderComponent(WrappedComponent) {
  return function HOC({ onLoading, ...props }) {
    return onLoading ? <Spinner name="ball-scale-ripple" color="green" /> : <WrappedComponent {...props} />;
  };
}

export default higherOrderComponent;
