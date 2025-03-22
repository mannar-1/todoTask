import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './LoginInput.styles';
import { Text } from 'react-native-paper';

interface LoginInputProps {
    placeholder: string;
    label: string;
    setText: (text: string) => void;
}


const LoginInput = ({ placeholder, label, setText }:LoginInputProps) => {
    return (
        <View>
            <Text style={styles.label} variant="labelSmall">{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={setText}
        />
        </View>
    );
};

export default LoginInput;
