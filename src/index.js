import React from 'react';
import ReactDOM from 'react-dom';
import PeliculasApp from './PeliculasApp';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PeliculasApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

