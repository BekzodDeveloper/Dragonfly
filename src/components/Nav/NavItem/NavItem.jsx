import React from 'react';
import styles from './NavItem.module.css';
import "./../../../styles/active-link.css"
import {NavLink} from "react-router-dom";


const NavItem = (props) => {
    return (

            <li className={styles.item}>
                <NavLink className={styles.itemLink + ' item-link'} exact to={props.path}>
                    <img src={props.icon} alt=""/>
                    <div className={styles.itemText}>{props.navText}</div>
                </NavLink>
            </li>


    )
}


export default NavItem;