import React from "react";
import * as axios from "axios";
import userPhotoDefault from "./../../assets/Users/images/user-default.png";

import './Users.scss';

class Users extends React.Component {
    //
    // constructor(props) {
    //     super(props);
    //
    //
    // }

    componentDidMount() {
        //Work request when: 1) first time; 2) yo clicked to this page from other page;
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setUsers(response.data.totalCount);
            });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <h1 className="pageTitle">Users</h1>
            <div>
                {pages.map(p => <span
                    onClick={(e) => {
                        this.onPageChanged(p);
                    }}
                    className={`pagItem ${this.props.currentPage === p && 'selectedPage'}`}>{p}</span>)}
            </div>
            <div className='usersList'>
                {
                    this.props.users.map(user => <div className='userItem' key={user.id}>
                            <div className='userItemInner'>
                                <div className='itemMain'>
                                    <div className='itemPhoto'><img
                                        src={user.photos.small ? user.photos.small : userPhotoDefault} alt="img"/>
                                    </div>
                                    <div className='followBtn'>
                                        {user.followed ? <button onClick={() => {
                                                this.props.unFollow(user.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(user.id)
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

}

export default Users;