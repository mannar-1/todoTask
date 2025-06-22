import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Edit from '../../../assets/Edit';
import Delete from '../../../assets/Delete';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../store/TaskSlice';
import { useNavigation } from '@react-navigation/native';

type ActionType= 'Edit' | 'Delete';

interface ActionButonProps{
  type:ActionType,
  id:number
}
const ActionButton = ({ type,id }:ActionButonProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation() as any; // Type assertion to bypass TS error
  const handleAction = (type:string)=>{
    if ( type === "Delete" ){
        dispatch(removeTask({id}));
    }
    else{
     navigation.navigate('AddTask', { taskId: id });
    }
  };
console.log("here for",type);
  return (
    <TouchableOpacity onPress={() => handleAction(type)}>
    <View style={styles.iconContainer}>
      {type === 'Edit' ? <Edit /> : <Delete />}
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(220, 223, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActionButton;
