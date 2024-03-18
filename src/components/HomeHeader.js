import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import redditHeader from './redditHeader.png';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={redditHeader} style={styles.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#FF4500',
  },
  header: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
  },
});

export default HomeHeader;