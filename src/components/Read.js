// Imports
import React from 'react';
import Movies from './Movies';
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  // State to hold the list of movies
  const [movies, setMovies] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Making a GET request to fetch movie data
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        // Updating state with the fetched movies
        setMovies(response.data.movies);
      })
      .catch((error) => {
        // Logging any error that occurs
        console.log(error);
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h2>Movie List</h2> {/* Header for the movie list */}
      <Movies movies={movies} /> {/* Pass the movies array to the Movies component as a prop */}
    </div>
  );
};

// Export the Read component
export default Read;