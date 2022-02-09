import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";
import {setUserProfile} from "../../../redux/profileReducer";


class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        if (!this.props.profileInfoData) {
            return <Preloader/>
        }
        return <ProfileInfo
            //{...this.props}
            profileInfoData={this.props.profileInfoData}
            setUserProfile={this.props.setUserProfile}
        />
    }
}

let mapStateToProps = (state) => ({
    profileInfoData: state.profilePage.profileInfoData
});

export default connect(mapStateToProps, {setUserProfile})(ProfileInfoContainer);