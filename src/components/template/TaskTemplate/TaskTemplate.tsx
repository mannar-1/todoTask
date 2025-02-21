import React from "react";
import { StatusBar, View } from "react-native";
import TaskHeader from "../../organisms/TaskHeader/TaskHeader";
import TaskStatus from "../../organisms/TaskStatus/TaskStatus";
import { Task } from "../../../types/Task";
import TaskList from "../../organisms/TaskList/TaskList";

interface TaskTemplate{
    HandleAddTaskBtn:()=>void,
    tasks:Task[] | undefined,
    setFilter:(filter:string)=>void,
}
const TaskTemplate = ({HandleAddTaskBtn,tasks,setFilter}:TaskTemplate)=>{
    return(
        <View style={{flex:1}}>
             <StatusBar
       barStyle="dark-content" // Adjust the bar style as needed
       backgroundColor="rgb(104, 113, 238)" // Set the background color of the status bar
       />
            <TaskHeader HandleAddTaskBtn={HandleAddTaskBtn} />
            <TaskStatus setFilter={setFilter}/>
            <TaskList tasks={tasks}/>
        </View>
    );
};

export default TaskTemplate;
