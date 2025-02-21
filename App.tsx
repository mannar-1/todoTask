/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import store from './src/store/store';
import SplashScreen from 'react-native-splash-screen';


function App(): React.JSX.Element {
 

  return (
   <NavigationContainer>
    <Provider store={store}>
    <StackNavigation/>
    </Provider>
   </NavigationContainer>
  );
}

export default App;
