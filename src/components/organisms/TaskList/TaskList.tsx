import React from "react";
import { FlatList, View } from "react-native";
import { Task } from "../../../types/Task";
import TaskCard from "../../molecules/TaskCard/TaskCard";

interface Tasklistprops{
    tasks:Task[] | undefined
}
const TaskList = ({tasks}:Tasklistprops) =>{
        return(
            <View>
                <FlatList
                  data={tasks}
                  keyExtractor={(item)=>item.id.toString()}
                  renderItem={(item)=><TaskCard {...item}/>}
                  />
            </View>
        );
};
export default TaskList;
