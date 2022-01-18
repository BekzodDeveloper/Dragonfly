import ProfileInfo from "./ProfileInfo";
import React from "react";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profileInfoData: state.profilePage.profileInfoData,

    }

}
const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;