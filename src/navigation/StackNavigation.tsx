/* eslint-disable react/no-unstable-nested-components */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AddTask from '../screens/AddTask';
import Home from '../screens/Home';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const HeaderBackground = () => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: 'rgb(104, 113, 238)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1,
      }}
    />
  );

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          headerTitle: 'Add Task',
          headerBackground: () => <HeaderBackground />,
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
