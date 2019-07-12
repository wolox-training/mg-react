import api from '../config/api';

const singIn = payload => api.post('/login', payload);

export default singIn;
