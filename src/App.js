
import React, { Component } from 'react';
import FirstComponent, {SecondComponent}  from './components/learning-examples/FirstComponent'
import ThirdComponent  from './components/learning-examples/ThirdComponent'
import CounterComponent  from './components/counter/CounterComponent'
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComponent by = {1} ></CounterComponent>
        <CounterComponent by = {5} ></CounterComponent>
        <CounterComponent by = {10} ></CounterComponent>
      </div>
    );
  }
}


class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        My hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}




export default App;