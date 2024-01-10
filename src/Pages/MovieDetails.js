import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!movieId) {
          setError('Movie ID is not provided.');
          setLoading(false);
          return;
        }

        // Exemplu pentru endpoint-ul de informații complete despre un film
        const detailsResponse = await axios.get(
          `/movies/get-movie-details?id=${movieId}`
        );
        setMovieDetails(detailsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]); // Asigură-te că specifici toate dependențele necesare pentru useEffect

  // Afisează un mesaj de încărcare dacă datele sunt încă în curs de preluare
  if (loading) {
    return <p>Loading...</p>;
  }

  // Afisează un mesaj de eroare dacă apare o eroare în timpul preluării datelor
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Title: {movieDetails.title}</p>
      <p>Overview: {movieDetails.overview}</p>
      {/* Puteți adăuga mai multe componente sau logica aici */}
    </div>
  );
};

export default MovieDetails;
