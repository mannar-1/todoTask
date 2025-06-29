// screens/GeneratedTasks.tsx
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text } from "react-native-paper";
import TaskList from "../components/organisms/TaskList/TaskList";
import { useRoute } from "@react-navigation/native";
import DraggableGeneratedTasks from "./DragableGeneratedTasks";
import { useDatoCMS } from "../hooks/useDatocms";

const GeneratedTasks = () => {
  const route: any = useRoute();
  const { tasks } = route.params;
  const { isSimpleView, loading, error } = useDatoCMS();
   console.log(isSimpleView, "isSimpleView in GeneratedTasks");
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="indigo" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isSimpleView ? (
        <TaskList tasks={tasks} noedit nocheckbox />
      ) : (
        <DraggableGeneratedTasks tasks={tasks} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f0f0",
  }
});

export default GeneratedTasks;