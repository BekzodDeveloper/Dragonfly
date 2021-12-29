import React from 'react';
import styles from './../Dialogs.module.css';
import "./../../../styles/active-link.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink className="item-link" to={path}>
                <div className={styles.userPhoto}><img src={props.userPhoto} alt="img"/></div>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}


export default DialogItem;