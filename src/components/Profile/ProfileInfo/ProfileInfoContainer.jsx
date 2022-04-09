import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if (!this.props.profileInfoData) {
            return <Preloader/>
        }
        return <ProfileInfo
            //{...this.props}
            profileInfoData={this.props.profileInfoData}
            isAuth={this.props.isAuth}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}

        />
    }
}

const withParams = (Component) => props => <Component {...props} params={useParams()}/>;

const mapStateToProps = (state) => ({
    profileInfoData: state.profilePage.profileInfoData,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withParams,
    // withAuthRedirect
)(ProfileInfoContainer);
