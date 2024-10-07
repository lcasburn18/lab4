//Imports
import React from 'react';
import MovieItem from './MovieItem';
import { Container, Row, Col } from 'react-bootstrap';

// Define the Movies component, which takes movies as a prop
const Movies = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map(movie => (
          <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
            <MovieItem movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Export the Movies component
export default Movies;
