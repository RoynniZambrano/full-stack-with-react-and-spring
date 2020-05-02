import React, { Component } from 'react';
import './Counter.css'


class CounterComponent extends Component {
    
  constructor(){
    super()
    this.state = {
      counter : 0,
    }

    this.increment = this.increment.bind(this)

  }
  
  render(){    
  return (
        <div className="counterComponent">
          <button onClick={this.increment}> + {this.props.by} </button>
          <span className="count">{this.state.counter}</span>
        </div>
      );
  }

  increment(){
    console.log(' increment')

    this.setState({
      counter : this.state.counter + this.props.by,
    })
    
  }

}


CounterComponent.defaulProps = {
  by : 1
}

export default CounterComponent