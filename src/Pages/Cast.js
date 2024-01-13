import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
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
  }, []);  
  if (loading) {
    return <p>Loading...</p>;
  }

  
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
  
    </div>
  );
};

export default Cast;
