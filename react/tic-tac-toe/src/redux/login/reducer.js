import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import { actions } from './actions';

const initialState = {
  islogged: null
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_FAILURE:
      return { ...state };
    case actions.LOGOUT:
      return { ...state, islogged: null };
    case actions.LOGIN_SUCCESS:
      return { ...state, islogged: action.payload.data };
    default:
      return state;
  }
}

const reducers = {
  form: formReducer,
  login: loginReducer
};

export default combineReducers(reducers);
