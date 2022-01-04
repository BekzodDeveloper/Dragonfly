import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post theme={p.theme} postText={p.postText}
                                             profileImg={p.profileImg} likesCount={p.likesCount}/>);

    let newPostThemeEl = React.createRef();
    let newPostMessageEl = React.createRef();


    let addPost = () => {
        let themeValue = newPostThemeEl.current.value; //.current is <textarea>
        let messageValue = newPostMessageEl.current.value; //.current is <textarea>
        props.addPost(themeValue,messageValue);
        newPostThemeEl.current.value = '';
        newPostMessageEl.current.value = '';
    }


    return (
        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <div className={styles.addPostTheme}><textarea name="" ref={newPostThemeEl} cols="40" rows="3" placeholder="Theme..."></textarea></div>
                <div><textarea name="" ref={newPostMessageEl} cols="40" rows="6" placeholder="Text..."></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsEl}

        </div>
    );
}

export default MyPosts;