import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                <NavLink className={styles.logoLink} to="/">
                    <div className={styles.logoWrapper}>
                        <div><img
                            src="https://cryptologos.cc/logos/lto-network-lto-logo.png"
                            alt="logo"/>
                        </div>
                        <div className={styles.logoText}>REACTive.NET</div>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;