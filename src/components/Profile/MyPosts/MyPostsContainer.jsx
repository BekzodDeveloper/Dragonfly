import {addPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import React from "react";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        addPostData: state.profilePage.addPostData
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newThemeText, newMessageText) => {
            dispatch(addPostAC(newThemeText, newMessageText))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
;