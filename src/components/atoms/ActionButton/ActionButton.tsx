import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Edit from '../../../assets/Edit';
import Delete from '../../../assets/Delete';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../store/TaskSlice';

type ActionType= 'Edit' | 'Delete';

interface ActionButonProps{
  type:ActionType,
  id:number
}
const ActionButton = ({ type,id }:ActionButonProps) => {
  const dispatch = useDispatch();

  const handleAction = (type:string)=>{
    if ( type === "Delete" ){
        dispatch(removeTask({id}));
    }
  };
  const renderIcon = () => {
    switch (type) {
      case 'Edit':
        return <Edit />;
      case 'Delete':
        return <Delete />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={()=>handleAction(type)}>
      <View style={styles.iconContainer}>{renderIcon()}</View>
    </TouchableOpacity>
  );
};

const styles = {
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(220, 223, 255, 0.5)',
    justifyContent: 'center' as const ,
    alignItems: 'center' as const ,
  },
};

export default ActionButton;
