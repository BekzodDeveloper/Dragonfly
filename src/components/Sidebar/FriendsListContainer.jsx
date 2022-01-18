import './FriendsList.module.css';
import FriendsList from "./FriendsList";
import React from "react";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        friendsList: state.sidebar.friendsList,

    }

}

const FriendsListContainer = connect(mapStateToProps)(FriendsList);

export default FriendsListContainer;