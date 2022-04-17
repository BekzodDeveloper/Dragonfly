import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers, toggleFollowingProgress, unFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.pageSize);
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
                         requestUsers={this.props.requestUsers}
                />}
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose(
    connect(mapStateToProps, {
        follow, unFollow, toggleFollowingProgress, requestUsers
    }),
)(UsersContainer);