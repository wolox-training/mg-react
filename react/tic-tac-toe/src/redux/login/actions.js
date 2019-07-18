import singIn from '../../services/AuthServices';

export const actions = {
  LOGIN: '@@AUTH/LOGIN',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE',
  LOGOUT: '@@AUTH/LOGOUT'
};

const actionsCreator = {
  login: values => async dispatch => {
    const response = await singIn(values);
    dispatch({ type: response.ok ? actions.LOGIN_SUCCESS : actions.LOGIN_FAILURE, payload: response });
  },
  logout: () => ({
    type: actions.LOGOUT
  })
};

export default actionsCreator;
