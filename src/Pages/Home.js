import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Exemplu pentru endpoint-ul de filme populare (trending)
        const trendingResponse = await axios.get('/trending/get-trending');
        setTrendingMovies(trendingResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', );
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
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      {/* Puteți adăuga mai multe componente sau logica aici */}
    </div>
  );
};

export default Home;
