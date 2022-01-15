import React from 'react';
import './FriendsList.module.css';
import FriendsList from "./FriendsList";
import {connect} from "react-redux";


// const FriendsListContainer = () => {
//     return <StoreContext.Consumer>{
//         store => {
//             return <FriendsList friendsList={store.getState().sidebar.friendsList}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        friendsList: state.sidebar.friendsList,

    }

}
let mapDispatchToProps = (dispatch) => {
    return {
    k:()=>{}
    }
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;