import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };

  componentDidMount() {
    console.log("Counter component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous count", prevState.count);
    console.log("Current count", this.state.count);
  }

  componentWillUnmount() {
    console.log("Counter component unmounted");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update?");
    return nextState.count !== this.state.count;
  }
  render() {
    return (
      <>
        <h1>Count - {this.state.count}</h1>;
        <button onClick={this.increment} style={{ width: "150px" }}>
          Increment
        </button>
        <button onClick={this.decrement} style={{ width: "150px" }}>
          Decrement
        </button>
      </>
    );
  }
}

export default Counter;
