import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors'; 

const AppBar = ({ title, onBackPress, showBackButton, showSearchIcon, onSearchPress }) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white} 
      /> 
      <View style={styles.container}> 
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
        )}  
        <Text style={styles.title}>{title}</Text>  
        {showSearchIcon && (
          <TouchableOpacity onPress={onSearchPress} style={styles.searchButton}>
            <Icon name="search" size={24} color={colors.text} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
    padding: 16,
    backgroundColor: colors.white,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 16,
  },
  searchButton: {
    marginLeft: 16,
  },
  title: {
    flex: 1, 
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
    color: colors.text,
  },
});

export default AppBar;
