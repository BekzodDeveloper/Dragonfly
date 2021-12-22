import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        //Posts
        <div>
            {/*//Post*/}
            <div className={styles.postBlock}>
                <div>
                    <img className={styles.postBlockImg}
                        src={props.profileImg}
                        alt="profile"/>
                </div>
                <div className={styles.contentInner}>
                    <div className={styles.theme}>{props.theme}</div>
                    <div className={styles.message}>{props.message}</div>
                    <div>Likes: {props.likesCount}</div>
                </div>

            </div>
        </div>
    );
}

export default Post;