import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({monsters : users}));
  }

  render(){
    return(
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        {this.state.monsters.map(monster => (
          <h4 key={monster.id}>{monster.email}</h4>
        ))}
      </div>
    );
  };

}

export default App;
