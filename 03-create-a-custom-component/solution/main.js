import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// EXERCISE
//
// Create a own component class for a <Clock> which returns a hardcoded
// time (eg. 3:10 or 7:15) and add it into the component tree.


// We can create custom component types by creating a child component
// of React's Component class.
//
class SiteHeader extends Component {
  // render() is a function that describes the component's subtree.
  // It is the only required function in a React component.
  render() {
    return (
      <div>
        <h1>Frank Ocean Fan Website</h1>
        <div>
          <img src="http://thefader-res.cloudinary.com/images/w_1440,c_limit,f_auto,q_auto:best/gizfef3m2peiqleuyr7x/frank-ocean.jpg" width="400" />
        </div>
        <nav>
          <ul>
            <li><a href="about">Frank&#39;s Albums</a></li>
            <li><a href="contact-us">Pictures of Frank</a></li>
          </ul>
        </nav>
      </div>
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
    <SiteHeader />
    <Clock />
  </div>,
  document.getElementById('root')
);
