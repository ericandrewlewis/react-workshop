import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// We can create custom component types by creating a child component
// of React's Component class.
//
class SiteHeader extends Component {
  // render() is a function that describes the component's subtree.
  // It is the only required function in a React component.
  render() {
    return (
      <div>
        <h1>Brian Eno Fan Website</h1>
        <div>
          <img src="http://www.saltartists.com/wp-content/uploads/2014/05/Brian-Eno-04.jpg" width="400" />
        </div>
        <nav>
          <ul>
            <li><a href="about">Brian&#39;s Albums</a></li>
            <li><a href="contact-us">More Pictures of Brian</a></li>
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
