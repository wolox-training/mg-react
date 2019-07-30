import { createTypes, completeTypes, withSuccess } from 'redux-recompose';

import MatchesServices from '~services/AuthServices';

export const actions = createTypes(completeTypes(['MATCHES']), '@@MATCHES');

const actionsCreator = {
  matches: values => ({
    type: actions.MATCHES,
    target: 'matches',
    service: MatchesServices.getMatches,
    payload: values,
    successSelector: response => response && response.data && true,
    injections: [
      withSuccess((dispatch, response) => {
        dispatch({ type: actions.SET_TOKEN, payload: response.data, target: 'data' });
      })
    ]
  })
};

export default actionsCreator;
