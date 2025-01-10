import React from 'react';
import {Login, Splash} from './../screens/index';
import NavigationStrings from '../constants/NavigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthRouter = props => {
  return (
    <AuthStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={NavigationStrings.SPLASH} component={Splash} />
      <AuthStack.Screen name={NavigationStrings.LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthRouter;
