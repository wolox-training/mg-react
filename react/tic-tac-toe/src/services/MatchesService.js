import api from '../config/api';

const getMatches = () =>
  api
    .get('/matches')
    .then(response => response.data)
    .catch(error => error);

export default getMatches;
