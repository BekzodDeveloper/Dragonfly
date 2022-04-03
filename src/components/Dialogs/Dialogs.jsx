import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from 'redux-form';


const Dialogs = (props) => {
    let dialogsEl = props.dialogPage.dialogs.map(d =>
            <DialogItem id={d.id} name={d.name} userPhoto={d.userPhoto} key={d.id}/>),
        messagesEl = props.dialogPage.messages.map(m =>
            <Message id={m.id} messageText={m.messageText} key={m.id}/>);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };
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
                            <AddMessageFormRedux onSubmit={addNewMessage}/> </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea"
                   name="newMessageBody"
                   className={styles.messageArea}
                   placeholder="Type a message..."
            />
            <button className={styles.sendBtn}>Send</button>

        </form>
    )
}


const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;