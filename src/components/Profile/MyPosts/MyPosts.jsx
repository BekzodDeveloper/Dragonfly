import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <div><textarea name="" id="" cols="100" rows="2"></textarea></div>
                <div>
                    <button>Send</button>
                </div>
            </div>

            <Post theme="How become a Project Manager? 5 steps for it."
                  message="Project managers organize teams of people to accomplish a specific goal, or project, for companies and other organizations. If you’re organized, intrigued by people, and ready to take on a larger role in your career, project management might be a good fit."
                  profileImg="https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg"
                  likesCount="19"/>
            <Post theme="My way to Front-End Development."
                  message="Lorem10"
                  profileImg="https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg"
                  likesCount="90"/>
            <Post theme="What kind of coffee I like to drink?"
                  message="Lorem10"
                  profileImg="https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg"
                  likesCount="9"/>

        </div>
    );
}

export default MyPosts;