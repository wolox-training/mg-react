import api from '../config/api';

export const authService = {
  singIn: payload => api.post('/login', payload),
  saveToken: ({ token }) => api.setHeader({ Autorization: token })
};

export default authService;
