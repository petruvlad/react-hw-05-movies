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
        const trendingResponseDay = await axios.get('/trending/all/day');
        console.dir(trendingResponseDay.data);
        setTrendingMovies(trendingResponseDay.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    </div>
  );
};

export default Home;
