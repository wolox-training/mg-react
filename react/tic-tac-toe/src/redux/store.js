import { createStore, compose } from 'redux';

import login from './login/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(login, composeEnhancers());
export default store;
