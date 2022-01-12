const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageData = {
                id: 5,
                messageText: state.sendMessageData,
            };
            state.messages.push(newMessageData);
            state.sendMessageData = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.sendMessageData = action.newMessage;
            return state;

        default:
            return state;
    }
}
export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text});

export default dialogsReducer;