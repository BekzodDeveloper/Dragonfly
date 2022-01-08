import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessage, updateNewPostText} from "./redux/state";

import {BrowserRouter as Router} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state}
                     //for MyPosts
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     //for Dialogs
                     sendMessage={sendMessage}
                     updateNewMessage={updateNewMessage}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


