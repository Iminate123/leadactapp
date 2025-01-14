import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Lead from '../Lead/Lead';
import Data from '../Lead/Data';

const Contact = ({ navigation }) => {
  const [index, setIndex] = useState(0); // Current tab index
  const [routes] = useState([
    { key: 'leads', title: 'Leads' },
    { key: 'data', title: 'Data' },
  ]);

  // Scene map for rendering tabs
  const renderScene = SceneMap({
    leads: Lead,
    data: Data,
  });

  // Customize the TabBar
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
      activeColor='#000'
      inactiveColor='grey'
    />
  );

  return (

    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => {
        switch (route.key) {
          case 'leads':
            return <Lead navigation={navigation}/>;
          case 'data':
            return <Data />;
          default:
            return null;
        }
      }}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={renderTabBar}
    />

  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  tabBar: {
    backgroundColor: '#ffffff',
  },
  indicator: {
    backgroundColor: 'blue',
    height: 3,
  },
  label: {
    color: 'red',
    fontWeight: '600',
  },
});

export default Contact

