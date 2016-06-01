import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

import bungeBooksReducer from './reducer/bungee-books-reducer';

const store = createStore(bungeBooksReducer);
console.log(store);

ReactDOM.render(
<Provider store={store}>
  <App saludo="Juan" >
    <ul>
      <li>Hola mundo</li>
      <li>Hola feos</li>
    </ul>
  </App>
</Provider>, document.querySelector('#app'));
