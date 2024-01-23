



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `/movies/get-movie-details/${match.params.movieId}?language=en-US&page=1`
        );
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('An error occurred while fetching movie details.');
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [match.params.movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Title: {movieDetails.title}</p>
      {/* Add other details you want to display */}
    </div>
  );
};

export default MovieDetails;
