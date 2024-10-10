import React, { useEffect,useState} from 'react';
import Search from '../components/Search';
import api from '../server/api';
import MovieItem from '../components/MovieItem';
import { StyleSheet,FlatList } from 'react-native';
import AppBar from '../components/AppBar';
import { View } from 'native-base';

const UpcomingMovies = ({navigation}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await api.get('/upcoming', {
          params: {
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(response.data.results); // Set the results to state
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  const onSearchPress = () => { 
    navigation.navigate('SearchScreen', { movies });
  }; 

  const onMoviePress = (movie) => { 
    console.log('clicked...', movie.id) 
    navigation.navigate('MovieDetails', { movie });
  }; 

  return (
    <>
      <AppBar 
        title="Watch" 
        // onBackPress={handleBackPress} 
        showBackButton={false} 
        showSearchIcon={true} 
        onSearchPress={onSearchPress} 
      />
       
      <FlatList
      data={movies}
      renderItem={({ item }) => <MovieItem item={item} onPress={onMoviePress}/>} 
      keyExtractor={(item) => item.id.toString()} 
      contentContainerStyle={styles.listContainer}
    /> 
     
     
    </>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
    marginTop:20
  },
});
export default UpcomingMovies;
