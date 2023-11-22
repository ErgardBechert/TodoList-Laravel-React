import React from 'react';
import styles from './TaskItem.module.css'
import Trash from '/public/images/trash.png'

const TaskItem = ({status, title, id}) => {

    return (
        <div key={id} className={styles.item}>
            <div className={styles.block}>
                <div className={styles.status}>
                    {
                        status ?
                            <div className={[styles.statusAfter] }></div>
                        :
                            undefined
                    }
                </div>
                <div className={styles.title}>
                    {title}
                </div>
            </div>
            <button className={styles.options} style={{height: 'fit-content'}}>
                <img src={Trash} alt="Удалить"/>
            </button>
        </div>
    );
};

export default TaskItem;
