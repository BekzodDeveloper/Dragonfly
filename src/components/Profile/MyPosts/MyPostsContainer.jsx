import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();


    let onAddPost = () => {
        props.store.dispatch(addPostAC());
    }
//
    let onPostChange = (themeValue, messageValue) => {
        let action = updateNewPostTextAC(themeValue, messageValue);
        props.store.dispatch(action);
    }


    return <MyPosts
        posts={state.profilePage.posts}
        addPostData={state.profilePage.addPostData}
        addPost={onAddPost}
        updateNewPostText={onPostChange}/>;
}

export default MyPostsContainer;