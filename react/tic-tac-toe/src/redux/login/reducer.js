import { createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  isLoggedIn: null,
  isAuth: null
};

const reducerDescription = {
  [actions.LOGIN_FAILURE]: (state, action) => ({ ...state, islogged: action.payload }),
  [actions.LOGOUT]: state => ({ ...state, islogged: null, isAuth: null }),
  [actions.LOGIN_SUCCESS]: (state, action) => ({ ...state, islogged: action.payload, isAuth: true })
};

export default createReducer(initialState, reducerDescription);
