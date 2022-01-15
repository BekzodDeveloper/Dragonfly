import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {

            let state = store.getState();

            let onAddPost = () => {
                store.dispatch(addPostAC());
            }

            let onPostChange = (themeValue, messageValue) => {
                let action = updateNewPostTextAC(themeValue, messageValue);
                store.dispatch(action);
            }
            return <MyPosts
                posts={state.profilePage.posts}
                addPostData={state.profilePage.addPostData}
                addPost={onAddPost}
                updateNewPostText={onPostChange}/>

        }}
    </StoreContext.Consumer>
}

export default MyPostsContainer;