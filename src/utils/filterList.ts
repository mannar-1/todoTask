import { Task } from "../types/Task";

export const filterList = (filter:string,data:Task[])=>{
    if(filter === "done"){
        return data.filter((item)=>item.status === "done");
    }
    else if(filter === "todo"){
        return data.filter((item)=>item.status === "todo");
    }
    else if (filter === "all" ){
        return data;
    }
};
