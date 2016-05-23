import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
<App saludo="Juan" toDos={['comprar la leche', 'comprar los huevos', 'comida pa los loritos']} >
  <ul>
    <li>Hola mundo</li>
    <li>Hola feos</li>
  </ul>
</App>, document.querySelector('#app'));
