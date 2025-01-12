import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IMAGE_PATH } from '../../constants/ImagePath';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Redirect to Login after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={IMAGE_PATH.LOGO} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreen;