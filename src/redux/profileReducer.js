const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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