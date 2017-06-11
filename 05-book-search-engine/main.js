import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { debounce } from 'lodash';

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
  constructor() {
    super();
    this.state = {
      titles: []
    };

    // To make `this` work properly when the callback is invoked,
    // we create an explicitly bound version.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const searchText = event.target.value;
    getBookTitles(searchText)
      .then((titles) => {
        this.setState((previousState) => {
          return {
            titles
          }
        })
      })
  }

  render() {
    const { titles } = this.state;
    return (
      <div>
        <input type="text" onChange={this.onInputChange} />
        <ul>
          {titles.map((title) => <div key={`title-${title}`}>{title}</div>)}
        </ul>
      </div>
    );
  }
}

// EXERCISE
//
// The BookSearch component has a subcomponent <input> with an onChange prop.
// React offers props like this on built-in components that allow us
// to bind a DOM event to a callback function.
//
// Build a new function in the component called updateTitles which accepts the
// searchText variable from the onInputChange handler. The function should call
// the getBooks() function and updates the component state with the relevant search
// results.
//
// Got extra time? Debounce the updateTitles() for a smoother user experience and
// to avoid race conditions.

ReactDOM.render(
  <BookSearch />,
  document.getElementById('root')
);
