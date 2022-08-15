import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.setState({count: this.state.count + 1})
  }
  decrement() {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return(
      <>
        <h4>Count: {this.state.count}</h4>
        <button className="btn btn-success" onClick={this.increment}>
          INCR
        </button>
        <button className="btn btn-danger" onClick={this.decrement}>
          DECR
        </button>
      </>
    )
  }
}

export default Counter