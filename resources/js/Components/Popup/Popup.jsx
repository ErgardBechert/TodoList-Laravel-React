import React from 'react';
import styles from './Popup.module.css'

const Popup = ({title, active, setActive}) => {

    const closePopup = (e) => {
        e.preventDefault()
        setActive(false)
    }

    return (
        <div className={styles.background} style={ {display: active ? '' : 'none'}}>
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>

                </div>
                <button className={styles.close} onClick={(event) => closePopup(event)}>
                    &#10006;
                </button>
            </div>
        </div>
    );
};

export default Popup;
