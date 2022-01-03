import React from 'react';
import styles from './NavItem.module.css';
import "./../../../styles/active-link.css"
import {NavLink} from "react-router-dom";



const NavItem = (props) => {
    return (
        <div>

            <li className={styles.item}>
                <NavLink className={'item-link ' + styles.itemLink} exact to={props.path}>
                    <img src={props.icon} alt=""/>
                    <div className={styles.itemText}>{props.navText}</div>
                </NavLink>
            </li>
            {/*<li className={styles.item}><NavLink className="item-link" exact to="/profile">Profile</NavLink>*/}
            {/*</li>*/}
            {/*<li className={styles.item}><NavLink className="item-link" exact to="/dialogs">Messages</NavLink>*/}
            {/*</li>*/}
            {/*<li className={styles.item}><NavLink className="item-link" exact to="/news">News</NavLink>*/}
            {/*</li>*/}
            {/*<li className={styles.item}><NavLink className="item-link" exact to="/music">Music</NavLink>*/}
            {/*</li>*/}
            {/*<li className={styles.item}><NavLink className="item-link" exact to="/settings">Settings</NavLink>*/}
            {/*</li>*/}

        </div>

    )
}


export default NavItem;