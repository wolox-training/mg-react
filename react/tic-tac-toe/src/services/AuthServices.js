import api from '../config/api';

const authService = {
  singIn: payload => api.post('/login', payload)
};

export default authService;
