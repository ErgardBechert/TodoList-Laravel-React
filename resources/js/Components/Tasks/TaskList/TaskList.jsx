import React from 'react';
import TaskItem from "@/Components/Tasks/TaskList/TaskItem/TaskItem";
import styles from "./TaskList.module.css"

const TaskList = ({tasks}) => {
    return (
        <div className={styles.list}>
            { tasks.map((task) =>
                <TaskItem status={task.status} id={task.id} title={task.title}/>
            )}
        </div>
    );
};

export default TaskList;
