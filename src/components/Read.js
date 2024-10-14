// Imports
import React from 'react';
import Movies from './Movies';
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Movie List</h2> {/* Header for the movie list */}
      <Movies movies={movies} /> {/* Pass the movieData array to the Movies component as a prop */}
    </div>
  );
};

// Export the Read component
export default Read;
