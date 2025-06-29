import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./FormInput.styles";

interface FormInputProps{
    setTask : (task: string)=> void,
    value?: string,  
    label?:string,

}
const FormInput =  ({setTask,value,label}:FormInputProps)=>{
    return(
        <View style={styles.inputcomponent}>
            <Text style={styles.label}>{label ? label : "Task name"}</Text>
        <View style={styles.input}>
            <TextInput style={styles.inputbox} multiline={true} onChangeText={setTask} value={value} />
        </View>
        </View>
    );
};

export default FormInput;
