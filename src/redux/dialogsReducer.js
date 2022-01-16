const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let initialState = {
    dialogs: [
        {id: 1, name: "Zohid", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
        {
            id: 2,
            name: "Kamron",
            userPhoto: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        },
        {
            id: 3,
            name: "Qaxramon",
            userPhoto: "https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png"
        },
        {
            id: 4,
            name: "Zoyir",
            userPhoto: "https://www.oneeducation.org.uk/wp-content/uploads/2020/06/cool-profile-icons-69.png"
        }
    ],
    messages: [
        {id: 1, messageText: "Assalomu Aleykum!"},
        {id: 2, messageText: "Vaaleykum Assalom!"},
        {id: 3, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 4, messageText: "Assalomu Aleykum"},
        {id: 5, messageText: "Zoyir"},
        {id: 6, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 7, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 8, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 9, messageText: "Vaaleykum Assalom!"},
        {id: 10, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 11, messageText: "Assalomu Aleykum"},

    ],
    sendMessageData: '',
};
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.dialogs = [...state.dialogs];
    stateCopy.messages = [...state.messages];

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:122, messageText: state.sendMessageData,}],
                sendMessageData: ''
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                sendMessageData: action.newMessage
            };

        default:
            return stateCopy;
    }
}
export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text});

export default dialogsReducer;