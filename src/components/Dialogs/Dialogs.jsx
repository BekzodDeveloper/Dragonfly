import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsEl = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} userPhoto={d.userPhoto}/>);
    let messagesEl = props.state.messages.map(m => <Message id={m.id} messageText={m.messageText}/>);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsEl}
            </div>

            <div className={styles.messages}>
                {/*<Routes>*/}
                    {/*<Route path='/page1' element={<Page title="1st page"></Page>}/>*/}
                    {/*<Route path='/page2' element={<Page title="2nd page"></Page>}/>*/}
                    {messagesEl}
                {/*</Routes>*/}
            </div>

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