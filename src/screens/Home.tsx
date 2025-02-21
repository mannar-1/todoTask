/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import TaskTemplate from '../components/template/TaskTemplate/TaskTemplate';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { filterList } from '../utils/filterList';
import { Task } from '../types/Task';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }: any) => {

    const all_tasks = useSelector((store: RootState) => store.taskSlice.tasks);
    const [filter, setFilter] = useState<string>('all');
    const [tasks,setTasks] = useState<Task[]| undefined>([]);
    useFocusEffect(
        React.useCallback(() => {
            console.log("calling");
            console.log("calling filter function with ", filter);
            const filteredTasks = filterList(filter, all_tasks);
            setTasks(filteredTasks);
            console.log(filteredTasks, "debug here");
        }, [filter, all_tasks])
    );
    const HandleAddTaskBtn = () => {
        navigation.push('AddTask');
    };

    return (
        <View style={{ flex: 1 }}>
            <TaskTemplate HandleAddTaskBtn={HandleAddTaskBtn} tasks={tasks} setFilter={setFilter} />
        </View>
    );
};
export default Home;
