import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      {name: 'Shahram'}
    ]
  }


  render() {
    return (
      <div className="App">
        <p>Assignment 1</p>
        <UserInput />
        <UserOutput userName={this.state.username[0].name}/>
        <UserOutput />
      </div>
    );
  }
}

export default App;
