import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import UpcomingMovies from './Src/screens/UpcomingMovies';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;