import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash.debounce';
import css from './main.css';

// EXERCISE
//
// The BookSearch component has a subcomponent <input> with an onChange prop.
// React offers props like this on built-in components that allow us
// to bind a DOM event to a callback function.
//
// Build a new function in the component called updateTitles which accepts the
// searchText variable from the onInputChange handler. updateTitles should call
// the getBooks() function and updates the component state with the relevant search
// results.
//
// Got extra time? Debounce the updateTitles() for a smoother user experience and
// to avoid race conditions.

// Returns a Promise
const getBookTitles = function(title) {
  const encodedTitle = encodeURIComponent(title);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}`;
  return axios.get(url)
    .then((response) => {
      return response.data.items.map((item) => item.volumeInfo.title);
    });
}

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };

    // To make `this` context work properly when the callback is invoked,
    // we force the bind the class instance's `this` to the function
    this.onInputChange = this.onInputChange.bind(this);
    this.updateTitles = debounce(this.updateTitles, 200);
  }

  updateTitles(searchText) {
    getBookTitles(searchText)
      .then((titles) => {
        this.setState({
          titles
        });
      });
  }

  onInputChange(event) {
    const searchText = event.target.value;
    this.updateTitles(searchText);
  }

  render() {
    const { titles } = this.state;
    return (
      <div className="BookSearch">
        <h1>Book Search</h1>
        <input className="BookSearch--text-input" type="text" onChange={this.onInputChange} placeholder="Enter a book title..." />
        <ul className="BookSearch--results">
          {titles.map((title) => <div key={`title-${title}`}>{title}</div>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <BookSearch />,
  document.getElementById('root')
);
