import React from 'react';
import styles from './Header.module.css'
import Logo from "@/Components/Header/Logo";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
        </div>
    );
};

export default Header;
