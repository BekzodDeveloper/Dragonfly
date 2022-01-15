import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profileInfoData: state.profilePage.profileInfoData,

    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        k: () => {}
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;