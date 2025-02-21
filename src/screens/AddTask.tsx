import React, { useState } from "react";
import { View } from "react-native";
import AddTaskTemplate from "../components/template/AddTask/AddTaskTemplate";
import { useDispatch } from "react-redux";
import { addTask } from "../store/TaskSlice";

const AddTask = ({navigation}:any) => {
    const dispatch=useDispatch();
    const [task,setTask]=useState<string>("");
    const [priority,setPriority]=useState<string>("");
    const handleSave= () =>{
        dispatch(addTask({task,priority,status:"todo"}));
        navigation.pop();
    }
    return (
        <View style={{flex:1,justifyContent:"center"}}>
           <AddTaskTemplate addTask={handleSave} setTask={setTask} priority={priority} setPriority={setPriority} />
        </View>
    );
};

export default AddTask;
