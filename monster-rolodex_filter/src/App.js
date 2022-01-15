import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.jsx';
import { SearchBox } from './components/search-box/search-box';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
      searchContent: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({monsters : users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
    this.setState({searchContent: e.target.value});
  };

  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <h1>Monsters by Hamza <br/> {this.state.searchContent}</h1>
        <SearchBox placeholder='Search Monsters...' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };

}

export default App;
