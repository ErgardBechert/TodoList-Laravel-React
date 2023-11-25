import React from 'react';
import styles from './TaskItem.module.css'
import Trash from '/public/images/trash.svg'

const TaskItem = ({task, deleteButton}) => {
    let status_classes = [styles.statusAfter];
    if (task.status === 2) {
        status_classes.push(styles.statusDisable)
    }

    return (
        <div key={task.id} className={styles.item}>
            <div className={styles.block}>
                <div className={styles.status}>
                    {
                        task.status ?
                            <div className={status_classes.join(' ')}></div>
                        :
                            undefined
                    }
                </div>
                <div className={styles.title}>
                    {task.title}
                </div>
            </div>
            <button onClick={() => deleteButton(task)} className={styles.options} style={{height: 'fit-content'}}>
                <img className={styles.trash} src={Trash} alt="Удалить"/>
            </button>
        </div>
    );
};

export default TaskItem;
