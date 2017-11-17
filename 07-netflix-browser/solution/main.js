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
  constructor(props) {
    super(props);
    this.state = {
      genreFilter: 'all',
      ratingFilter: 'all',
    };
    this.setFilterToSciFi = this.setFilterToSciFi.bind(this);
    this.setFilterToGoodMovies = this.setFilterToGoodMovies.bind(this);
  }

  setFilterToSciFi() {
    this.setState({
      genreFilter: 'Sci-Fi'
    });
  }

  setFilterToGoodMovies() {
    this.setState({
      ratingFilter: 'good'
    });
  }

  render() {
    const {genreFilter, ratingFilter} = this.state;
    let displayedMovies = movies;
    if (genreFilter !== 'all') {
      displayedMovies = displayedMovies.filter((movie) => {
        return movie.genre.indexOf(genreFilter) > -1;
      })
    }
    if (ratingFilter !== 'all') {
      displayedMovies = displayedMovies.filter((movie) => {
        return parseInt(movie.rating) >= 7;
      })
    }
    return (
      <div className="App">
        <h1>What&#39;s on Netflix?</h1>
        <div>
          <button onClick={this.setFilterToSciFi}>Sci-Fi</button>
          <button onClick={this.setFilterToGoodMovies}>Only "good" movies</button>
        </div>
        <ul>
          {displayedMovies.map((movie) => {
            return <li key={`movie-item-${movie.title}`}>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
