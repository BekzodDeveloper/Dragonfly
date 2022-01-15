import React from 'react';
import ProfileInfo from "./ProfileInfo";
import StoreContext from "../../../StoreContext";


const ProfileInfoContainer = (props) => {


    return <StoreContext.Consumer>
        {store => {
            return <ProfileInfo profileInfoData={store.getState().profilePage.profileInfoData}/>

        }}
    </StoreContext.Consumer>
}


export default ProfileInfoContainer;