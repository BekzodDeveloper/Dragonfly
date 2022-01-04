import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage} from "./redux/state";

import {BrowserRouter as Router} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state} addPost={addPost} sendMessage={sendMessage}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


