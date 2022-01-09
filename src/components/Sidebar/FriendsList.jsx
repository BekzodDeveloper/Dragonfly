import React from 'react';
import './FriendsList.module.css';
import styles from "../../styles/sec-friends.module.css";
import user1Photo from "./img/user1.png";
import user2Photo from "./img/user2.png";
import user3Photo from "./img/user3.png";
import user4Photo from "./img/user4.png";
import user5Photo from "./img/user5.png";


const FriendsList = (props) => {
    let friendsListEl = props.sidebarPage.friendsList.map(f => <FriendItem name={f.name} userPhoto={f.userPhoto} id={f.id}/>);


    return (
        <div className={styles.secFriends}>
            <div className={styles.title}><p>Friends</p></div>
            <div>
                <ul className={styles.list}>
                    {friendsListEl}
                </ul>
            </div>
        </div>
    )
}


const FriendItem = (props) => {

    let userPhotos = [
        {userPhoto: user1Photo},
        {userPhoto: user2Photo},
        {userPhoto: user3Photo},
        {userPhoto: user4Photo},
        {userPhoto: user5Photo}
    ];
    // let userPhotosEl = userPhotos.map(u => <img className={styles.userPhoto}
    //                                             src={u.userPhoto} alt=""/>);

    let path = "/friend/" + props.id;
    return (
        <li className={styles.item}>
            <a className={styles.link} href={path}>
                <div>
                    {/*{userPhotosEl}*/}
                    <img className={styles.userPhoto}
                         src={user1Photo} alt=""/>
                </div>
                <p>{props.name}</p>
            </a>
        </li>
    )
}


export default FriendsList;