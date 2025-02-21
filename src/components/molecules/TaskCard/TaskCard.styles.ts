import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        height:"auto",
        justifyContent:"space-between",
        gap:5,
        margin:15,
        overflow: "hidden",
    },
    cardcontent:{
        flexDirection: "row",
        gap: 5,
        flexWrap: "nowrap",
    },
    indicator: {
        backgroundColor: "rgb(223, 126, 141)",
        width: 10,
        height:55,
        borderRadius: 12,
        marginLeft: -18,
        marginTop:-5,
      },
    cardtext:{
        flex: 1, // Allow text to take remaining space
        flexShrink: 1,
    },
    cardicons:{
        flexDirection:"row",
        alignItems:"flex-start",
        gap:20,
        marginLeft:270,
        padding:5,
    },
})