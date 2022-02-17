import React from "react";
import userPhotoDefault from "./../../assets/Users/images/user-default.png";
import './Users.scss';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
        pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesList = pages.map(p => <span key={p} onClick={() => {
        props.onPageChanged(p);
    }} className={`pagItem ${props.currentPage === p && 'selectedPage'}`}>{p}</span>);


    return <div>
        <h1 className="pageTitle">Users</h1>
        <div className="pagesList">{pagesList}</div>
        <div className='usersList'>
            {props.users.map(user => <div className='userItem' key={user.id}>
                    <div className='userItemInner'>
                        <div className='itemMain'>
                            <div className='itemPhoto'>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small ? user.photos.small : userPhotoDefault} alt="img"/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ?
                                    <button className='unFollowBtn'
                                            disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.unFollow(user.id);
                                            }}>Unfollow</button>
                                    : <button className='followBtn'
                                              disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  props.follow(user.id);
                                              }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className='itemContent'>
                            <div className='itemDescr'>
                                <p className='itemDescrFullName'>{user.name}</p>
                                <p className='itemDescrStatus'>{user.status}</p></div>
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