import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post theme={p.theme}
                                             postText={p.postText}
                                             profileImg={p.profileImg}
                                             likesCount={p.likesCount}/>);

    let newPostThemeEl = React.createRef();
    let newPostMessageEl = React.createRef();


    let addPost = () => {
        props.dispatch(addPostAC());
        props.dispatch(updateNewPostTextAC('', ''));
    }
//
    let onPostChange = () => {
        let themeValue = newPostThemeEl.current.value;
        let messageValue = newPostMessageEl.current.value;

        props.dispatch(updateNewPostTextAC(themeValue, messageValue));

    }


    return (
        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <div className={styles.addPostInner}>
                    <div className={styles.addPostTheme}>
                    <textarea onChange={onPostChange}
                              value={props.addPostData.newThemeText}
                              ref={newPostThemeEl}
                              cols="30" rows="3" placeholder="Theme..."/></div>
                    <div className={styles.addPostMessage}>
                    <textarea onChange={onPostChange}
                              value={props.addPostData.newMessageText}
                              ref={newPostMessageEl}
                              cols="30" rows="3" placeholder="Text..."/>
                    </div>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsEl}

        </div>
    );
}

export default MyPosts;