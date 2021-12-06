import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return(
        //Posts
        <div>
            {/*//Post*/}
            <div className={styles.profileMini}>
                <div><img
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                    alt="profile"/></div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, pariatur!</div>
            </div>
        </div>
    );
}

export default Post;