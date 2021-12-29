import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div >
            <div className={styles.profile__bg}><img
                src={props.profileInfoData.profileBg}
                alt="bg"/>
            </div>
            <div className={styles.infoContent}>
                <div className={styles.ava}><img
                    src={props.profileInfoData.profilePhoto}
                    alt="profile"/></div>
                <div className={styles.infoDesc}>
                    <div>
                        {props.profileInfoData.name} {props.profileInfoData.sureName}
                    </div>
                    <div>
                        {props.profileInfoData.about}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;