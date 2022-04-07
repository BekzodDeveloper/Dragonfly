const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Zohid",
            userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png",
        },
        {
            id: 2,
            name: "Kamron",
            userPhoto:
                "https://www.oneeducation.org.uk/wp-content/uploads/2020/06/cool-profile-icons-69.png",
        },
        {
            id: 3,
            name: "Qaxramon",
            userPhoto:
                "https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png",
        },
        {
            id: 4,
            name: "Zoyir",
            userPhoto:
                "https://www.oneeducation.org.uk/wp-content/uploads/2020/06/cool-profile-icons-69.png",
        },
    ],
    messages: [
        {id: 1, messageText: "Assalomu Aleykum!"},
        {id: 2, messageText: "Vaaleykum Assalom!"},
        {id: 3, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
        {id: 4, messageText: "Assalomu Aleykum"},
        {id: 5, messageText: "Zoyir"}
    ]
};
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.dialogs = [...state.dialogs];
    stateCopy.messages = [...state.messages];

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 122, messageText: action.newMessageBody,}],
            }
        default:
            return stateCopy;
    }
}
export const sendMessageAC = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;