import React from 'react';
import TaskInfo from "@/Components/Tasks/TaskInfo/TaskInfo";
import TaskList from "@/Components/Tasks/TaskList/TaskList";
import TaskEmpty from "@/Components/Tasks/TaskList/TaskEmpty/TaskEmpty";

const Tasks = ({tasks}) => {
    return (
        <div>
            <TaskInfo have_tasks={tasks.length !== 0}/>
            { tasks ?
                <TaskList tasks={tasks}/>
                :
                <TaskEmpty/>
            }
        </div>
    );
};

export default Tasks;
