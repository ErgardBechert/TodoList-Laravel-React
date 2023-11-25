import React from 'react';
import TaskItem from "@/Components/Tasks/TaskItem/TaskItem";
import styles from "./TaskList.module.css"

const TaskList = ({tasks, deleteTask}) => {
    return (
        <div className={styles.list}>
            { tasks.map((task) =>
                <TaskItem key={task.id} deleteButton={deleteTask} task={task}/>
            )}
        </div>
    );
};

export default TaskList;
