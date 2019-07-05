import api from '../config/api';

const getMatches = () => api.get('/matches').then(response => response.data);

export default getMatches;
