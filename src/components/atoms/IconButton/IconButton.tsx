import React from 'react';
import { Button } from 'react-native-paper';


type mode='text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'

interface IconButton{
    icon?:string,
    text:string,
    mode:mode,
    color:string,
    handleClick: ()=>void ,
    loading?:boolean,
    textColor?:string,
}

const IconButton = ({icon,text,mode,color,handleClick,loading,textColor}:IconButton)=>{
    return(
        <Button icon={icon ? icon : ''} mode={mode} buttonColor={color} onPress={handleClick} textColor={textColor ? textColor : 'rgb(38, 43, 79)' }  labelStyle={{ fontWeight: 'bold' }} loading={loading ? loading : false } >
            {text}
        </Button>
    );
};

export default IconButton;
