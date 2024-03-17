import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import redditHeader from './redditHeader.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = () => {
  const navigation = useNavigation(); 

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    left: 10,
  },
});

export default CustomHeader;