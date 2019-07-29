import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import login from './login/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(login, composeEnhancers(applyMiddleware(thunk)));
export default store;
