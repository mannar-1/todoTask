import React from 'react';
import CustomText from '../../atoms/Text/CustomText';
import { View } from 'react-native';
import { styles } from './HeaderText.styles';
import {  useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { filterList } from '../../../utils/filterList';

const HeaderText = () =>{
    const all_tasks = useSelector((store: RootState) => store.taskSlice.tasks);
    const active_tasks = filterList("todo",all_tasks);
    const taskString = `${active_tasks?.length === 0 ? 0 : active_tasks?.length} tasks`;
    
   return(
    <View style={styles.headerTextContainer}>
        <CustomText type="titleMedium" text="Hello, there" color="white" />
        <CustomText type="displaySmall" text="you have" color="white" />
        <CustomText type="displaySmall" text={taskString} color="white" />
    </View>
   );
};

export default HeaderText;

