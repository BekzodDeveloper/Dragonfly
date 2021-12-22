import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__bg}><img
                src="https://images.unsplash.com/photo-1636956040469-fec02ed01ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJnJTIwc29jaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="bg"/>
            </div>
            <div className={styles.infoContent}>
                <div className={styles.ava}><img
                    src="https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg"
                    alt="profile"/></div>
                <div className={styles.infoDesc}>
                    <div>Bekzod Developer</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, minus!
                    </div>
                </div>
            </div>

            <MyPosts/>

        </div>
    )
}


export default Profile;