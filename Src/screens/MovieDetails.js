import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';   
const { width, height } = Dimensions.get('window');
const MovieDetailScreen = ({ route, navigation }) => {
  const { movie } = route.params; 

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleGetTickets = () => {
    navigation.navigate('SeatMapping');

  };

  const handleWatchTrailer = () => {
    navigation.navigate('TrailerScreen', { movieId: movie.id });
  };

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" />
     
    <View style={styles.appBar}>
      <TouchableOpacity   style={styles.backButton}>
        <Icon name="arrow-back" size={24} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.appBarTitle}>{movie.title}</Text>
    </View>
 
    <ImageBackground
      source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      style={styles.imageBackground}
      resizeMode="cover"
    > 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
        
        <TouchableOpacity onPress={handleGetTickets} style={[styles.button,{backgroundColor: '#61C3F2'}]}>
          <Text style={styles.buttonText}>Get Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{borderColor: '#61C3F2',borderWidth:1}]}>
          <Text style={styles.buttonText}>Watch Trailer</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <View>
    <View style={styles.GenersContainer}>
    <Text style={styles.genersTitle}>Geners</Text> 
    </View>
    </View>
    <View style={styles.actionsRow}>
      <TouchableOpacity style={[styles.actionButton,{ backgroundColor: "#15D2BC"}]}>
        <Text style={styles.actionButtonText}>Action</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton,{ backgroundColor: "#E26CA5"}]}>
        <Text style={styles.actionButtonText}>Thriler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton,{ backgroundColor: "#564CA3"}]}>
        <Text style={styles.actionButtonText}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton,{ backgroundColor: "#CD9D0F"}]}>
        <Text style={styles.actionButtonText}>Fiction</Text>
      </TouchableOpacity>
    </View>
 
    <ScrollView style={styles.overviewContainer}>
      <Text style={styles.overviewTitle}>Overview</Text>
      <Text style={styles.overviewText}>{movie.overview}</Text>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageBackground: {
    width: '100%',
    height: height * 0.6, 
    justifyContent: 'flex-end',
  },
  appBar: {
    position: 'absolute',
    top: 30,
    left: 13,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 20,
    paddingHorizontal: 16,
    zIndex: 10,
  },
  backButton: {
    marginRight: 16,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  poster: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
  },
  movieInfo: {
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.white,
    alignSelf:'center'
  },
  releaseDate: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
    fontWeight: '500',
    alignSelf:'center'

  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 33
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginHorizontal: 10
  },
  actionButton: {
    padding: 7,
    borderRadius: 16,
    width: '22%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 14,
  },
  overviewContainer: {
    padding: 20,
  },
  GenersContainer: {
    padding: 20, 
  },
  genersTitle: {
    fontSize: 16,
    fontWeight: '500',
    // marginBottom: 10,
    color: colors.text
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: colors.text
  },
  overviewText: {
    fontSize: 12,
    color: '#8F8F8F',
  },
});

export default MovieDetailScreen;
