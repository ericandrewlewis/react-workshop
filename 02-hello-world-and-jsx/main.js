import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render() will mount a React element in a given DOM node.
//
// React.createElement() creates an instance of a React component.
// Using React.createElement() to describe deep component trees can be
// a bit hard to read:
//
// React.createElement(
//   'div', {},
//   React.createElement(
//     'h1', {},
//     'Hot MTA Tips'
//   ),
//   React.createElement(
//     'ul', {},
//     [
//       React.createElement(
//         'li', {},
//         'On a crowded train enter the car at one of the center doors'
//       ),
//       React.createElement(
//         'li', {},
//         'Stay on the 6 train at City Hall and you\'ll see the old station when the train turns around'
//       )
//     ]
//   )
// );
//
// EXERCISE:
//
// Replace the React.createElement() call in the JavaScript below with this:
//
//  <h1>Hiii</h1>
//
// This is JSX. It's React's JavaScript language extension to make component trees
// easier to read.
//
// If you have extra time, create a nested component tree with some familiar
// HTML elements (divs, img, table, links)

ReactDOM.render(
  React.createElement(
    // The type of the component
    'h1',
    // Props (none just yet)
    {},
    // The component children
    'Hi!'
  ),
  document.getElementById('root')
);
