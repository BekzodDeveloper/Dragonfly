import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

