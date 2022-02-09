import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {
    // debugger
    if (!props.profileInfoData) return <Preloader/>
    return (
        <div>
            <div className={styles.profile__bg}>
                <img
                    src='https://images.unsplash.com/photo-1636956040469-fec02ed01ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJnJTIwc29jaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt="bg"/>
            </div>
            <div className={styles.infoContent}>
                <div className={styles.ava}><img
                    src={props.profileInfoData.photos.large}
                    alt="profile"/></div>
                <div className={styles.infoDesc}>
                    <div className={styles.fullName}>
                        {props.profileInfoData.fullName}
                    </div>
                    <div className={styles.aboutMe}>
                        <span>About me: </span> <br/>{props.profileInfoData.aboutMe}
                    </div>
                    <div className={styles.status}>
                        <div><span>Looking for a job: </span>{props.profileInfoData.lookingForAJob ? 'Yes' : 'No'}</div>
                        <div><span>Description: </span>{props.profileInfoData.lookingForAJobDescription}</div>
                    </div>
                    <div className={styles.contacts}>
                        <div>
                            <a href={`https://${props.profileInfoData.contacts.facebook}`}>Facebook</a>
                            <a href={`https://${props.profileInfoData.contacts.vk}`}>VK</a>
                            <a href={`https://${props.profileInfoData.contacts.github}`}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;