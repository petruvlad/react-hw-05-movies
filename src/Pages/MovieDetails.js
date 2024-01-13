import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AUTH_TOKEN } from 'service';

axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

const MovieDetails = () => {
  const { listId } = useParams() || {};
  const [listDetails, setListDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListDetails = async () => {
      try {
        const apiKey = 'efa2e675f2243f334db256d91fd95d27';
        const url = `https://api.themoviedb.org/3/list/${listId}?language=en-US&page=1&api_key=${apiKey}`;
        const response = await axios.get(url);

        setListDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    const fetchData = async () => {
      if (!listId) {
        setError('List ID is not provided.');
        setLoading(false);
      } else {
        await fetchListDetails();
      }
    };

    fetchData();
  }, [listId]); // Only listId is a dependency now

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>List Details</h2>
      <p>List Name: {listDetails.name}</p>
      {/* Display other relevant details from listDetails */}
    </div>
  );
};

export default MovieDetails;
