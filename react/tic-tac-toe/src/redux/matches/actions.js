import { createTypes, completeTypes } from 'redux-recompose';

import MatchesServices from '~services/MatchesService';

export const actions = createTypes(completeTypes(['MATCHES']), '@@MATCHES');

const actionsCreator = {
  matches: () => ({
    type: actions.MATCHES,
    target: 'matches',
    service: MatchesServices.getMatches
  })
};

export default actionsCreator;
