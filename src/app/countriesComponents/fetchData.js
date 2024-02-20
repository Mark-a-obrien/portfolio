"use client"

import useSWR from 'swr';

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const FetchedData = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR('https://restcountries.com/v3.1/all', fetcher);

  // // Handles error and loading state
  // if (error) return <div className='failed'>failed to load</div>;
  // if (isValidating) return <div className="Loading">Loading...</div>;


  if (!isValidating) {
  return (
    countries
  );
  }
};

export default FetchedData;
