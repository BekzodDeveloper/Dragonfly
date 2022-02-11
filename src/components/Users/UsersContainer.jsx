import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        //Work request when: 1) first time; 2) yo clicked to this page from other page;
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            // this.props.setUsers(data.totalCount);
        });
    }


    render() {
        return <>
            {this.props.isFetching ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Preloader/></div> :
                <Users users={this.props.users}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged} //Without props because it's in CLASS COMPONENT
                       unFollow={this.props.unFollow} //With props because it's came from CONNECT
                       follow={this.props.follow} //With props because it's came from CONNECT
                />}
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }


export default connect(
    mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
)(UsersContainer);
