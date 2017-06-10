import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Props are data passed down to a component instance from its parent.
//
// If you look at the ReactDOM.render() tree below you'll notice we've
// specified a prop 24hour with the value of `true`.
//
// You can access props within a component's functions via this.props
//
// EXERCISE
//
// Implement the 24hour prop, so when it's true we see a time like
//
// 18:39:30
//
// and when it's false we should see
//
// 6:39:30 pm
class Clock extends Component {
  constructor() {
    super();
    const date = new Date();
    this.state = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((previousState) => {
        const date = new Date();
        return {
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        };
      });
    }, 1000);
  }

  render() {
    const { hour, minute, second } = this.state;
    return (
      <div>{hour}:{minute}:{second}</div>
    );
  }
}

ReactDOM.render(
  <div>
    <Clock
      24hour=true
    />
  </div>,
  document.getElementById('root')
);
