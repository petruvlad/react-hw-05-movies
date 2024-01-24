import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
       
        const response = await axios.get(`/trending/movie/day?language=en-US`, {
          headers: {
            Authorization: 'Bearer  efa2e675f2243f334db256d91fd95d27',
            'Content-Type': 'application/json',
          },
        });

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
      {/* Adaugă alte detalii pe care vrei să le afișezi */}
    </div>
  );
};

export default MovieDetails;
