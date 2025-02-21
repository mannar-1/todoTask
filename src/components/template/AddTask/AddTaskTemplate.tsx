import React from 'react';
import FormInput from '../../atoms/FormInput/FormInput';
import { ScrollView, View } from 'react-native';
import PriorirtyList from '../../organisms/PriorityList/PriorityList';
import TaskPlaceholder from '../../../assets/TaskPlaceholder';
import IconButton from '../../atoms/IconButton/IconButton';
import { styles } from './AddTaskTemplate.styles';
interface AddTaskTemplateProps {
  addTask: () => void,
  setTask: (task: string) => void,
  priority: string,
  setPriority: (priority: string) => void
}
const AddTaskTemplate = ({ addTask, setTask, priority, setPriority }: AddTaskTemplateProps) => {
  return (
    <ScrollView >
      <View style={styles.imageContainer}>
        <TaskPlaceholder />
      </View>
      <View style={styles.imgbtn}>
        <IconButton icon="plus" text="Add photo" mode="contained" color="rgb(248, 217, 79)" handleClick={() => console.log('shoud open picker')} loading={false} />
      </View>
      <FormInput setTask={setTask} />
      <View style={styles.list}>
        <PriorirtyList priority={priority} setPriority={setPriority} />
      </View>
      <View style={styles.savebtn}>
        <IconButton text="Save" mode="contained" color="rgb(248, 217, 79)" handleClick={addTask} loading={false} />
      </View>
    </ScrollView>
  );
};

export default AddTaskTemplate;
