import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AddTaskTemplate from "../components/template/AddTask/AddTaskTemplate";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../store/TaskSlice";
import { RootState } from '../store/store';


const AddTask = ({ navigation, route }: any) => {
    const dispatch = useDispatch();
    const [task, setTask] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [location, setLocation] = useState<{latitude: number, longitude: number} | null>(null);
    const [isLocationEnabled, setIsLocationEnabled] = useState(false);
    const taskId = route.params?.taskId;

    const existingTask = useSelector((store: RootState) => store.taskSlice.tasks).filter((task) => task.id === taskId)[0];
    
    useEffect(()=>{
        console.log("location changed: ", location,isLocationEnabled);
    },[location])
    useEffect(() => {
        if (existingTask) {
            console.log("Editing existing task: ", existingTask);
            setTask(existingTask.task);
            setPriority(existingTask.priority);
            setCapturedImage(existingTask.image || null);
            setIsLocationEnabled(!!existingTask.location);
            setLocation(existingTask.location ? JSON.parse(existingTask.location) : null);
        }
    }, [existingTask]);

    useEffect(() => {
        console.log("Captured Image: ", capturedImage);
    }, [capturedImage])
    const handleSave = () => {
        if (taskId) {
            // Edit existing task
            dispatch(editTask({
                id: taskId,
                task,
                priority,
                status: existingTask?.status || "todo",
                image: capturedImage ?? undefined,
                location : isLocationEnabled && location ? JSON.stringify(location) : undefined
            }));
        } else {
            // Add new task
            dispatch(addTask({
                task,
                priority,
                status: "todo",
                image: capturedImage ?? undefined,
                location: isLocationEnabled && location ? JSON.stringify(location) : undefined
            }));
        }
        navigation.pop();
    }
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <AddTaskTemplate addTask={handleSave} setTask={setTask} priority={priority} setPriority={setPriority} setCapturedImage={setCapturedImage} capturedImage={capturedImage}
                task={task}
                isEditing={!!taskId} 
                isLocationEnabled={isLocationEnabled}
                setIsLocationEnabled={setIsLocationEnabled}
                setLocation={setLocation}
            />
        </View>
    );
};

export default AddTask;
