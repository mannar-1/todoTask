import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./FormInput.styles";

interface FormInputProps{
    setTask : (task: string)=> void,
    value?: string,  

}
const FormInput =  ({setTask,value}:FormInputProps)=>{
    return(
        <View style={styles.inputcomponent}>
            <Text style={styles.label}>Task name</Text>
        <View style={styles.input}>
            <TextInput style={styles.inputbox} multiline={true} onChangeText={setTask} value={value} />
        </View>
        </View>
    );
};

export default FormInput;
