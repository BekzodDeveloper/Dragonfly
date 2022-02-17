import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";
import {getUserProfile} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.profileInfoData) {
            return <Preloader/>
        }
        return <ProfileInfo
            //{...this.props}
            profileInfoData={this.props.profileInfoData}
            isAuth={this.props.isAuth}

        />
    }
}

//hook useParams
const withParams = (Component) => props => <Component {...props} params={useParams()}/>;

let mapStateToProps = (state) => ({
    profileInfoData: state.profilePage.profileInfoData,
    isAuth:state.auth.isAuth
});

export default connect(mapStateToProps, {getUserProfile})(withParams(ProfileInfoContainer));