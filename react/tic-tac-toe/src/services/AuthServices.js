import api from '../config/api';

export const authService = {
  singIn: payload => api.post('/login', payload)
};

export default authService;
