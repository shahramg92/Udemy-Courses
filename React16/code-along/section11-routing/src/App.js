import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div lassName="App">
        <Blog />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
