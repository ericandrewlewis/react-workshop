import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Below you will find an example component <Greeting>.
// Take a look at how it works, and how it uses and updates state
// to say "Good morning" or "Good evening" depending on the time of day.
//
// EXERCISE
//
// Previously we created a <Clock> component with a hardcoded time.
// Instead of hardcoding it, make the <Clock> component keep track
// of the current time by setting its state, and modify the render
// function to output the current time.
//
// Here's some boilerplate for getting the time-related data:
//
// const date = new Date();
// date.getHours()
// date.getMinutes()
// date.getSeconds()

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
class Greeting extends Component {
  // Set the initial state in the component's constructor()
  constructor() {
    super();
    this.state = {
      timeOfDay: getTimeOfDay()
    };
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
  //
  // To inject variables in JSX we wrap the variable name with curly
  // braces, like with {timeOfDay} here.
  render() {
    const { timeOfDay } = this.state;
    return (
      <h1>
        Good {timeOfDay}
      </h1>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div>3:15:13</div>
    )
  }
}

ReactDOM.render(
  <div>
    <Greeting />
    <Clock />
  </div>,
  document.getElementById('root')
);
