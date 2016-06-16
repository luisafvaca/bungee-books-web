import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import App from './components/App';

import bungeBooksReducer from './reducer/bungee-books-reducer';

const store = createStore(
  bungeBooksReducer,
  applyMiddleware(
    createLogger()
  )
);

ReactDOM.render(
<Provider store={store}>
  <App saludo="Juan" >
    <ul>
      <li>Hola mundo</li>
      <li>Hola feos</li>
    </ul>
  </App>
</Provider>, document.querySelector('#app'));
