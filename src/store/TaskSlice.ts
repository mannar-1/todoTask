import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';


interface TaskArray{
    tasks: Task[]
    taskid:number,
    image?: string,
    location?: {
        latitude: number,
        longitude: number
    }
}

const initialState:TaskArray = {
    tasks: [],
    taskid:1,
};

const TaskSlice = createSlice({
    name :'tasksSlice',
    initialState,
    reducers:{
        addTask: (state,action:PayloadAction<Omit<Task,'id'>>)=>{
            const newTask = {
                id:state.taskid,
                ...action.payload,
            };
            state.tasks.push(newTask);
            state.taskid++;
        },
        removeTask:(state,action:PayloadAction<{id:number}>)=>{
            console.log("calling this function");
           state.tasks = state.tasks.filter((item)=>item.id !== action.payload.id);
           console.log("after side effect",state.tasks);
        },
        editTask:(state,action:PayloadAction<Task>) =>{
                state.tasks = state.tasks.filter((item)=>item.id !== action.payload.id);
                state.tasks =  [...state.tasks,action.payload];
        },
    },
});

export default  TaskSlice.reducer;
export const {addTask,removeTask,editTask} = TaskSlice.actions;


