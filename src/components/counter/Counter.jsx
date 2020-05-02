import React, { Component } from 'react';
import './Counter.css'


class Counter extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)

  }

  render() {
    return (
      <div className="Counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton> 
        <span className="count">{this.state.counter}</span>
          <div  onClick= {this.reset}>
            <button className= "reset">Reset</button>
          </div>
      </div>
    );
  }


  reset() {
    this.setState(
      { counter: 0 }
    )
  }


  increment(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter + by }
     }
    )
  }

  decrement(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter - by }
     }
    )
  }

}



// buttons
class CounterButton extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="counterComponent">
        <button onClick={ () => this.props.incrementMethod(this.props.by)}> + {this.props.by} </button>
        <button onClick={ () => this.props.decrementMethod(this.props.by)}> - {this.props.by} </button>
        {/*<span className="count">{this.state.counter}</span>*/}
      </div>
    );
  }

}


CounterButton.defaulProps = {
  by: 1
}

export default Counter