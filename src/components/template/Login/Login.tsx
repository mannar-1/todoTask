import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { styles } from './Login.styles';
import LoginInput from '../../atoms/LoginInput/LoginInput.';
import PrimaryBtn from '../../atoms/PrimaryBtn/PrimaryBtn';
import { Text } from 'react-native-paper';
import AppIcon from '../../../assets/AppIcon';

interface LoginProps{
    onLogin:()=>void;
}
const Login = ({onLogin}:LoginProps) =>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onClick = () =>{
        console.log("Email",email);
        console.log("Password",password);
        onLogin();
    }

 return(
    <ScrollView  contentContainerStyle={styles.scrollContainer}>
    <View
     style={styles.container}
    >
        <AppIcon/>
        <Text variant='displayLarge' style={styles.easy}>easy</Text>
        <Text variant='displayLarge' style={styles.welcome}>WELCOME</Text>
        <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <LoginInput label="Username" placeholder="Enter username" setText={setEmail}/>
        <LoginInput  label="Password" placeholder="Enter Password" setText={setPassword} />
        </View>
        <PrimaryBtn onPress={onClick} title="Login" />
        </View>
    </View>
    </ScrollView>
 )
}

export default Login;
