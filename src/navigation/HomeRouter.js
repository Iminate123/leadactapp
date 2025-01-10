import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/index';

const HomeStack = createNativeStackNavigator();

const HomeRouter = props => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name={NavigationStrings.HOME}
        component={Home}
      />
      
    </HomeStack.Navigator>
  );
};

export default HomeRouter;
