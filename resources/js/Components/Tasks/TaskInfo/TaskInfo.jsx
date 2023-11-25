import React from 'react';
import styles from './TaskInfo.module.css'
import TaskText from "@/Components/Tasks/TaskCount/TaskText";

const TaskInfo = ({tasks, setFilter}) => {
    const count_completed = tasks.filter((item) => item.status === 2)
    const count_all = tasks.filter((item) => item.status !== 2)

    return (
        <div className={styles.container}>
            <TaskText onClick={() => setFilter([0, 1])} count={count_all.length}>Созданные задачи</TaskText>
            <TaskText onClick={() => setFilter([2])} count_all={count_all.length} count={count_completed.length}>Завершенные</TaskText>
        </div>
    );
};

export default TaskInfo;
