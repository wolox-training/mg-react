import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import LoginRouter from './components/LoginRouter';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <LoginRouter />
    </Provider>
  );
}

export default App;
