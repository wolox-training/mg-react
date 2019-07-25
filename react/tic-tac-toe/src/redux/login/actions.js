import { createTypes, completeTypes, withPostFailure, withPostSuccess } from 'redux-recompose';

import { saveState, removeState } from '~services/localStorage';

import AuthService from '~services/AuthServices';

export const actions = createTypes(completeTypes(['LOGIN'], ['LOGOUT']), '@@AUTH');

const actionsCreator = {
  login: values => ({
    type: actions.LOGIN,
    target: 'login',
    service: AuthService.singIn,
    payload: values,
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch({
          type: actions.LOGIN_SUCCESS,
          payload: response.data
        });
        saveState({ islogged: response.data });
      }),
      withPostFailure((dispatch, response) => {
        dispatch({ type: actions.LOGIN_FAILURE, payload: response });
      })
    ]
  }),
  setauth: token => ({ type: actions.LOGIN_SUCCESS, payload: token }),
  logout: () => {
    removeState();
    return {
      type: actions.LOGOUT
    };
  }
};

export default actionsCreator;
