import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from 'service';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

  // Afisează un mesaj de încărcare dacă datele sunt încă în curs de preluare
  if (loading) {
    return <p>Loading...</p>;
  }

  // Afisează un mesaj de eroare dacă apare o eroare în timpul preluării datelor
  if (error) {
    return <p>{error}</p>;
  }

  function searchForMovie(term) {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Exemplu pentru endpoint-ul de căutare a filmelor
        const searchResponse = await axios.get(
          `/search/movie?include_adult=false&language=en-US&page=1&query=${term}`
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

  return (
    <div>
      <h2>Searched Movies</h2>
      <label>
        <span>Search Term</span>
        <input type="text" onChange={e => setSearchTerm(e.target.value)} />
      </label>
      <button
        disabled={!searchTerm.length}
        onClick={() => {
          searchForMovie(searchTerm);
        }}
      >
        Search
      </button>
      {
        <ul>
          {searchedMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      }
      {/* Puteți adăuga mai multe componente sau logica aici */}
    </div>
  );
};

export default Movies;
