import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

const AnimatedSearch = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    console.log("searched Text", text);
    onSearch(text) 
  };

  const handleCancel = () => {
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={handleSearch}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleCancel}>
          <Icon name="close" size={24} color="gray" style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor:'#F2F2F6',
    borderRadius: 30, 
    margin: 16,
    paddingHorizontal:10
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color:colors.text
  },
  icon: {
    padding: 4,
  },
});

export default AnimatedSearch;
