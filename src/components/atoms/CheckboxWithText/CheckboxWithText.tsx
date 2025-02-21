import React from 'react';
import { View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { styles } from './CheckboxWithText.styles';

interface CheckboxWithTextProps{
    text:string,
    priority:string,
    setPriority: (prio:string) => void,
    checked:boolean,
    setCurrent:(current:string) => void ,
    current:string,
}
const CheckboxWithText = ({text,setPriority,checked,setCurrent}:CheckboxWithTextProps) => {
    return (
        <View style={styles.checkboxcontainer}>
            <View style={styles.checkbox}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => { setPriority(text); setCurrent(text);}}
            />
            </View>
            <Text style={styles.checkboxtext}>{text}</Text>
        </View>
    );
};

export default CheckboxWithText;
