import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash.debounce';
import css from './main.css';
import movies from 'netflix-movie-rating-data/output/movies';

// An array of movies on Netflix.
console.log(movies);

// EXERCISE:
//
// 1. Render a list of movies so users can browse what's on Netflix.
// Maybe include the IMDB rating so folks can avoid bad movies.
//
// 2. Add a filter to browse titles in a specific genre.
//
// 3. Add a filter to browse titles above a certain rating.

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>What&#39;s on Netflix?</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
