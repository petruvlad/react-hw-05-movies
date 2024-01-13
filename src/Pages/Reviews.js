import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsResponse = await axios.get('/movies/get-movie-reviews');
        setMovieReviews(reviewsResponse.data);

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
      <h2>Movie Reviews</h2>
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>{review.comment}</li>
        ))}
      </ul>
   
    </div>
  );
};

export default Reviews;
