import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


class Profile extends React.Component {




    render() {

        return (
            <div className={styles.profile}>
                <ProfileInfoContainer/>
                <MyPostsContainer/>
            </div>
        )
    }
}


export default Profile;