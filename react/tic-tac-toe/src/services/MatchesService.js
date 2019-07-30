import api from '../config/api';

const MatchesServices = {
  getMatches: () =>
    api
      .get('/matches')
      .then(response => response.data)
      .catch(error => error),
  postMatch: data => api.post('/matches', data)
};

export default MatchesServices;
