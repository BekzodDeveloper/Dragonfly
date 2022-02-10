import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import accountImg from "./../../../assets/Profile/avatar-profile.png"


const ProfileInfo = (props) => {
    if (!props.profileInfoData) return <Preloader/>

    let contacts = [props.profileInfoData.contacts.facebook,
        props.profileInfoData.contacts.vk,
        props.profileInfoData.contacts.github];
    let contactEls = contacts.map(c => {
        return !c ? '' :
            c.includes('https://') ?
                <a href={c} style={{display: 'block'}}>{c}</a>
                : <a href={'https://' + c} style={{display: 'block'}}>{'https://' + c}</a>;
    })

    return (
        <div>
            <div className={styles.profile__bg}>
                <img
                    src='https://images.pexels.com/photos/122458/pexels-photo-122458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    alt="bg"/>
            </div>
            <div className={styles.infoContent}>
                <div className={styles.ava}><img
                    src={props.profileInfoData.photos.large ? props.profileInfoData.photos.large : accountImg}
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
                            {contactEls}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;