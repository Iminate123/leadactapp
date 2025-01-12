import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Splash,
  Login,
  Home,
  Listing,
  Tools,
} from './../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const AuthStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerMode: 'screen',
        headerTitleAlign: 'center',

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
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabRoute = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: 90,
        //paddingTop:10
      },
      // tabBarActiveBackgroundColor:'grey',
      // tabBarAtabBarActiveStyle: {width: 60, height: 40},
      tabBarIconStyle: {
        width: 60,
        height: 40,
      },
      tabBarActiveTintColor: '#f4b53f',
      tabBarInactiveTintColor: 'grey',
      tabBarLabelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        //padding: 5,
      },
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-circle-outline" color={color} size={34}/>
        ),
      }} />
      <Tab.Screen name="Listing" component={Listing} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book-edit-outline" color={color} size={34}/>
        ),
      }}/>
      <Tab.Screen name="Tools" component={Tools} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="tools" color={color} size={34}/>
        ),
      }} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="TabRoute" component={TabRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
