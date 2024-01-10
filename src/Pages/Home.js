import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from 'service';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Exemplu pentru endpoint-ul de filme populare (trending)
        const trendingResponse = await axios.get('/trending/all/day');
        console.dir(trendingResponse.data);
        setTrendingMovies(trendingResponse.data.results);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:');
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Asigură-te că specifici toate dependențele necesare pentru useEffect

  // Afisează un mesaj de încărcare dacă datele sunt încă în curs de preluare
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
      {/* Puteți adăuga mai multe componente sau logica aici */}
    </div>
  );
};

export default Home;
