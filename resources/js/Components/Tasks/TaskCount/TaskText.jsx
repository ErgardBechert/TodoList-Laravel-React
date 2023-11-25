import React from 'react';
import styles from './TaskText.module.css'

const TaskText = ({children, count, onClick, count_all}) => {

    return (
        <div className={styles.block} onClick={onClick}>
            {children} <div className={styles.count}>{count_all ? count + " из " + count_all : count}</div>
        </div>
    );
};

export default TaskText;
