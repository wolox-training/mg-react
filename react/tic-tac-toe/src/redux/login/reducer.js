import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = {
  islogin: null,
  token: null
};

const initialState = completeState(initialStateDescription, ['token']);

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.SET_TOKEN]: (state, action) => ({ ...state, [action.target]: action.payload, islogin: true }),
    [actions.LOGOUT]: state => ({ ...state, islogin: false, token: null })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
