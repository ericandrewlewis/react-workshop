import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { debounce } from 'lodash';

const getBooks = function(title) {
  const encodedTitle = encodeURIComponent(title);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}`;
  return axios.get(url);
}



class BookSearch extends Component {
  constructor() {
    super();
    this.state = {
      titles: []
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.updateSearchResults = debounce( this.updateSearchResults, 200 );
  }

  updateSearchResults(searchText) {
    getBooks(searchText)
      .then((response) => {
        const titles = response.data.items.map((item) => item.volumeInfo.title);
        this.setState((previousState) => {
          return {titles};
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onInputChange(event) {
    const searchText = event.target.value;
    this.updateSearchResults(searchText);
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
