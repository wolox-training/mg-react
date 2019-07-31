import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0
};

const reducerDescription = {
  primaryActions: [actions.WINNER],
  override: {
    [actions.ON_CLICK]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [actions.ON_MOVE]: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
