import { createTypes, completeTypes } from 'redux-recompose';

import MatchesService from '~services/MatchesService';

import { calculateWinner } from '~utils/GeneralUtils';

export const actions = createTypes(completeTypes(['WINNER'], ['ON_CLICK', 'ON_MOVE']), '@@GAME');

const actionsCreator = {
  winner: values => ({
    type: actions.WINNER,
    target: 'game',
    service: MatchesService.postMatch,
    payload: values
  }),
  onClick: (id, history, stepNumber, xIsNext) => dispatch => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[historyPoint.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[id]) {
      return;
    }
    squares[id] = xIsNext ? 'X' : 'O';
    const payload = {
      history: historyPoint.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: historyPoint.length
    };
    dispatch({ type: actions.ON_CLICK, payload });
  },
  onMove: move => dispatch => {
    const payload = { stepNumber: move, xIsNext: move % 2 === 0 };
    dispatch({ type: actions.ON_MOVE, payload });
  }
};

export default actionsCreator;
