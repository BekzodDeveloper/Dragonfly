import React from "react";
import styles from './Users.module.css'
import * as axios from "axios";
import userPhotoDefoult from "./../../assets/Users/images/user-default.png"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {//if users is 0

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });

            // props.setUsers(
            //     [{//set this array of users
            //         id: 1,
            //         followed: true,
            //         fullName: "Bekzod Kh.",
            //         status: "I'm React Developer!",
            //         location: {city: "Tashkent", country: "Uzbekistan"},
            //         photoUlr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jCV9igq83qnxJjwBjX6F2RZX7xxJZ0rDXw&usqp=CAU'
            //     }, {
            //         id: 2,
            //         followed: false,
            //         fullName: "Abdulazisssz Kh.",
            //         status: "I'm Web Designer!",
            //         location: {city: "Tashkent", country: "Uzbekistan"},
            //         photoUlr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNK2CkG3pT2-atE3NJsVhdlcX66QlC9e1vQ&usqp=CAU'
            //     }]);
        }
    }


    return <div>
        <h1>Users</h1>
        <button onClick={getUsers}>Get users</button>
        <div className={styles.usersList}>
            {
                props.users.map(user => <div className={styles.userItem} key={user.id}>
                        <div className={styles.userItemInner}>
                            <div className={styles.itemMain}>
                                <div className={styles.itemPhoto}><img
                                    src={user.photos.small ? user.photos.small : userPhotoDefoult} alt="img"/>
                                </div>
                                <div className={styles.followBtn}>
                                    {user.followed ? <button onClick={() => {
                                            props.unFollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
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

export default Users;