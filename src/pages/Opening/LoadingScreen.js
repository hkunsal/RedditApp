import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import openingLogo from './openingLogo.png';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen'); // Navigate to the home screen after 1-2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
    return () => clearTimeout(timer); // Clear the timer to avoid memory leaks
  }, []); // Run this effect only once on component mount

  return (
    <View style={styles.container}>
      <Image
        source={openingLogo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // optional: set background color
  },
  logo: {
    width: 200, // adjust the width as needed
    height: 200, // adjust the height as needed
  },
});

export default LoadingScreen;
