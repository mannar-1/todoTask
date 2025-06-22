/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
import TabNavigation from './src/navigation/TabNavigation';
import RootNavigation from './src/navigation/RootNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';


const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

function App(): React.JSX.Element {
  const [login,setLogin]= useState(false);
  const handleLogin = () => {
    setLogin(true);
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
         <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <RootNavigation isLoggedIn={login} handleLogin={handleLogin}/>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
