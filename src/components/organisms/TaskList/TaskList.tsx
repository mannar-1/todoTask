import React from "react";
import { FlatList, View } from "react-native";
import { Task } from "../../../types/Task";
import TaskCard from "../../molecules/TaskCard/TaskCard";

interface Tasklistprops{
    tasks:Task[] | undefined,
    noedit?:boolean
    nocheckbox?:boolean
}
const TaskList = ({tasks,nocheckbox,noedit}:Tasklistprops) =>{
        return(
            <View style={{flex:1,width:'100%'}}>
                <FlatList
                  data={tasks}
                  keyExtractor={(item)=>item.id.toString()}
                  renderItem={({ item }) => (
                    <TaskCard
                      item={item}
                      nocheckbox={nocheckbox}
                      noedit={noedit}
                    />
                  )}
                  />
            </View>
        );
};
export default TaskList;
