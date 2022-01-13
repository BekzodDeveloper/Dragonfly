const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                theme: state.addPostData.newThemeText,
                postText: state.addPostData.newMessageText,
                profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                likesCount: 0
            };
            state.posts.push(newPost);

            state.addPostData.newThemeText = '';
            state.addPostData.newMessageText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.addPostData.newThemeText = action.newTheme;
            state.addPostData.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newTheme, newMessage) => ({
    type: UPDATE_NEW_POST_TEXT,
    newTheme: newTheme,
    newMessage: newMessage
});

export default profileReducer;