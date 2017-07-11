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
// Now try creating the "Hot MTA Tips" example above with JSX.
//
// More time? Experiment with creating nested component tree with other HTML elements
// (divs, img, table, links)

ReactDOM.render(
  <div>
    <h1>Hot MTA Tips</h1>
    <ul>
      <li>On a crowded train enter the car at one of the center doors</li>
      <li>Stay on the 6 train at City Hall and you&#39;ll see the old station when the train turns around</li>
    </ul>
  </div>,
  document.getElementById('root')
);
