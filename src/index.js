import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                    <App store={store}
                    //for MyPosts
                    //  addPost={addPost}
                    //  updateNewPostText={updateNewPostText}
                    //for Dialogs
                    //  sendMessage={sendMessage}
                    //  updateNewMessage={updateNewMessage}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)