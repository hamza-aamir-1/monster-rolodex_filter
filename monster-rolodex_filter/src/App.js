import React, {Component} from 'react';
import logo from './monster.png';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Monster Rolodex
        </h2>
        <h4>
          Hamza Aamir
        </h4>
      </header>
    </div>
    );
  };
}

export default App;
