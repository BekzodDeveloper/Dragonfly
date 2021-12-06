import React from 'react';
import styles from './NavBar.module.css';


const NavBar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/profile">Messages</a></li>
                <li><a href="/profile">News</a></li>
                <li><a href="/profile">Music</a></li>
                <li><a href="/profile">Settings</a></li>

            </ul>
        </nav>
)
}


export default NavBar;