import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRouter from './src/navigation/AuthRouter';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthRouter />
    </NavigationContainer>
  );
};

export default App;