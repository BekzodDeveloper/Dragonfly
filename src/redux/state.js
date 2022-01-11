const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    theme: "How become a Project Manager? 5 steps for it.",
                    postText: "Project managers organize teams of people to accomplish a specific goal, or project, for companies and other organizations. If you’re organized, intrigued by people, and ready to take on a larger role in your career, project management might be a good fit.",
                    profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                    likesCount: 199,
                },
                {
                    id: 2,
                    theme: "My way to Front-End Development.",
                    postText: "Lorem10",
                    profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                    likesCount: 80,
                },
                {
                    id: 3,
                    theme: "What kind of coffee I like to drink?",
                    postText: "Lorem10",
                    profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                    likesCount: 91,
                },
            ],
            profileInfoData: {
                name: "Bekzod",
                sureName: "Kholdarov",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, minus!",
                profilePhoto: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                profileBg: "https://images.unsplash.com/photo-1636956040469-fec02ed01ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJnJTIwc29jaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            addPostData: {
                newThemeText: '',
                newMessageText: ''
            },
        },

        dialogPage: {
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
                {id: 1, messageText: "Assalomu Aleykum!"},
                {id: 2, messageText: "Vaaleykum Assalom!"},
                {id: 3, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
                {id: 4, messageText: "Assalomu Aleykum"},
                {id: 5, messageText: "Zoyir"},
                {id: 6, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
                {id: 7, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
                {id: 8, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},

            ],
            sendMessageData: '',
        },

        sidebarPage: {
            friendsList: [
                {
                    id: 1,
                    name: "Abdulaziz Kholdarov",
                    userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"
                },
                {id: 2, name: "Mr. Gucci", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
                {id: 3, name: "Doni", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
                {id: 4, name: "Murod Musaev", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
                {id: 5, name: "Jamshid", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
                {id: 6, name: "Mamarayim", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"}
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed!')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                theme: this._state.profilePage.addPostData.newThemeText,
                postText: this._state.profilePage.addPostData.newMessageText,
                profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);

            this._state.profilePage.addPostData.newThemeText = '';
            this._state.profilePage.addPostData.newMessageText = '';

            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            console.log("Updated")
            this._state.profilePage.addPostData.newThemeText = action.newTheme;
            this._state.profilePage.addPostData.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessageData = {
                id: 5,
                messageText: this._state.dialogPage.sendMessageData,
            };
            this._state.dialogPage.messages.push(newMessageData);

            this._state.dialogPage.sendMessageData = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            debugger;
            this._state.dialogPage.sendMessageData = action.newMessage;
            this._callSubscriber(this._state);
        } else {
            console.log('Not found')
        }
    }


}
export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newTheme, newMessage) => ({
    type: UPDATE_NEW_POST_TEXT,
    newTheme: newTheme,
    newMessage: newMessage
});
export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text});


export default store;