import React from 'react';
import styles from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.messageText}>{props.messageText}</div>
        </div>
    )
}

export default Message;