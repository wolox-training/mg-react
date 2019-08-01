import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  game: {}
};

const reducerDescription = {
  primaryActions: [actions.WINNER]
};

export default createReducer(initialState, completeReducer(reducerDescription));
