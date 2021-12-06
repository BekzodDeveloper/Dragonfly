import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__bg}><img
                src="data:image/jpeg;base64,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"
                alt="bg"/>
            </div>
            <div className={styles.infoContent}>
                <div className={styles.ava}><img
                    src="https://2.bp.blogspot.com/-ZyHMPySQgXE/WfXEc2HxdjI/AAAAAAAAAi4/CdScYXmDe84xCfOcLhYnVFCEg-8xchGLgCLcBGAs/s1600/nobody_m.original.jpg"
                    alt="profile"/></div>
                <div className={styles.infoDesc}>
                    <div>Bekzod Developer</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, minus!
                    </div>
                </div>
            </div>
            <MyPosts/>
            {/*/!*My posts*!/*/}
            {/*<div className={styles.myPosts}>*/}
            {/*    <h3>My post</h3>*/}
            {/*    <div>*/}
            {/*        <div><textarea name="" id="" cols="100" rows="2"></textarea></div>*/}
            {/*        <div>*/}
            {/*            <button>Send</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!*Posts*!/*/}
            {/*    <div>*/}
            {/*        /!*Post*!/*/}
            {/*        <div className={styles.profileMini}>*/}
            {/*            <div><img*/}
            {/*                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"*/}
            {/*                alt="profile"/></div>*/}
            {/*            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, pariatur!</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    )
}


export default Profile;