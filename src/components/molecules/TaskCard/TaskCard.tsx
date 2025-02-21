import React from 'react';
import { View } from 'react-native';
import { Card, Checkbox } from 'react-native-paper';
import CustomText from '../../atoms/Text/CustomText';
import { styles } from './TaskCard.styles';
import ActionButon from '../../atoms/ActionButton/ActionButton';
import { Task } from '../../../types/Task';
import { useDispatch } from 'react-redux';
import { editTask } from '../../../store/TaskSlice';

interface TaskCardProps{
  item:Task
}
const TaskCard = ({item}:TaskCardProps) => {
    const [checked, setChecked] = React.useState(item.status === "done" ? true : false);
    const dispatch = useDispatch();
  return(

    <View>
        <Card style={styles.card}>
    <Card.Content style={styles.cardcontent}>
      <View style={styles.indicator} />
    <Checkbox
             status={checked ? 'checked' : 'unchecked'}
             onPress={() => {
               setChecked(!checked);
               dispatch(editTask({...item,status: checked ? 'todo' : 'done'}));
             }}
             color="rgb(104, 113, 238)"
     />
     <View style={styles.cardtext}>
     <CustomText type="headlineSmall" text={item.task} color="black" strike={checked} />
     </View>
    </Card.Content>
    <View style={styles.cardicons}>
    <ActionButon type='Delete' id={item.id}/>
    <ActionButon type='Edit' id={item.id}/>
    </View>
  </Card>
    </View>
  );
};


export default TaskCard;
