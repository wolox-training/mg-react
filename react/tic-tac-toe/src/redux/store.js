import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import auth from './login/reducer';
import matches from './matches/reducer';
import game from './game/reducer';

const reducers = combineReducers({
  form: formReducer,
  auth,
  matches,
  game
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, fetchMiddleware)));
export default store;
