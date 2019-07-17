import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import { loadState, saveState } from '../../app/components/localStorage';

import { actions } from './actions';

const initialState = {
  islogged: null,
  isAuth: null,
  ...loadState()
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_FAILURE:
      return { ...state, islogged: action.payload };
    case actions.LOGOUT:
      saveState({ ...state, islogged: null, isAuth: null });
      return { ...state, islogged: null, isAuth: null };
    case actions.LOGIN_SUCCESS: {
      saveState({ ...state, islogged: action.payload, isAuth: true });
      return { ...state, islogged: action.payload, isAuth: true };
    }
    default:
      return state;
  }
}

const reducers = {
  form: formReducer,
  login: loginReducer
};

export default combineReducers(reducers);
