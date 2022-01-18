import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import React from "react";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        addPostData: state.profilePage.addPostData
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (themeValue, messageValue) => {
            let action = updateNewPostTextAC(themeValue, messageValue);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;