// SearchComponent.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleCancel = () => {
    setSearchText('');
    setIsFocused(false); // Set focus to false to hide the cancel button
    if (onSearch) {
      onSearch(''); // Call onSearch with an empty string to clear results
    }
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text); // Call onSearch with the current text
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={handleSearchTextChange}
        onFocus={() => setIsFocused(true)} // Set focus to true on focus
        onBlur={() => {
          if (searchText === '') {
            setIsFocused(false); // Hide cancel button if input is empty on blur
          }
        }}
        placeholder="Search..."
      />
      {isFocused && searchText.length > 0 && (
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Icon name="close" size={24} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 20
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  cancelButton: {
    marginLeft: 10,
  },
});

export default Search;
