import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import books from './book/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(books, composeEnhancers(applyMiddleware(thunk)));
