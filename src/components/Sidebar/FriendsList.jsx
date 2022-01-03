import React from 'react';
import './FriendsList.module.css';
import styles from "../../styles/sec-friends.module.css";
import state from "../../redux/state";


const FriendsList = (props) => {
    let friendsListEl = props.state.friendsList.map(f => <FriendItem name={f.name} userPhoto={f.userPhoto} id={f.id}/>);


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

    let path = "/friend/" + props.id;
    return (
        <li className={styles.item}>
            <a className={styles.link} href={path}>
                <div>
                    <img className={styles.userPhoto}
                         src={props.userPhoto} alt=""/>
                </div>
                <p>{props.name}</p>
            </a>
        </li>
    )
}


export default FriendsList;