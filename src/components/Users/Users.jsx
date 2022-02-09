import React from "react";
import userPhotoDefault from "./../../assets/Users/images/user-default.png";
import './Users.scss';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <h1 className="pageTitle">Users</h1>
        <div>
            {pages.map(p => <span
                onClick={() => {
                    props.onPageChanged(p);
                }}
                className={`pagItem ${props.currentPage === p && 'selectedPage'}`}>{p}</span>)}
        </div>
        <div className='usersList'>
            {
                props.users.map(user => <div className='userItem' key={user.id}>
                        <div className='userItemInner'>
                            <div className='itemMain'>
                                <div className='itemPhoto'>
                                    <NavLink to='/profile'>
                                        <img src={user.photos.small ? user.photos.small : userPhotoDefault} alt="img"/>
                                    </NavLink>
                                </div>
                                <div className='followBtn'>
                                    {user.followed ? <button onClick={() => {
                                            props.unFollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>
                                    }

                                </div>
                            </div>
                            <div className='itemContent'>
                                <div className='itemDescr'><p
                                    className='itemDescrFullName'>{user.name}</p><p
                                    className='itemDescrStatus'>{user.status}</p></div>
                                <div className='itemLocation'><p>{"user.location.city"}, </p>
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