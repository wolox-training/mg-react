import api from '../config/api';

import { LINES } from '~constants/';

export const saveToken = token => api.setHeader('Authorization', token);

export const calculateWinner = squares => {
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
