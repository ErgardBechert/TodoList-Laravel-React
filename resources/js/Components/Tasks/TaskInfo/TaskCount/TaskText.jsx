import React from 'react';
import styles from './TaskText.module.css'

const TaskText = ({children, count}) => {
    return (
        <div className={styles.block}>
            {children} <div className={styles.count}>{count}</div>
        </div>
    );
};

export default TaskText;
