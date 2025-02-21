import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const svgWidth = 100; // Adjust this value based on your SVG's width
const marginHorizontal = (screenWidth - svgWidth) / 2;
export const styles = StyleSheet.create({
    imageContainer: {
      alignItems:"center",
      justifyContent:"center",
        marginTop: 10,
        marginHorizontal: marginHorizontal,
    },
    imgbtn: {
        alignSelf: 'center',
        marginTop: -15,
        marginBottom: 50,
    },
    savebtn: {
        width: 300,
        alignSelf: 'center',
        marginBottom: 20,
    },
    list: {
        marginBottom: 50,
        marginTop: 50,
    },
});