import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}><NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className={styles.item}><NavLink exact activeClassName="active" to="/profile">Profile</NavLink>
                </li>
                <li className={styles.item}><NavLink exact activeClassName="active" to="/dialogs">Messages</NavLink>
                </li>
                <li className={styles.item}><NavLink exact activeClassName="active" to="/news">News</NavLink>
                </li>
                <li className={styles.item}><NavLink exact activeClassName="active" to="/music">Music</NavLink>
                </li>
                <li className={styles.item}><NavLink exact activeClassName="active" to="/settings">Settings</NavLink>
                </li>
            </ul>

        </nav>
    )
}


export default Nav;