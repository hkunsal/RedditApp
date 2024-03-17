import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen/HomeScreen';
import PostDetail from './pages/PostDetail/PostDetail';
import PostWebView from './pages/PostDetail/PostWebView';
import CustomHeader from './components/CustomHeader';
import HomeHeader from './components/HomeHeader';
import LoadingScreen from './pages/Opening/LoadingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingScreen" // Set the initial route to the loading screen
        screenOptions={({ route }) => ({
          header: () => {
            if (route.name === 'HomeScreen') {
              return <HomeHeader />;
            } else if (route.name === 'PostDetail') {
              return <CustomHeader />;
            }
          },
        })}
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="PostWebView" component={PostWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
