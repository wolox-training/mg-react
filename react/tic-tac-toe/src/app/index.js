import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import AppRouter from './components/AppRouter';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
