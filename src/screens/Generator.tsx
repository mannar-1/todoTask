// screens/Generator.tsx
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { taskGenerator } from "../utils/taskGenerator";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../components/atoms/FormInput/FormInput";
import IconButton from "../components/atoms/IconButton/IconButton";

const Generator = () => {
  const navigation: any = useNavigation();
  const [taskCount, setTaskCount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateTasks = async () => {
    if (!taskCount || parseInt(taskCount) <= 0) {
      return;
    }

    try {
      setLoading(true);
      const response = await taskGenerator(parseInt(taskCount));
      navigation.navigate('GeneratedTasks', { tasks: response });
    } catch (error) {
      console.error("Error generating tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Do you want to Generate Tasks?</Text>
        <FormInput
          label="Enter number of tasks"
          value={taskCount}
          setTask={setTaskCount}
        />
        <View style={styles.button}>
        <IconButton text="Generate Tasks" mode="contained" color="rgb(248, 217, 79)" handleClick={handleGenerateTasks} loading={loading} />
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color:  '#262B4F',
  },
  button: {
    marginTop: 50,
    paddingVertical: 8,
  }
});

export default Generator;