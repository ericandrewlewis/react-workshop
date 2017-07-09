import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash.debounce';

// EXERCISE
//
// BookSearch performs both AJAX request fetching and view
// Separate the view logic from the AJAX data request logic by c

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

ReactDOM.render(
  <BookSearch />,
  document.getElementById('root')
);
