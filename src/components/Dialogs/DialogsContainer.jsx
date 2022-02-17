import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth

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

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
