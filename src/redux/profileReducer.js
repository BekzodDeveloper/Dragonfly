import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {//profilePage
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
    profileInfoData: '',
    addPostData: {
        newThemeText: '',
        newMessageText: ''
    },
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{
                    id: 5,
                    theme: state.addPostData.newThemeText,
                    postText: state.addPostData.newMessageText,
                    profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
                    likesCount: 0
                }, ...state.posts],
                addPostData: {
                    ...state.addPostData,
                    newThemeText: '',
                    newMessageText: ''
                }
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                addPostData: {
                    ...state.addPostData,
                    newThemeText: action.newTheme,
                    newMessageText: action.newMessage
                }
            };
        }

        case SET_USER_PROFILE: {
            // debugger
            return {...state, profileInfoData: action.profileInfoData};
        }

        default:
            return state;
    }
}
    //MyPosts
export const addPostAC = () => ({type: ADD_POST}),
    updateNewPostTextAC = (newTheme, newMessage) => ({
        type: UPDATE_NEW_POST_TEXT,
        newTheme: newTheme,
        newMessage: newMessage
    }),
    //ProfileInfo
    setUserProfile = (profileInfoData) => ({type: SET_USER_PROFILE, profileInfoData}),
    getUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }

export default profileReducer;