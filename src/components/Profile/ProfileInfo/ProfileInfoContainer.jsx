import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";
import {setUserProfile} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) userId = 7255;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
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


const withParams = (Component) => props => <Component {...props} params={useParams()}/>;

let mapStateToProps = (state) => ({
    profileInfoData: state.profilePage.profileInfoData,
});

export default connect(mapStateToProps, {setUserProfile})(withParams(ProfileInfoContainer));