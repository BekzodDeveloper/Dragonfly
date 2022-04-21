import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength5 = maxLengthCreator(5);

const MyPosts = React.memo(props => {
    let postsEl = props.posts.map(p => <Post id={p.id}
                                             theme={p.theme}
                                             postText={p.postText}
                                             profileImg={p.profileImg}
                                             likesCount={p.likesCount}
                                             key={p.id}/>);

    let addPost = (values) => {
        props.addPost(values.newThemeText, values.newMessageText);
    }

    return (

        <div className={styles.myPosts}>
            <h3>My post</h3>
            <div className={styles.addPost}>
                <AddNewPostFormRedux onSubmit={addPost}/>
            </div>
            {postsEl}

        </div>
    );
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.addPostInner}>
                <div className={styles.addPostTheme}>
                    <Field validate={[required, maxLength5]}
                           component={Textarea}
                           name="newThemeText"
                           cols="30" rows="3" placeholder="Theme..."/>
                </div>
                <div className={styles.addPostMessage}>
                    <Field validate={[required, maxLength5]}
                           component={Textarea}
                           name="newMessageText"
                           cols="30" rows="3" placeholder="Text..."/>
                </div>
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "mypostsAddNewPostForm"})(AddNewPostForm);

export default MyPosts;