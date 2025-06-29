// navigation/GeneratorStackNavigation.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Generator from '../screens/Generator';
import { IconButton } from 'react-native-paper';
import GeneratedTasks from '../screens/GeneratedTasks';

const GeneratorStack = () => {
  const Stack = createNativeStackNavigator();

  const HeaderBackground = () => (
    <View
      style={{
        backgroundColor: 'rgb(104, 113, 238)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1,
      }}
    />
  );

  return (
    <Stack.Navigator initialRouteName="GeneratorScreen">
      <Stack.Screen
        name="GeneratorScreen"
        component={Generator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GeneratedTasks"
        component={GeneratedTasks}
        options={({ navigation }) => ({
          headerTitle: 'Generated Tasks',
          headerBackground: () => <HeaderBackground />,
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              iconColor="white"
              size={24}
              onPress={() => navigation.pop()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default GeneratorStack;