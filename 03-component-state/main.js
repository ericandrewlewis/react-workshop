import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const getTimeOfDay = function() {
  const date = new Date();
  if (date.getHours() < 12) {
    return 'morning';
  } else if (date.getHours() < 18) {
    return 'afternoon';
  } else {
    return 'night';
  }
}

// Components have two methods of tracking their condition: props and state.
// Here we'll look at state.
// State is an instance property.
// It can be changed by calling this.setState()
// It is "local" to the component.
class TimeRelativeGreeting extends Component {
  // Set the initial state in the component's constructor()
  constructor() {
    super();
    this.state = {
      timeOfDay: getTimeOfDay()
    }
  }

  // React will automatically call componentDidMount if we define it
  // in our component class after the component has "mounted" its
  // DOM elements into the document. This is our chance to setup
  // a timer to update the state of our component when the time of
  // day changes.
  componentDidMount() {
    setInterval(() => {
      const timeOfDay = getTimeOfDay();
      // this.setState accepts a function in which we return the new
      // state object.
      this.setState((previousState) => {
        // We'll only update the state if the time of day did change.
        if (timeOfDay === previousState.timeOfDay) {
          return previousState;
        } else {
          return {
            timeOfDay
          };
        }
      });
    }, 1000);
  }

  // render() is the only required function in a React component,
  // which describes the component's subtree.
  render() {
    const { timeOfDay } = this.state;
    return (
      <h1>
        Good {timeOfDay}
      </h1>
    );
  }
}

// EXERCISE
//
// Instead of hardcoding a random time, extend the <Clock> component
// to keep track of the current time, and modify the render function
// to output the time.
//
// Here's some boilerplate for getting the time-related data:
//
// const date = new Date();
// date.getHours()
// date.getMinutes()
// date.getSeconds()
class Clock extends Component {
  render() {
    return (
      <div>3:15:13</div>
    )
  }
}

ReactDOM.render(
  <div>
    <TimeRelativeGreeting />
    <Clock />
  </div>,
  document.getElementById('root')
);
