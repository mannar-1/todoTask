import { View } from "react-native";
import { Text } from "react-native-paper";

const Generator = () => {
  return (
  <View style={styles.container}>
    <Text>This is Generator screen</Text>
  </View>
  );

};

export const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    };


export default Generator;