import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = {
  matches: []
};

const initialState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [actions.MATCHES]
};

export default createReducer(initialState, completeReducer(reducerDescription));
