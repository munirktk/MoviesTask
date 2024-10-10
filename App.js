import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import UpcomingMovies from './Src/screens/UpcomingMovies';
import MovieDetail from './Src/screens/MovieDetails';
import TrailerPlayerScreen from './Src/screens/TrailerPlayerScreen';
import SearchScreen from './Src/screens/SearchScreen';
import SeatMapping from './Src/screens/SeatMapping';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="UpcomingMovies" 
          component={UpcomingMovies} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      <Stack.Screen 
          name="MovieDetails" 
          component={MovieDetail} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      <Stack.Screen 
          name="TrailerPlayer" 
          component={TrailerPlayerScreen} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      <Stack.Screen 
          name="SearchScreen" 
          component={SearchScreen} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      <Stack.Screen 
          name="SeatMapping" 
          component={SeatMapping} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;