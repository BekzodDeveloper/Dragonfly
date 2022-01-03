import React from 'react';
import styles from './Nav.module.css';
import  "./../../styles/active-link.css"
import {NavLink} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <p className={styles.navTitle}>Menu</p>
            <ul className={styles.list}>
                <li className={styles.item}><NavLink className="item-link" exact to="/">Home</NavLink>
                </li>
                <li className={styles.item}><NavLink className="item-link" exact to="/profile">Profile</NavLink>
                </li>
                <li className={styles.item}><NavLink className="item-link" exact to="/dialogs">Messages</NavLink>
                </li>
                <li className={styles.item}><NavLink className="item-link" exact to="/news">News</NavLink>
                </li>
                <li className={styles.item}><NavLink className="item-link" exact to="/music">Music</NavLink>
                </li>
                <li className={styles.item}><NavLink className="item-link" exact to="/settings">Settings</NavLink>
                </li>
            </ul>

        </nav>
    )
}


export default Nav;