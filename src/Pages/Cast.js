import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Exemplu pentru endpoint-ul de informații despre distribuția de actori
        const creditsResponse = await axios.get('/movies/get-movie-credits');
        setMovieCredits(creditsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  // Afisează un mesaj de eroare dacă apare o eroare în timpul preluării datelor
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Movie Credits</h2>
      <ul>
        {movieCredits.map(credit => (
          <li key={credit.id}>{credit.actorName}</li>
        ))}
      </ul>
      {/* Puteți adăuga mai multe componente sau logica aici */}
    </div>
  );
};

export default Cast;
