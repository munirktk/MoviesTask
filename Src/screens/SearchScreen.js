import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MovieItem from '../components/MovieItem';
import AnimatedSearch from '../components/Search';

const SearchScreen = ({ route, navigation }) => {
  const { movies } = route.params;
  const [filteredMovies, setFilteredMovies] = useState(movies); 

  const onMoviePress = (movie) => {
    console.log('clicked...', movie.id);
    navigation.navigate('MovieDetails', { movie });
  };

  const handleSearch = (text) => {
    const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(text.toLowerCase()));
    console.log('clicked...', filtered);

    setFilteredMovies(filtered);
  };

  return (
    <>
      <AnimatedSearch onSearch={handleSearch} />
      <FlatList
        data={filteredMovies}
        renderItem={({ item }) => (
          <MovieItem item={item} onPress={onMoviePress} isTwoColumns={true} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
    marginTop: 20,
  },
});

export default SearchScreen;
