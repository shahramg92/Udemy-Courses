import React, { Component } from 'react';
impo './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Assignment 1</p>
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
