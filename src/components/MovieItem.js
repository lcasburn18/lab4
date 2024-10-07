// Imports
import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

// Define the MovieItem component, which takes a movie object as a prop
const MovieItem = ({ movie }) => {
  // useEffect to log when the component mounts and unmounts
  useEffect(() => {
    console.log(`MovieItem mounted: ${movie.Title}`); // Log when the item is mounted

    // Cleanup function to log when the item is unmounted
    return () => {
      console.log(`MovieItem unmounted: ${movie.Title}`);
    };
  }, [movie]); // Dependency array, runs effect when movie prop changes

  return (
    <Card style={{ width: '18rem', margin: '20px' }}> {/* Bootstrap card for displaying movie details */}
      <Card.Img variant="top" src={movie.Poster} alt={movie.Title} /> {/* Movie poster */}
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title> {/* Movie title */}
        <Card.Text>
          Year: {movie.Year} {/* Movie release year */}
        </Card.Text>
        <Button variant="primary" href={`https://www.imdb.com/title/${movie.imdbID}`}> {/* Button to view movie on IMDb */}
          View on IMDb
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieItem; // Export the MovieItem
