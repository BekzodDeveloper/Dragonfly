import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {
    // debugger

    let dialogsEl = props.dialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}
                                                                  userPhoto={d.userPhoto}
                                                                  key={d.id}/>);
    let messagesEl = props.dialogPage.messages.map(m => <Message id={m.id}
                                                                 messageText={m.messageText}
                                                                 key={m.id}/>);

    let newMessageEl = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessage(newMessage);
    }
    // alert(props.isAuth)
    // if (!props.isAuth) return <Navigate to='/login'/>


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsInner}>
                <div className={styles.dialogsList}>
                    {dialogsEl}
                </div>
                <div className={styles.messages}>
                    <div className={styles.messagesInner}>{messagesEl}</div>
                    <div className={styles.typeMessage}>
                        <div className={styles.typeMessageInner}>
                            <textarea onChange={onMessageChange}
                                      className={styles.messageArea}
                                      ref={newMessageEl}
                                      placeholder="Type a message..."
                                      value={props.dialogPage.sendMessageData}/>
                            <button className={styles.sendBtn} onClick={onSendMessage} type="submit">Send</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    )
}
export default Dialogs;