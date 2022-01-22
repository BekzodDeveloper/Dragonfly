import React from "react";
import styles from './Users.module.css'
import * as axios from "axios";
import userPhotoDefault from "./../../assets/Users/images/user-default.png"

class Users extends React.Component {

    constructor(props) {
        super(props);

        //Work request when: 1) first time; 2) yo clicked to this page from other page;
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        return <div>
            <h1>Users</h1>
            <div className={styles.usersList}>
                {
                    this.props.users.map(user => <div className={styles.userItem} key={user.id}>
                            <div className={styles.userItemInner}>
                                <div className={styles.itemMain}>
                                    <div className={styles.itemPhoto}><img
                                        src={user.photos.small ? user.photos.small : userPhotoDefault} alt="img"/>
                                    </div>
                                    <div className={styles.followBtn}>
                                        {user.followed ? <button onClick={() => {
                                                this.props.unFollow(user.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(user.id)
                                            }}>Follow</button>
                                        }

                                    </div>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemDescr}><p
                                        className={styles.itemDescrFullName}>{user.name}</p><p
                                        className={styles.itemDescrStatus}>{user.status}</p></div>
                                    <div className={styles.itemLocation}><p>{"user.location.city"}, </p>
                                        <p>{"user.location.country"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    }

}

export default Users;