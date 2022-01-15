import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            let onSendMessage = () => {
                store.dispatch(sendMessageAC());
            }
            let onMessageChange = (newMessage) => {
                let action = updateNewMessageAC(newMessage);
                store.dispatch(action);
            }

            return <Dialogs dialogPage={state.dialogPage}
                            updateNewMessage={onMessageChange}
                            sendMessage={onSendMessage}/>
        }}
    </StoreContext.Consumer>
}
export default DialogsContainer;