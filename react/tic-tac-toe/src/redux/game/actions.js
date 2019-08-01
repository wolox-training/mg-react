import { createTypes, completeTypes } from 'redux-recompose';

import MatchesService from '~services/MatchesService';

export const actions = createTypes(completeTypes(['WINNER']), '@@GAME');

const actionsCreator = {
  winner: values => ({
    type: actions.WINNER,
    target: 'game',
    service: MatchesService.postMatch,
    payload: values
  })
};

export default actionsCreator;
