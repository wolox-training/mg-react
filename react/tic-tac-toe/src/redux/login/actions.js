import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

import authService from '~services/AuthServices';

import { saveToken } from '~utils/GeneralUtils';

import { saveState, removeState } from '~services/localStorage';

export const actions = createTypes(completeTypes(['LOGIN'], ['LOGOUT', 'SET_TOKEN']), '@@AUTH');

const actionsCreator = {
  login: values => ({
    type: actions.LOGIN,
    target: 'islogin',
    service: authService.singIn,
    payload: values,
    successSelector: response => response && response.data && true,
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch(actionsCreator.setToken(response.data));
        saveState(response.data);
      })
    ]
  }),
  setToken: ({ token }) => {
    saveToken(token);
    return { type: actions.SET_TOKEN, payload: token, target: 'token' };
  },
  logout: () => {
    removeState();
    return {
      type: actions.LOGOUT
    };
  }
};

export default actionsCreator;
