import singIn from '../../services/AuthServices';
import { saveState, removeState } from '../../app/components/localStorage';

export const actions = {
  LOGIN: '@@AUTH/LOGIN',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE',
  LOGOUT: '@@AUTH/LOGOUT'
};

const actionsCreator = {
  login: values => async dispatch => {
    const response = await singIn(values);
    if (response.ok) {
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response.data });
      saveState({ islogged: response.data });
    } else {
      dispatch({ type: actions.LOGIN_FAILURE, payload: response });
    }
  },
  setauth: token => ({ type: actions.LOGIN_SUCCESS, payload: token }),
  logout: () => {
    removeState();
    return {
      type: actions.LOGOUT
    };
  }
};

export default actionsCreator;
