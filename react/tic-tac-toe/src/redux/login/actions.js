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
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE
      });
    }
  },
  logout: () => ({
    type: actions.LOGOUT
  })
};

export default actionsCreator;
