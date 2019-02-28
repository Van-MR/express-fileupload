import React, { Component } from 'react';
import './App.css';

import Main from './components/Main.jsx'

class App extends Component {

  textStyle = {
    color:'red',
    textAlign:'center'
  }

  render() {
    return (
      <div className="App">
          <h3 style={this.textStyle}>file upload</h3>
          <Main />

      </div>
    );
  }
}

export default App;
