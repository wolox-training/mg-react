import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import login from './login/reducer';

const reducers = combineReducers({
  form: formReducer,
  login
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, fetchMiddleware)));
export default store;
