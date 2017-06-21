import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// We can create custom components with JavaScript class syntax.
class SiteHeader extends Component {
  // render() is the only required function in a React component,
  // which describes the component's subtree.
  render() {
    return (
      <div>
        <h1>Nirvana Superfan Website</h1>
        <nav>
          <ul>
            <li><a href="about">Nirvana Discography</a></li>
            <li><a href="contact-us">Pictures of Nirvana</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

// EXERCISE
//
// Create a own component class for a <Clock> which returns a hardcoded
// time (eg. 3:10 or 7:15) and add it into the component tree.

ReactDOM.render(
  <div>
    <SiteHeader />
  </div>,
  document.getElementById('root')
);
