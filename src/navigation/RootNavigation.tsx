import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";
import { useBiometricAuth } from '../hooks/useBiometricAuth';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { isLoggedIn, handleBiometricLogin } = useBiometricAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Tasks" component={TabNavigation} />
      ) : (
        <Stack.Screen name="Login">
          {() => (
            <AuthNavigation handleLogin={handleBiometricLogin} />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;