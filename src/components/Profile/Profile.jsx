import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={styles.profile}>

            <ProfileInfo profileInfoData={props.store.getState().profilePage.profileInfoData}/>

            <MyPostsContainer store={props.store}

                // posts={props.profilePage.posts}
                //      addPostData={props.profilePage.addPostData}
                //
                //      dispatch={props.dispatch}

            />
        </div>
    )
}


export default Profile;