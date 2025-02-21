import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./FormInput.styles";

interface FormInputProps{
    setTask : (task: string)=> void,
}
const FormInput =  ({setTask}:FormInputProps)=>{
    return(
        <View style={styles.inputcomponent}>
            <Text style={styles.label}>Task name</Text>
        <View style={styles.input}>
            <TextInput style={styles.inputbox} multiline={true} onChangeText={setTask} />
        </View>
        </View>
    );
};

export default FormInput;
