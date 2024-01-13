import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from 'service';
import '../styles.css/Movie.css';
const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const searchResponse = await axios.get(
            `/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`
          );
          setSearchedMovies(searchResponse.data?.results);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('An error occurred while fetching data.');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [searchTerm]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="movies-container">
      <h2>Searched Movies</h2>
      <ul className="movies-list">
        {searchedMovies.map(movie => (
          <li key={movie.id} className="movie-item">
            {movie.title}
          </li>
        ))}
      </ul>
      <label>
        <span>Search Term</span>
        <input type="text" onChange={e => setSearchTerm(e.target.value)} />
      </label>
      <button
        disabled={!searchTerm.length}
        onClick={() => {
          searchedMovies(searchTerm);
        }}
        className="search-button"
      >
        {'Search'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};


export default Movies;
