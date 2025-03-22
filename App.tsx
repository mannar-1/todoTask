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
import store from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
import TabNavigation from './src/navigation/TabNavigation';
import RootNavigation from './src/navigation/RootNavigation';


function App(): React.JSX.Element {
  const [login,setLogin]= useState(false);
  const handleLogin = () => {
    setLogin(true);
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation isLoggedIn={login} handleLogin={handleLogin}/>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
