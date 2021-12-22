import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink className={styles.dialogLink} exact to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.messageText}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Zohid"},
        {id: 2, name: "Kamron"},
        {id: 3, name: "Qaxramon"},
        {id: 4, name: "Zoyir"}
    ];
    let messagesData = [
        {id: 1, messageText: "Assalomu Aleykum!"},
        {id: 2, messageText: "Vaaleykum Assalom!"},
        {id: 3, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 4, messageText: "Assalomu Aleykum"},
        {id: 5, messageText: "Zoyir"},
        {id: 6, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 7, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 8, messageText: "Assalomu Aleykum! Assalomu Aleykum!"}
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
                <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
                <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
            </div>

            <div className={styles.messages}>

                <Message id={messagesData[0].id} messageText={messagesData[0].messageText}/>
                <Message id={messagesData[1].id} messageText={messagesData[1].messageText}/>
                <Message id={messagesData[2].id} messageText={messagesData[2].messageText}/>
                <Message id={messagesData[3].id} messageText={messagesData[3].messageText}/>
                <Message id={messagesData[4].id} messageText={messagesData[4].messageText}/>
                <Message id={messagesData[5].id} messageText={messagesData[5].messageText}/>
                <Message id={messagesData[6].id} messageText={messagesData[6].messageText}/>
                <Message id={messagesData[7].id} messageText={messagesData[7].messageText}/>

            </div>

        </div>
    )
}


export default Dialogs;