import React from 'react';
import {
  Home,
  Listing,
  Tools,
} from './../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
        
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
              <MaterialCommunityIcons name="home-circle-outline" color={color} size={34} />
            ),
          }} />
          <Tab.Screen name="Listing" component={Listing} options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-edit-outline" color={color} size={34} />
            ),
          }} />
          <Tab.Screen name="Tools" component={Tools} options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tools" color={color} size={34} />
            ),
          }} />
        </Tab.Navigator>
  );
};

export default TabRoute;
