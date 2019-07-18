import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const reducers = { form: formReducer };

export default combineReducers(reducers);
