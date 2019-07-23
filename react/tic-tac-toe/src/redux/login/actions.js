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
      saveState({ islogged: response, isAuth: true });
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response });
    } else {
      saveState({ islogged: response, isAuth: false });
      dispatch({ type: actions.LOGIN_FAILURE, payload: response });
    }
  },
  logout: () => {
    removeState();
    return {
      type: actions.LOGOUT
    };
  }
};

export default actionsCreator;
