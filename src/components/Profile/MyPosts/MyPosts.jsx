import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post theme={p.theme} postText={p.postText}
                                       profileImg={p.profileImg} likesCount={p.likesCount}/>);
    return (
        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <div><textarea name="" id="" cols="60" rows="2"></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsEl}

        </div>
    );
}

export default MyPosts;