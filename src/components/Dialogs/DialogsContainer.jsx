import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessage = () => {
        props.store.dispatch(sendMessageAC());
    }
    let onMessageChange = (newMessage) => {
        let action = updateNewMessageAC(newMessage);
        props.store.dispatch(action);
    }


    return <Dialogs dialogPage={state.dialogPage}
                    updateNewMessage={onMessageChange}
                    sendMessage={onSendMessage}/>
}
export default DialogsContainer;