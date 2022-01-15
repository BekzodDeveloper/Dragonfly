import React from 'react';
import './FriendsList.module.css';
import StoreContext from "../../StoreContext";
import FriendsList from "./FriendsList";


const FriendsListContainer = () => {
    return <StoreContext.Consumer>

        {store => {
            return <FriendsList friendsList={store.getState().sidebar.friendsList}/>
        }}

    </StoreContext.Consumer>
}

export default FriendsListContainer;