import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";


interface RootNavigationProps{
    isLoggedIn:boolean;
    handleLogin:()=>void;   
}
const Stack = createNativeStackNavigator();
const RootNavigation = ({isLoggedIn,handleLogin}:RootNavigationProps) => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen name="Tasks" component={TabNavigation} />
          ) : (
            <Stack.Screen name="Login">
              {(props: any) => <AuthNavigation {...props} handleLogin={handleLogin} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
    )
}
export default RootNavigation;