import React from "react";
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {//if users is 0
        props.setUsers([{//set this array of users
            id: 1,
            followed: true,
            fullName: "Bekzod Kh.",
            status: "I'm React Developer!",
            location: {city: "Tashkent", country: "Uzbekistan"},
            photoUlr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jCV9igq83qnxJjwBjX6F2RZX7xxJZ0rDXw&usqp=CAU'
        }, {
            id: 2,
            followed: false,
            fullName: "Abdulazisssz Kh.",
            status: "I'm Web Designer!",
            location: {city: "Tashkent", country: "Uzbekistan"},
            photoUlr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNK2CkG3pT2-atE3NJsVhdlcX66QlC9e1vQ&usqp=CAU'
        }]);
    }

    return <div>
        <h1>Users</h1>
        <div className={styles.usersList}>
            {
                props.users.map(u => <div className={styles.userItem} key={u.id}>
                        <div className={styles.userItemInner}>
                            <div className={styles.itemMain}>
                                <div className={styles.itemPhoto}><img src={u.photoUlr} alt="img"/></div>
                                <div className={styles.followBtn}>
                                    {u.followed ? <button onClick={() => {
                                            props.unFollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
                                    }

                                </div>
                            </div>
                            <div className={styles.itemContent}>
                                <div className={styles.itemDescr}><p
                                    className={styles.itemDescrFullName}>{u.fullName}</p><p
                                    className={styles.itemDescrStatus}>{u.status}</p></div>
                                <div className={styles.itemLocation}><p>{u.location.city}, </p>
                                    <p>{u.location.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    </div>
}

export default Users;