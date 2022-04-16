import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, toggleFollowingProgress, unFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching
                ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Preloader/></div>
                : <Users users={this.props.users}
                         totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged} //Without props because it's in CLASS COMPONENT
                         unFollow={this.props.unFollow} //With props because it's came from CONNECT
                         follow={this.props.follow} //With props because it's came from CONNECT
                         followingInProgress={this.props.followingInProgress}
                         getUsers={this.props.getUsers}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}
export default compose(
    connect(mapStateToProps, {
        follow, unFollow, toggleFollowingProgress, getUsers
    }),
)(UsersContainer);