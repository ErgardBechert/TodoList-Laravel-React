import React, {useState} from 'react';
import TaskInfo from "@/Components/Tasks/TaskInfo/TaskInfo";
import TaskList from "@/Components/Tasks/TaskList/TaskList";
import TaskEmpty from "@/Components/Tasks/TaskEmpty/TaskEmpty";

const Tasks = ({tasks, deleteTask, setFilter, filteredTasks}) => {

    return (
        <div>
            <TaskInfo tasks={tasks} setFilter={setFilter}/>
            { tasks ?
                <TaskList deleteTask={deleteTask} tasks={filteredTasks}/>
                :
                <TaskEmpty/>
            }
        </div>
    );
};

export default Tasks;
