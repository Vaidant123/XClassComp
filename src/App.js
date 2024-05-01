import React, { Component } from "react";
import "./App.css";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h2>Counter Application</h2>
        <div className="counter">
          <p>Count: {count}</p>
          <div className="buttons">
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComp;
