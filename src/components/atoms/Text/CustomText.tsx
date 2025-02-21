import React from 'react';
import { Text  } from 'react-native-paper';

type TextVariant = 'displayLarge' | 'displayMedium' | 'displaySmall' | 'headlineLarge' | 'headlineMedium' | 'headlineSmall' | 'titleLarge' | 'titleMedium' | 'titleSmall' | 'labelLarge' | 'labelMedium' | 'labelSmall' | 'bodyLarge' | 'bodyMedium' | 'bodySmall';

interface CustomTextProps{
    type:TextVariant,
    text:string,
    color?:string,
    strike?:boolean,
}
const CustomText = ({type,text,color,strike}:CustomTextProps) =>{
   return(
    <Text variant={type} style={{color: color ? color : "black" , fontWeight:"700" ,textDecorationLine : strike ? "line-through" : "none"}}>{text}</Text>
   );
};

export default CustomText;
