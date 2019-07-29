import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

import AuthService from '~services/AuthServices';

import { saveState, removeState } from '~services/localStorage';

export const actions = createTypes(completeTypes(['LOGIN'], ['LOGOUT', 'SET_TOKEN']), '@@AUTH');

const actionsCreator = {
  login: values => ({
    type: actions.LOGIN,
    target: 'islogin',
    service: AuthService.singIn,
    payload: values,
    successSelector: response => response && response.data && true,
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch(actionsCreator.setToken(response.data));
        saveState(response.data);
      })
    ]
  }),
  setToken: ({ token }) => ({ type: actions.SET_TOKEN, payload: token, target: 'token' }),
  logout: () => {
    removeState();
    return {
      type: actions.LOGOUT
    };
  }
};

export default actionsCreator;
