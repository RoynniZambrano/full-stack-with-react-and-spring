
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My hello World
        <FirstComponent></FirstComponent>
      </div>
    );
  }
}



// class component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        FirstComponent
      </div>
    );
  }
}

export default App;