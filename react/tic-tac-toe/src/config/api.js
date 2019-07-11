import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 5000
});

export default api;
