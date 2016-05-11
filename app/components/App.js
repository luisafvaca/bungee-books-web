import React, {
   Component
} from 'react';
import style from './App.scss';
import classNames from 'classNames/bind';

const css = classNames.bind(style);

class App extends Component {
  render () {
    return (
      <div className={ style.app + ' ' + style['app-coso'] }>
        <p className={ css('coso') }>Hola Mundo</p>
      </div>
    );
  }
}

export default App;
