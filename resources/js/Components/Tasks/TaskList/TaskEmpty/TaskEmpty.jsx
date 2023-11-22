import React from 'react';
import Svg from '/public/images/icon_line/ios-smartphone.svg'
import styles from './TaskEmpty.module.css'

const TaskEmpty = () => {
    return (
        <div className={[styles.container, styles.block].join(' ')}>
            <img src={Svg} alt="Блокнот"/>
            <div className={styles.container}>
                <strong>У вас еще нет созданных задач</strong>
                <span>Создавайте задачи и организуйте свои дела</span>
            </div>
        </div>
    );
};

export default TaskEmpty;
