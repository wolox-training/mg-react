import api from '../config/api';

const MatchesServices = {
  getMatches: () => api.get('/matches'),
  postMatch: data => api.post('/matches', data)
};

export default MatchesServices;
