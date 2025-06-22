import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../components/template/Login/Login";
import { useEffect } from "react";


const Stack = createNativeStackNavigator()
interface AuthNavigationProps{
    handleLogin:()=>void;
}

const AuthNavigation = ({handleLogin}:AuthNavigationProps) => {
   
    useEffect(()=>{
    handleLogin();
    },[]);
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login">
                {(props:any)=> <Login {...props} onLogin={handleLogin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthNavigation;