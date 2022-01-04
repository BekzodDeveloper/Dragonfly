import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post theme={p.theme} postText={p.postText}
                                             profileImg={p.profileImg} likesCount={p.likesCount}/>);

    let newPostEl = React.createRef();


    let addPost = () => {
        debugger;

        let textareaValue = newPostEl.current.value; //.current is <textarea>
        props.addPost(textareaValue);
    }


    return (
        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <div><textarea name="" ref={newPostEl} cols="60" rows="2"></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsEl}

        </div>
    );
}

export default MyPosts;