import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

const initialState = {
  count: 0,
  toDos: ['comprar la leche', 'comprar los huevos', 'comida pa los loritos']
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'INCREMET':
      return state.count + 1;
      break;
    default:
      return state;
  }
});

ReactDOM.render(
<Provider store={store}>
  <App saludo="Juan" >
    <ul>
      <li>Hola mundo</li>
      <li>Hola feos</li>
    </ul>
  </App>
</Provider>, document.querySelector('#app'));
