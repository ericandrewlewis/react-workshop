import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Props are data passed down to a component instance from its parent.
//
// If you look at the ReactDOM.render() tree below you'll notice we've
// specified a prop twelveHourClock with the value of `true`
//
// You can access props within a component's functions via this.props
//
// EXERCISE
//
// Implement the twelveHourClock prop, so when it's true we see a time like
//
// 18:39:30
//
// and when it's false we should see
//
// 6:39:30 pm
//
// Got extra time? Implement a displaySeconds prop which conditionally
// displays the seconds in the clock.
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

// Defining a propTypes property on a component class will give us
// helpful errors while working on our applications.
Clock.propTypes = {
  twelveHourClock: PropTypes.bool
}

ReactDOM.render(
  <div>
    <Clock
      twelveHourClock={true}
    />
  </div>,
  document.getElementById('root')
);
