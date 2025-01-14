import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Splash,
  Login,
  Contact,
  AddContact,
  InterestedDetails,
  NotIntrested,
  CallBackDetails,
  CreateTask,
  RescheduleTask,
  LostDetails,
  ContactDetails,
} from './../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabRoute from './TabRoute';

const Stack = createStackNavigator();

const AuthStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"

      screenOptions={{
        headerMode: 'screen',
        // headerStyle: {
        //   backgroundColor: 'green', // Customize header background
        // },

      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen screenOptions={{ headerTitleAlign: 'left' }}
        name="Home"
        component={TabRoute}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
      />
      <Stack.Screen
        name="InterestedDetails"
        component={InterestedDetails}
      />
     <Stack.Screen
        name="NotIntrested"
        component={NotIntrested}
      /> 
      <Stack.Screen
        name="CallBackDetails"
        component={CallBackDetails}
      /> 
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
      />
      <Stack.Screen
        name="RescheduleTask"
        component={RescheduleTask}
      />  
      <Stack.Screen
        name="LostDetails"
        component={LostDetails}
      /> 
      <Stack.Screen
        name="ContactDetails"
        component={ContactDetails}
      />  


    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
