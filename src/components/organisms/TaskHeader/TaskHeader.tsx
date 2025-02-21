import React from 'react';
import { View } from 'react-native';
import HeaderText from '../../molecules/HeaderText/HeaderText';
import IconButton from '../../atoms/IconButton/IconButton';
import { styles } from './TaskHeader.styles';

interface TaskHeaderProps{
    HandleAddTaskBtn:()=>void,
}
const TaskHeader = ({HandleAddTaskBtn}:TaskHeaderProps) =>{
        return(
            <View style={styles.headerContainer} >
                <HeaderText/>
                <View style={styles.addTaskBtn}>
                <IconButton icon="plus" text="Add task"  mode="contained" color="rgb(248, 217, 79)" handleClick={HandleAddTaskBtn} loading={false} />
                </View>
            </View>
        );
};


export default  TaskHeader;
