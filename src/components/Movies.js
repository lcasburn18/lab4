//Imports
import React from 'react';
import MovieItem from './MovieItem';
import { Container, Row, Col } from 'react-bootstrap';

// Define the Movies component, which takes movies as a prop
const Movies = ({ movies }) => {
  return (
    <Container> {/* Bootstrap container for proper alignment and spacing */}
      <Row> {/* Bootstrap row to create a flexbox layout for the movie items */}
        {movies.map(movie => ( // Iterate over the movies array
          <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3}> {/* Bootstrap column with responsive sizes */}
            <MovieItem movie={movie} /> {/* Render the MovieItem component for each movie */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Export the Movies component
export default Movies;
