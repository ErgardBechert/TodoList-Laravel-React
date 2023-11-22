import React, {useEffect} from 'react';
import styles from './MainLayout.module.css'

const MainLayout = ({children}) => {
    useEffect(()  => {
        document.body.classList.add(styles.body);
    })

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
