import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TaskSlice"
const store = configureStore({
reducer:{
    taskSlice:TaskReducer,
}
});
export default store;
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
