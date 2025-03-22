import { StyleSheet } from "react-native";


export const styles= StyleSheet.create({
    container:{
        flex:1,
        flexGrow:1,
        backgroundColor:'rgb(104, 113, 238)',
        justifyContent:'center',
        alignItems:'center',
    },
    scrollContainer:{
        flexGrow:1,
    },
    formContainer:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        margin:20,
    },
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',

    },
    easy:{
        fontFamily:"VampiroOne-Regular",
        color:"white",
        marginTop:-50,
        marginRight:20,
        padding:0,
        fontSize:42,
    },
    welcome:{
        fontFamily:"SF-Pro-Text-RegularItalic",
        color:"white",
        fontSize:32,
        fontWeight:700,
    }
});
