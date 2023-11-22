import React from 'react';
import styles from './TaskInfo.module.css'
import TaskText from "@/Components/Tasks/TaskInfo/TaskCount/TaskText";

const TaskInfo = ({have_tasks}) => {
    return (
        <div className={styles.container} style={{border: have_tasks ? 'none': ''}}>
            <TaskText count={1}>Созданные задачи</TaskText>
            <TaskText count={0}>Завершенные</TaskText>
        </div>
    );
};

export default TaskInfo;
