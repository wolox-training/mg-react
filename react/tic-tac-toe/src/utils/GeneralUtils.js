import api from '../config/api';

export const saveToken = token => api.setHeader('Authorization', token);
