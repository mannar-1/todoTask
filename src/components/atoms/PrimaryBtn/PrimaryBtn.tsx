import React from "react"
import {  TouchableOpacity } from "react-native"
import { styles } from "./PrimaryBtn.styles";
import { Text } from "react-native-paper";

interface PrimaryBtnProps{
    onPress:()=>void;
    title:string;
}
const PrimaryBtn = ({onPress,title}:PrimaryBtnProps) =>{
    return(
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text  variant="titleMedium">{title}</Text>
        </TouchableOpacity>
    );
};
export default PrimaryBtn;
