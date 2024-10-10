import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const MovieItem = ({ item, onPress, isTwoColumns }) => {
  return (
    <TouchableOpacity style={isTwoColumns ? styles.itemContainerTwoColumns : styles.itemContainerOneColumn} onPress={() => { onPress(item); }}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.posterImage}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainerOneColumn: { 
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  itemContainerTwoColumns: {
    width: (screenWidth / 2) - 30, 
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignSelf:'center'
  },
  posterImage: {
    width: '100%',
    height: 250,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    padding: 5,
  },
});

export default MovieItem;
