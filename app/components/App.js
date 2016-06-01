import React, {
   Component
} from 'react';
import { connect } from 'react-redux';

import style from './App.scss';
import classNames from 'classNames/bind';

const css = classNames.bind(style);

// class App extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.saludar = this.saludar.bind(this);
//   }
//
//   saludar (e) {
//     console.log(this.props.saludo);
//   }
//
//   render () {
//     return (
//       <div className={ style.app + ' ' + style['app-coso'] }>
//         <p className={ css('app', 'app-coso') } onClick={ this.saludar } >Hola Mundo</p>
        // <ul>
        //   {
        //     this.props.toDos.map((todo) => {
        //       return <li>{todo}</li>
        //     })
        //   }
        // </ul>
//
//         {this.props.children}
//       </div>
//     );
//   }
// }

function App ({ saludo, toDos, children, count, onClick }) {

  function saludar() {
    console.log(saludo);
  }

  return (
    <div className={ style.app + ' ' + style['app-coso'] }>
      <p className={ css('app', 'app-coso') } onClick={ onClick } >Hola Mundo {count}</p>
      <ul>
        {
          toDos.map((todo, i) => {
            return <li key={i}>{todo}</li>
          })
        }
      </ul>
      { children }
    </div>
  );
}

function mapStateToProps(state, ownState) {
  return Object.assign({}, state);
}

function mapDispatchToProps(dispatch, ownState) {
  return {
    onClick(e) {
      dispatch({ type: 'INCREMET' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
