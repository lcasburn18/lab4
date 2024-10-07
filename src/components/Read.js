// Imports
import React from 'react';
import Movies from './Movies';

// Define the Read component
const Read = () => {
  // Define a constant array of movie data
  const movieData = [
    {
      "Title": "Avengers: Infinity War", // Title of the movie
      "Year": "2018", // Release year
      "imdbID": "tt4154756", // IMDb ID for linking
      "Type": "movie", // Type of media
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" // URL of the movie poster
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];

  return (
    <div>
      <h2>Movie List</h2> {/* Header for the movie list */}
      <Movies movies={movieData} /> {/* Pass the movieData array to the Movies component as a prop */}
    </div>
  );
};

// Export the Read component
export default Read;
