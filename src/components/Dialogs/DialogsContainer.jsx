import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {store => {
//             let state = store.getState();
//
//             let onSendMessage = () => {
//                 store.dispatch(sendMessageAC());
//             }
//             let onMessageChange = (newMessage) => {
//                 let action = updateNewMessageAC(newMessage);
//                 store.dispatch(action);
//             }
//
//             return <Dialogs dialogPage={state.dialogPage}
//                             updateNewMessage={onMessageChange}
//                             sendMessage={onSendMessage}/>
//         }}
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,

    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateNewMessage: (newMessage) => {
            let action = updateNewMessageAC(newMessage);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;