import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsEl = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} userPhoto={d.userPhoto}/>);
    let messagesEl = props.state.messages.map(m => <Message id={m.id} messageText={m.messageText}/>);

    let newMessageEl = React.createRef();

    let sendMessage = () => {
        let text = newMessageEl.current.value;
        props.sendMessage(text);
        newMessageEl.current.value = '';
    }


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
                            <textarea className={styles.messageArea}
                                      type="text"
                                      ref={newMessageEl}
                                      placeholder="Type a message...">

                            </textarea>
                            <button className={styles.sendBtn} onClick={sendMessage} type="submit">Send</button>
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
//
// const Page = ({title}) => {
//     return (
//         <h1>{title}</h1>
//     )
// }


export default Dialogs;