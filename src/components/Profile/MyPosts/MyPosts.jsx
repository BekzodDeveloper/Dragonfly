import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post theme={p.theme}
                                             postText={p.postText}
                                             profileImg={p.profileImg}
                                             likesCount={p.likesCount}/>);

    let newPostThemeEl = React.createRef();
    let newPostMessageEl = React.createRef();


    let addPost = () => {
        props.addPost();
        props.updateNewPostText('', '');
    }
//
    let onTextChange = () => {
        let themeValue = newPostThemeEl.current.value; //.current is <textarea>
        let messageValue = newPostMessageEl.current.value; //.current is <textarea>
        props.updateNewPostText(themeValue, messageValue);
    }


    return (
        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <div className={styles.addPostInner}>
                    <div className={styles.addPostTheme}>
                    <textarea onChange={onTextChange}
                              value={props.addPostData.newThemeText}
                              ref={newPostThemeEl}
                              cols="30" rows="3" placeholder="Theme..."/></div>
                    <div className={styles.addPostMessage}>
                    <textarea onChange={onTextChange}
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