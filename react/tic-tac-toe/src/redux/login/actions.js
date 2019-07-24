import { createTypes, completeTypes, withPostFailure, withPostSuccess } from 'redux-recompose';

import AuthService from '~services/AuthServices';

import { saveState, removeState } from '~components/localStorage';

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
          payload: response
        });
        saveState({ islogged: response, isAuth: true });
      }),
      withPostFailure((dispatch, response) => {
        saveState({ islogged: response, isAuth: false });
        dispatch({ type: actions.LOGIN_FAILURE, payload: response });
      })
    ]
  }),
  logout: () => {
    removeState();
    return {
      type: actions.LOGOUT
    };
  }
};

export default actionsCreator;
