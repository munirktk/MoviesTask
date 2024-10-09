import React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../components/AppBar';
import Search from '../components/Search';

const UpcomingMovies = () => {

  const handleSearch = (text) => { 
    console.log('Searching for:', text);
  };
  return (
    <>
      <Search onSearch={handleSearch} /> 
    </>
  );
}

export default UpcomingMovies;
