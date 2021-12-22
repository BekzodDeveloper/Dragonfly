import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                <NavLink to="/"><img
                    src="https://cryptologos.cc/logos/lto-network-lto-logo.png"
                    alt="logo"/></NavLink>
            </div>
        </header>
    )
}

export default Header;