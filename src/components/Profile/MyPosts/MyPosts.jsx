import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return(
    <div className={styles.myPosts}>
        <h3>My post</h3>
        <div className={styles.addPost}>
            <div><textarea name="" id="" cols="100" rows="2"></textarea></div>
            <div>
                <button>Send</button>
            </div>
        </div>

        <Post/>
        <Post/>
        <Post/>

    </div>
    );
}

export default MyPosts;